import { useState, useCallback, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";

interface Product {
  productId: number;
  image: string;
  quantity: number;
  title: string;
  price: number;
}

interface CartResponse {
  id: number;
  userId: number;
  date: string; // or `Date` if you're working with Date objects
  products: Product[];
}

interface CartListProps {
  item: Product;
  onUnitPriceChange: (productId: number, unitPrice: number) => void;
}

const CartContent = () => {
  const { data, isLoading, error } = useQuery<CartResponse>({
    queryKey: ["cartData"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/carts/1").then((res) => res.json()),
  });

  const [totalPrice, setTotalPrice] = useState(0);

  const handleUnitPriceChange = useCallback((productId: number, unitPrice: number) => {
    setTotalPrice((prevTotal) => prevTotal + unitPrice);
  }, []);

  const cartData = data?.products || [];

  // Calculate subtotal directly from cartData
  const subtotal = cartData.reduce((accumulator, item) => {
    const price = item.price ?? 0;
    const itemTotal = price * item.quantity;
    return accumulator + itemTotal;
  }, 0);

  console.log(subtotal);

  if (error) return <div>Error loading cart data</div>;

  return (
    <>
      <ScrollArea className="h-[65vh] lg:h-[60vh] lg:mt-2 px-3 lg:px-6">
        {cartData.map((item) => (
          <CartList
            key={item.productId}
            item={item}
            onUnitPriceChange={handleUnitPriceChange}
          />
        ))}
      </ScrollArea>
      <div className="flex flex-col gap-y-5 px-3 lg:px-6 py-4 lg:py-8 absolute w-full bottom-0 bg-white shadow-lg">
        <div className="flex items-center justify-between">
          <h3 className="font-inter text-black font-semibold text-sm lg:text-base">
            Subtotal
            <span className="font-normal text-xs lg:text-sm">
              ({cartData.length} items)
            </span>
          </h3>
          <h3 className="font-inter text-black font-semibold text-sm lg:text-base">
            ${subtotal.toFixed(2)}
          </h3>
        </div>
        <button
          type="button"
          className="uppercase bg-candy-dark-900 text-white py-3 font-inter font-normal text-xs lg:text-sm tracking-[1.4px] leading-[16.8px]"
        >
          continue to checkout
        </button>
        <p className="text-center text-black text-xs font-inter font-semibold">
          Psst, get it now before it sells out.
        </p>
      </div>
    </>
  );
};

const CartList: React.FC<CartListProps> = ({ item, onUnitPriceChange }) => {
  const { data: cartListData, isLoading, error } = useQuery<Product>({
    queryKey: ["product", item.productId],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${item.productId}`).then((res) =>
        res.json()
      ),
  });

  useEffect(() => {
    if (cartListData) {
      const unitPrice = cartListData.price * item.quantity;
      onUnitPriceChange(item.productId, unitPrice);
    }
  }, [cartListData, item.quantity, onUnitPriceChange, item.productId]);

  if (isLoading) return <Skeleton className="mb-4 h-[20vh]" />;
  if (error) return <div>Error loading product details</div>;

  return (
    <div className="flex gap-x-4 mb-4 justify-between">
      <div className="w-full basis-1/5 border border-candy-gray-300 rounded-sm">
        <img
          src={cartListData?.image || "/assets/image.png"}
          alt="item-image"
          className="w-full lg:h-[100px] aspect-[70/100]"
        />
      </div>
      <div className="basis-4/5 flex flex-col justify-between p-2 border border-candy-gray-300 rounded-sm">
        <div className="flex items-center gap-x-5 justify-between">
          <h3 className="max-w-[325px] lg:text-sm text-xs">
            {cartListData?.title || "Loading..."}
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
            ${cartListData?.price ?? 0}
          </p>
          <div className="">
            <span className="text-black font-bold text-xs">
              Quantity:
              <span className="ml-2 font-normal">{item.quantity}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
