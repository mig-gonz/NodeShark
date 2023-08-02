import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${URL}products/categories/${categoryName}`
        );
        const { data } = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [categoryName]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Shop For New {categoryName}!
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
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
        <div className="w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          {product?.Images?.[0] && (
            <img
              src={product?.Images[0]?.url}
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

export default CategoryPage;
