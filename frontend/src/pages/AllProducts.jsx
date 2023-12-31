import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdBanner from "../components/AdBanner";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://3dhufpa4lk.execute-api.us-east-1.amazonaws.com/prod/products"
        );
        const { data } = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Shop Your Favorite Styles
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.slice(0, 16).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="divider w-11/12 m-auto mt-10"></div>
        <AdBanner />
        <div className="divider w-11/12 m-auto mb-10 mt-6"></div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.slice(16).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="group relative">
      <Link to={`/products/${product.id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          {product?.Images?.[0] && (
            <img
              src={product.Images[0].url}
              alt={product.name}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
          )}
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{product.name}</h3>
          </div>
          <p className="text-sm font-medium text-gray-900">
            {`$${product.price}`}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default AllProducts;
