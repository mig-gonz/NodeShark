import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";
import { useContext } from "react";
import { CurrentUser } from "../contexts/CurrentUser";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Details = () => {
  const [selectedSize, setSelectedSize] = useState([]);
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { currentUser } = useContext(CurrentUser);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://3dhufpa4lk.execute-api.us-east-1.amazonaws.com/prod/products/${id}`
        );
        const { data } = await response.json();
        // console.log(data);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [id]);

  console.log(id);

  if (!product) {
    return <div>Loading...</div>;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser) {
      try {
        const response = await fetch(
          "https://87wzdbvx3j.execute-api.us-east-1.amazonaws.com/prod/wishlist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              productId: id,
              url: product.Images[0].url,
              userId: currentUser.id,
            }),
          }
        );

        if (response.ok) {
          console.log("Item added to wishlist");
          window.my_modal_1.showModal();
        } else {
          console.error("Failed to add item to wishlist");
        }
      } catch (error) {
        console.error("Error adding item to wishlist:", error);
      }
    } else {
      console.log("User not logged in");
    }
  };
  const login = (
    <div>
      <h2 className="mt-5 mb-5">To add items to your wishlist:</h2>
      <Link
        to="/user/login"
        className=" flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Login
      </Link>
    </div>
  );

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-4 lg:px-4">
          <div className="hidden overflow-hidden rounded-lg lg:block">
            {product && product.Images && product.Images[0] && (
              <img
                src={product.Images[0].url}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              {product && product.Images && product.Images[1] && (
                <img
                  src={product.Images[1].url}
                  alt={product.name}
                  className=" object-cover h-full w-full"
                />
              )}
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              {product && product.Images && product.Images[2] && (
                <img
                  src={product.Images[2].url}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            {product && product.Images && product.Images[3] && (
              <img
                src={product.Images[3].url}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              {`$${product.price}`}
            </p>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <RadioGroup
                  // value={}
                  // onChange={}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a color
                  </RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {[...new Set(product?.Skus?.map((sku) => sku.color))].map(
                      (color) => (
                        <RadioGroup.Option
                          key={color}
                          value={color}
                          className={({ active, checked }) =>
                            classNames(
                              active && checked ? "ring ring-offset-1" : "",
                              !active && checked ? "ring-2" : "",
                              "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                            )
                          }
                        >
                          <RadioGroup.Label as="span" className="sr-only">
                            {color}
                          </RadioGroup.Label>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              "h-8 w-8 rounded-full border border-black border-opacity-10"
                            )}
                            style={{ backgroundColor: color }}
                          />
                        </RadioGroup.Option>
                      )
                    )}
                  </div>
                </RadioGroup>
              </div>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a
                    href="https://www.universalstandard.com/pages/size-guides"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Size guide
                  </a>
                </div>

                <RadioGroup
                  value={selectedSize}
                  onChange={setSelectedSize}
                  className="mt-4"
                >
                  <RadioGroup.Label className="sr-only">
                    Choose a size
                  </RadioGroup.Label>
                  <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    {product?.Skus &&
                      product?.Skus?.filter(
                        (sku, index, self) =>
                          self.findIndex((s) => s.size === sku.size) === index
                      ).map((sku) => (
                        <RadioGroup.Option
                          key={sku.size}
                          value={sku.size}
                          // disabled={!sku.size.inStock}
                          className={({ active }) =>
                            classNames(
                              sku.size
                                ? "cursor-pointer bg-white text-gray-900 shadow-sm"
                                : "cursor-not-allowed bg-gray-50 text-gray-200",
                              active ? "ring-2 ring-indigo-500" : "",
                              "group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6"
                            )
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <RadioGroup.Label as="span">
                                {sku.size}
                              </RadioGroup.Label>
                              {sku.size ? (
                                <span
                                  className={classNames(
                                    active ? "border" : "border-2",
                                    checked
                                      ? "border-indigo-500"
                                      : "border-transparent",
                                    "pointer-events-none absolute -inset-px rounded-md"
                                  )}
                                  aria-hidden="true"
                                />
                              ) : (
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                >
                                  <svg
                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    stroke="currentColor"
                                  >
                                    <line
                                      x1={0}
                                      y1={100}
                                      x2={100}
                                      y2={0}
                                      vectorEffect="non-scaling-stroke"
                                    />
                                  </svg>
                                </span>
                              )}
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                  </div>
                </RadioGroup>
              </div>

              {currentUser ? (
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  onClick={handleSubmit}
                >
                  Add to bag
                </button>
              ) : (
                login
              )}

              <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modal-box">
                  <h3 className="font-bold text-lg">Item Added!</h3>
                  <p className="py-4">Item added to your wishlist</p>
                  <div className="modal-action">
                    <button className="btn">Close</button>
                  </div>
                </form>
              </dialog>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16">
            <h2 className="sr-only">Description</h2>
            <div className="space-y-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Description
              </h3>
              <div className="text-base text-gray-500">
                <p>{product.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
