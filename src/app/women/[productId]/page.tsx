"use client";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

interface rating {
	rate: number;
	count: number;
}

interface Product {
	id: number;
	title: string;
	price: string;
	category: string;
	description: string;
	image: string;
	rating: rating;
}

interface ProductProps {
	productData?: Product;
	isLoading?: boolean;
	error?: unknown;
}

const WomenProductPage = ({ params }: any) => {
	const productId = params.productId;
	const { data, isLoading, error } = useQuery<Product>({
		queryKey: ["singeWomenData"],
		queryFn: () =>
			fetch(`https://fakestoreapi.com/products/${productId}`).then((res) =>
				res.json(),
			),
	});
	return (
		<div className="mx-auto h-full px-0 w-full">
			<Navbar />
			<div className="mx-auto container">
				<div className="flex flex-col-reverse gap-y-2 lg:flex-row lg:gap-x-6 mx-auto lg:my-20">
					<ProductDetailsSidebar
						productData={data}
						isLoading={isLoading}
						error={error}
					/>
					<ProductDetailMainbar
						productData={data}
						isLoading={isLoading}
						error={error}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

const ProductDetailsSidebar = ({
	productData,
	isLoading,
	error,
}: ProductProps) => {
	if (isLoading)
		return (
			<div className=" basis-[70%] shrink-0">
				<Skeleton className="w-11/12 h-screen lg:grid grid-cols-1 gap-2" />
			</div>
		);
	if (error)
		return <div>An error has occurred: {(error as Error).message}</div>;
	if (!productData) return <div>No product data found</div>;
	return (
		<div className=" basis-[70%] shrink-0">
			<div className="w-full lg:w-11/12 lg:grid grid-cols-1 gap-2">
				<div className="w-full aspect-[280/220] bg-gray-200">
					<img
						src={productData.image || "/assets/image.png"}
						alt={productData.title}
						className="w-full aspect-[280/320] object-cover border border-gray-200"
						onError={(e) => {
							e.currentTarget.style.display = "none";
						}}
					/>
				</div>
			</div>
		</div>
	);
};

const ProductDetailMainbar = ({
	productData,
	isLoading,
	error,
}: ProductProps) => {
	if (isLoading)
		return (
			<div className="basis-[30%]">
				<Skeleton className="w-full h-full" />
			</div>
		);
	if (error)
		return <div>An error has occurred: {(error as Error).message}</div>;
	if (!productData) return <div>No product data found</div>;
	return (
		<div className="flex flex-col gap-y-5 basis-[30%] h-fit shrink-0  mt-5 lg:mt-0">
			<div>
				<span className="font-inter font-normal text-xs text-gray">
					<Link href="/women">Women</Link> / {productData.category}
				</span>
				<div className="flex gap-x-4 justify-between">
					<h1 className="font-inter font-normal text-2xl text-black max-w-[260px]">
						{productData.title}
					</h1>
					<h4 className="font-inter font-normal text-2xl text-black">
						${productData.price}
					</h4>
				</div>
				<div className="flex items-center gap-x-2 mt-2">
					<svg
						width="12"
						height="11"
						viewBox="0 0 12 11"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					/>
						<path
							d="M10.9921 5.36147L8.87804 7.20647L9.51132 9.95334C9.54483 10.0969 9.53527 10.2472 9.48383 10.3854C9.43239 10.5236 9.34135 10.6436 9.2221 10.7303C9.10285 10.8171 8.96068 10.8667 8.81336 10.8731C8.66604 10.8795 8.52011 10.8423 8.39382 10.7662L5.99804 9.31303L3.60741 10.7662C3.48112 10.8423 3.33519 10.8795 3.18787 10.8731C3.04055 10.8667 2.89838 10.8171 2.77913 10.7303C2.65988 10.6436 2.56884 10.5236 2.5174 10.3854C2.46596 10.2472 2.4564 10.0969 2.48991 9.95334L3.12226 7.20928L1.00773 5.36147C0.895886 5.26501 0.815014 5.13768 0.775251 4.99544C0.735489 4.85321 0.738606 4.7024 0.784212 4.56193C0.829818 4.42145 0.915882 4.29757 1.03161 4.20582C1.14734 4.11407 1.28759 4.05852 1.43476 4.04616L4.22194 3.80475L5.30991 1.20975C5.36673 1.07359 5.46256 0.957276 5.58534 0.875465C5.70813 0.793654 5.85237 0.75 5.99991 0.75C6.14745 0.75 6.2917 0.793654 6.41448 0.875465C6.53726 0.957276 6.6331 1.07359 6.68991 1.20975L7.78116 3.80475L10.5674 4.04616C10.7146 4.05852 10.8548 4.11407 10.9706 4.20582C11.0863 4.29757 11.1724 4.42145 11.218 4.56193C11.2636 4.7024 11.2667 4.85321 11.2269 4.99544C11.1872 5.13768 11.1063 5.26501 10.9944 5.36147H10.9921Z"
							fill="#262626"
						/>
					<span className="text-neutral-500 font-inter text-xs font-normal">
						{`${productData.rating.rate} (${productData.rating.count} Reviews)`}
					</span>
				</div>
			</div>
			<div className="mt-5">
				<p className="font-inter font-semibold text-xs text-black">Size</p>
				<div className="flex mt-3 gap-x-3">
					<button type="button" className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
						XS
					</button>
					<button type="button" className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
						S
					</button>
					<button type="button" className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
						M
					</button>
					<button type="button" className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
						L
					</button>
					<button type="button" className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
						XL
					</button>
					<button type="button" className="bg-footer p-3 h-[40px] w-[45px] flex items-center justify-center text-primary font-inter font-normal text-xs">
						XXL
					</button>
				</div>
				<button type="button" className="w-full bg-primary text-white mt-10 py-3 font-inter font-normal text-sm">
					ADD TO CART
				</button>
			</div>
			<div className="bg-primary-ash h-px mt-3"/>
			<div>
				<h5 className="font-inter font-semibold text-base">About Product</h5>
				<p className="font-inter font-normal text-black text-sm mt-3">
					{productData.description}
				</p>
			</div>
			<div className="bg-primary-ash h-px mb-5"/>
		</div>
	);
};

export default WomenProductPage;
