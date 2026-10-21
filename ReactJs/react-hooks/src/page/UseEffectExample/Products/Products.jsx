import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function Products() {
    const [products, setProducts] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);

    const fetchProducts = async () => {
        // Using simple promise i.e .then and .catch with fetch
        // fetch("https://dummyjson.com/products")
        //     .then((res) => res.json())
        //     .then((data) => setProducts(data.products))
        //     .catch((error) => console.error("Error fetching products:", error));

        // using async and await (first make function async)
        try {
            const response = await fetch("https://dummyjson.com/products");
            const data = await response.json();
            setProducts(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    },);

    console.log(products);

    return (
        <div className="mx-40 my-8">
            {
                products.length === 0 ?
                    <>
                    </>
                    : isEmpty
                        ?
                        <button className="border px-3" onClick={() => setIsEmpty(false)}>
                            Fetch Previous Products
                        </button>
                        :
                        <button className="border px-3" onClick={() => {
                            setProducts([]);
                            setIsEmpty(true)
                        }}>
                            Click to empty list
                        </button>
            }
            <br />
            {
                isEmpty || products.length === 0
                    ? (
                        <>
                            <span>Products are not available</span>
                        </>
                    ) : (
                        <>
                            <h1 className="my-2 text-lg text-center font-bold">Products List</h1>
                            <div className="grid grid-cols=2 lg:grid-cols-4 gap-4">
                                {products.map((product) => (
                                    <ProductCard product={product} key={product.id} />
                                ))}
                            </div>
                        </>
                    )
            }
        </div >
    );
}

export default Products;