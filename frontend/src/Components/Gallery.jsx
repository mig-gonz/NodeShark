import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductGallery = () => {
  const [products, setProducts] = useState([]);

  const URL = "http://localhost:5000/products";

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 text-center ">
          Top Picks
        </h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          centerMode={true}
          centerSlidePercentage={33.3}
          autoPlay={true}
          interval={3000}
        >
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="group relative">
              <Link to={`/products/${product.id}`}>
                <div className="aspect-h-1 aspect-w-1 w-4/5 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  {product.Images.length > 0 && (
                    <img
                      src={product.Images[0].url}
                      alt={product.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  )}
                </div>
                <div className="mt-4 flex justify-center items-center">
                  <div className="text-center">
                    <h3 className="text-sm text-gray-700 inline-block">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-gray-900 ml-4">
                    {product.price}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductGallery;
