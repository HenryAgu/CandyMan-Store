import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryClientProviderWrapper from "@/components/QueryClientProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome To CandyMan Store | CandyMan Store",
  description:
    "Discover a delightful variety of candies and sweets at CandyMan Store. Shop our extensive collection of chocolates, gummies, lollipops, and more. Perfect for all your sweet cravings and special occasions. Fast shipping and excellent customer service guaranteed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProviderWrapper>{children}</QueryClientProviderWrapper>
      </body>
    </html>
  );
}
