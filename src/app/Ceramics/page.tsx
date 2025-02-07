"use client";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../types/products";
import { useState, useEffect } from "react";
import { allProducts } from "@/sanity/lib/qurrires";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addTocart } from "../actions/actions";
import swal from "sweetalert2"

const NewCeramics = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allProducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.log("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);



  const handleaddtocart = (e : React.MouseEvent, product : Product) => {
    e.preventDefault()
     swal.fire({
      position : "center",
      icon : "success",
      title : `${product.title} added to cart`,
      showConfirmButton:false,
      timer : 1500
     })
    addTocart(product)
     
  }



  return (
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col ">
      <h2 className="text-3xl font-sans">New Ceramics</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-12">
        {products.map((product) => (
          <div
            key={product._id}
            className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
          >
            {product.slug ? (
              <Link href={`/product/${product.slug}`}>
                <h3 className="text-lg font-semibold">{product.title}</h3>
                {product.productImage && (
                  <Image
                    src={urlFor(product.productImage).url()}
                    alt={product.title}
                    width={240}
                    height={240}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <p className="text-gray-500 mt-2">
                  {product.price ? `$${product.price}` : "Price not available"}
                </p>

                <button className=" bg-gradient-to-r from-primary to-blue-300 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-in-out"
                  onClick={(e) => handleaddtocart(e, product)}
                >
                    Add To Cart
                </button>               

              </Link>
            ) : (
              <p className="text-red-500">Slug not available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCeramics;
