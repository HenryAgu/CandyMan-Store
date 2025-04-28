import { useState, useCallback, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Product {
  id: number;
  productId: number;
  image: string;
  quantity: number;
  title: string;
  price: number;
}

interface CartResponse {
  id: number;
  userId: number;
  date: string;
  products: Product[];
}

interface CartListProps {
  item: Product;
  onUnitPriceChange: (productId: number, unitPrice: number) => void;
}

const CartContent = () => {
  const {
    data: cartData,
    isLoading: isLoadingCart,
    error: cartError,
  } = useQuery<CartResponse>({
    queryKey: ["cartData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/carts/1").then((res) => res.json()),
  });

  const productIds =
    cartData?.products?.map((product) => product.productId) || [];

  const {
    data: productsData,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useQuery<Product[]>({
    queryKey: ["products", productIds],
    queryFn: () =>
      Promise.all(
        productIds.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
            res.json()
          )
        )
      ),
    enabled: productIds.length > 0, // Only run this query if there are product IDs
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (productsData && cartData) {
      const total = productsData.reduce((total, product) => {
        const cartItem = cartData?.products?.find(
          (item) => item.productId === product.id
        );
        return total + (cartItem ? product.price * cartItem.quantity : 0);
      }, 0);
      setTotalPrice(total);
    }
  }, [productsData, cartData]);

  if (isLoadingCart || isLoadingProducts)
    return (
      <div className="flex flex-col gap-y-4">
        <Skeleton className="mx-4 h-[20vh]" />
        <Skeleton className="mx-4 h-[20vh]" />
        <Skeleton className="mx-4 h-[20vh]" />
      </div>
    );
  if (cartError || productsError) return <div>Error loading data</div>;

  return (
    <>
      <ScrollArea className="h-[65vh] lg:h-[60vh] lg:mt-2 px-3 lg:px-6">
        {(cartData?.products || []).map((item) => {
          const productDetails = productsData?.find(
            (product) => product.id === item.productId
          );

          return (
            <div
              key={item.productId}
              className="flex gap-x-4 mb-4 justify-between"
            >
              <div className="w-full basis-1/5 border border-candy-gray-300 rounded-sm">
                <img
                  src={productDetails?.image || "/assets/image.png"}
                  alt="item-image"
                  className="w-full lg:h-[100px] aspect-[70/100]"
                />
              </div>
              <div className="basis-4/5 flex flex-col justify-between p-2 border border-candy-gray-300 rounded-sm">
                <div className="flex items-center gap-x-5 justify-between">
                  <h3 className="max-w-[325px] lg:text-sm text-xs">
                    {productDetails?.title || "Loading..."}
                  </h3>
                  <button type="button">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    />
                  </button>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-candy-dark-900 text-xs font-semibold">
                    ${productDetails?.price ?? 0}
                  </p>
                  <div>
                    <span className="text-black font-bold text-xs">
                      Quantity:
                      <span className="ml-2 font-normal">{item.quantity}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </ScrollArea>
      <div className="flex flex-col gap-y-5 px-3 lg:px-6 py-4 lg:py-8 absolute w-full bottom-0 bg-white shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="font-inter text-black font-semibold text-sm lg:text-base">
            Subtotal
            <span className="font-normal text-xs lg:text-sm">
              ({cartData?.products?.length || 0} items)
            </span>
          </h3>
          <h3 className="font-inter text-black font-semibold text-sm lg:text-base">
            ${totalPrice.toFixed(2)}
          </h3>
        </div>
        <Link href="/checkout"
          type="button"
          className="uppercase text-center bg-candy-dark-900 text-white py-3 font-inter font-normal text-xs lg:text-sm tracking-[1.4px] leading-[16.8px]"
        >
          continue to checkout
        </Link>
        <p className="text-center text-black text-xs font-inter font-semibold">
          Psst, get it now before it sells out.
        </p>
      </div>
    </>
  );
};

export default CartContent;
