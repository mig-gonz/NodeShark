import { useState, useEffect, useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { Link } from "react-router-dom";
import na from "../assets/na.jpg";
import "../index.css";

const WishList = () => {
  const [products, setProducts] = useState([]);
  const { currentUser } = useContext(CurrentUser);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `https://64sgqkiamh.execute-api.us-east-1.amazonaws.com/prod/wishlist?userId=${currentUser.id}`
        );
        const data = await response.json();
        // console.log(data.items);
        setProducts(data.items);
      } catch (error) {
        console.error("Error fetching wishlist items:", error);
      }
    };

    fetchItems();
  }, []);

  // console.log(currentUser);

  const handleDelete = async (itemId) => {
    try {
      const response = await fetch(
        `https://64sgqkiamh.execute-api.us-east-1.amazonaws.com/beta/wishlist/${itemId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Item deleted successfully, update the products state
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== itemId)
        );
      } else {
        // Handle error if item deletion fails
        console.error("Error deleting wishlist item:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting wishlist item:", error);
    }
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center uppercase main-title">
          {`${currentUser.firstName}\`s`} wishlist
        </h1>
        <h2 className="sr-only">Wish list items</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            // console.log("Current item ID:", product.id);

            return (
              <div key={product.id} className="group flex flex-col">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <Link to={`/products/${product.productId}`}>
                    <img
                      src={product.url}
                      alt={product.imageAlt}
                      onError={(e) => {
                        e.target.src = na;
                      }}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </Link>
                </div>
                <div className="flex items-center justify-between w-full mt-4">
                  <p className="text-lg font-medium text-gray-900">
                    {product.Product.name}
                  </p>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="btn mt-2 text-sm text-red-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WishList;
