import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Product {
    _id: string;
    title: string;
    price: number;
    description: string;
    image: string;
}

const ProductPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (!slug) return;
        fetch(`/api/products/${slug}`)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(err => console.error(err));
    }, [slug]);

    const addToCart = () => {
        if (!product) return;
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        const existingItem = cart.find((item: any) => item.product._id === product._id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ product, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Added to cart!");
    };

    if (!product) return <p>Loading...</p>;

    return (
        <div>
            <img src={product.image} alt={product.title} width={300} />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default ProductPage;
