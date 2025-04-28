import { ScrollArea } from "@radix-ui/react-scroll-area";
import React, { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import { useQuery } from "@tanstack/react-query";

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

const Order = () => {
  const {
    data: cartData,
    isLoading: isLoadingCart,
    error: cartError,
  } = useQuery<CartResponse>({
    queryKey: ["cartData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/carts/1").then((res) => res.json()),
  });

  const productIds = cartData?.products?.map((product) => product.productId) || [];

  const {
    data: productsData,
    isLoading: isLoadingProducts,
    error: productsError,
  } = useQuery<Product[]>({
    queryKey: ["products", productIds],
    queryFn: () =>
      Promise.all(
        productIds.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
        )
      ),
    enabled: productIds.length > 0,
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (productsData && cartData) {
      const total = productsData.reduce((total, product) => {
        const cartItem = cartData.products.find(
          (item) => item.productId === product.id
        );
        return total + (cartItem ? product.price * cartItem.quantity : 0);
      }, 0);
      setTotalPrice(total);
    }
  }, [productsData, cartData]);

  if (isLoadingCart || isLoadingProducts)
    return (
      <div className="flex flex-col gap-y-4 w-full">
        <Skeleton className="w-full h-[20vh]" />
        <Skeleton className="w-full h-[20vh]" />
        <Skeleton className="w-full h-[20vh]" />
      </div>
    );

  if (cartError || productsError) return <div>Error loading data</div>;

  return (
    <div className="flex flex-col w-full">
      {(cartData?.products || []).map((item) => {
        const productDetails = productsData?.find(
          (product) => product.id === item.productId
        );

        return (
          <div
            key={item.productId}
            className="flex w-full gap-x-4 mb-4 justify-between mt-5"
          >
            <div className="basis-1/5 w-full border border-candy-gray-300 rounded-sm">
              <img
                src={productDetails?.image || "/assets/image.png"}
                alt="item-image"
                className="w-full h-auto aspect-[70/100] object-contain"
              />
            </div>
            <div className="flex flex-col justify-between w-full p-2 border border-candy-gray-300 rounded-sm">
              <div className="flex items-center gap-x-5 justify-between">
                <h3 className="text-xs lg:text-sm truncate">
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

      {/* Subtotal */}
      <div className="flex flex-col gap-y-5 px-3 lg:px-6 py-4 lg:py-8 w-full bg-white shadow-lg mt-4">
        <div className="flex items-center justify-between w-full">
          <h3 className="font-inter text-black font-semibold text-sm lg:text-base">
            Total
            <span className="font-normal text-xs lg:text-sm ml-1">
              ({cartData?.products?.length || 0} items)
            </span>
          </h3>
          <h3 className="font-inter text-black font-semibold text-sm lg:text-base">
            ${totalPrice.toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Order;
