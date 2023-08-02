import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Womens = () => {
  const [products, setProducts] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${URL}products`);
        const { data } = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const womenProducts = products.filter(
    (product) => product.gender === "female"
  );

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Womens</h2>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          Womens Products
        </h3>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {womenProducts.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/products/${product.id}`}>
                <div className="group-hover:opacity-75 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  {product.Images?.[0]?.url && (
                    <img
                      src={product.Images[0].url}
                      alt={product.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  )}
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  ${product.price}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Womens;
