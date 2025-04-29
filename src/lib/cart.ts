// lib/cart.ts

export interface Product {
    id: number;
    productId: number;
    image: string;
    quantity: number;
    title: string;
    price: number;
  }
  
  export interface CartResponse {
    id: number;
    userId: number;
    date: string;
    products: Product[];
  }
  
  export const fetchCartData = async (): Promise<CartResponse> => {
    const response = await fetch("https://fakestoreapi.com/carts/1");
    if (!response.ok) {
      throw new Error("Failed to fetch cart data");
    }
    return response.json();
  };
  
  export const fetchProductsByIds = async (productIds: number[]): Promise<Product[]> => {
    const responses = await Promise.all(
      productIds.map((id) =>
        fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
      )
    );
    return responses;
  };
  