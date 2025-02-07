"use client";

import { Product } from "../../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { addTocart } from "@/app/actions/actions";
import Swal from "sweetalert2";

export default function ProductClient({ product }: { product: Product }) {
  const handleaddtocart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `${product.title} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
    addTocart(product);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="aspect-square">
          {product.productImage && (
            <Image
              src={urlFor(product.productImage).url()}
              alt={product.title}
              width={500}
              height={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-gray-500">{product.description}</p>
          <div className="flex justify-between">
            <p className="text-2xl font-semibold">
              {product.price ? `$${product.price}` : "Price not available"}
            </p>
            <button
              onClick={(e) => handleaddtocart(e, product)}
              className="w-32 h-11 border bg-gray-200 rounded-lg hover:bg-gray-300 hover:border-black duration-300 transition hover:translate-y-1 hover:font-bold"
            >
              Add To Cart
            </button>
          </div>
          <hr className="border-t border-gray-300" />
        </div>
      </div>
    </div>
  );
}