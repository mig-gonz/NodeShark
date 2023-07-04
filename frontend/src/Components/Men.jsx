import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Men = () => {
  const [products, setProducts] = useState([]);

  const URL = "http://localhost:5000/products";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  const maleProducts = products.filter((product) => product.gender === "male");

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
          {maleProducts.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/details/${product.id}`}>
                <div className="group-hover:opacity-75 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  {product && product.Images && product.Images[0] && (
                    <img
                      src={product.Images[0].url}
                      alt={product.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  )}
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  {`$${product.price}`}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Men;
