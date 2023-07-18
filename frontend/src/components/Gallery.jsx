import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [products, setProducts] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://64sgqkiamh.execute-api.us-east-1.amazonaws.com/beta/products"
        );
        const { data } = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1027);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const latestProducts = products.slice(0, 8);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };

  return (
    <div className="bg-white mb-8 flex justify-center items-center overflow-hidden h-[750px]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
          Check out our newest drops!
        </h2>

        {isMobile ? (
          <div className="flex overflow-x-auto">
            {latestProducts.map((product, index) => (
              <div
                key={product.id}
                className={`m-5 p-5 text-[#9c9ea2] ${
                  index !== currentSlide ? "hidden" : ""
                }`}
              >
                <Link to={`/products/${product.id}`}>
                  <div>
                    <img
                      src={product?.Images[0]?.url}
                      alt={product.name}
                      className="h-96 w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </Link>
                <Link to={`/products/${product.id}`}>
                  <h1 className="text-lg font-bold pl-2 my-2 hover:underline hover:text-[#D0D3DB]">
                    {product?.name}
                  </h1>
                </Link>
                <p className="pl-2 mb-10">{`$${product.price}`}</p>
              </div>
            ))}
          </div>
        ) : (
          <Carousel
            showThumbs={false}
            showStatus={false}
            centerMode={true}
            centerSlidePercentage={33.3}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}
            showIndicators={true}
            interval={3000}
            selectedItem={currentSlide}
            onChange={(index) => setCurrentSlide(index)}
          >
            {latestProducts.map((product) => (
              <div key={product.id} className="m-5 p-5 text-[#9c9ea2]">
                <Link to={`/products/${product.id}`}>
                  <div>
                    <img
                      src={product?.Images[0]?.url}
                      alt={product.name}
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                </Link>
                <Link to={`/products/${product.id}`}>
                  <h1 className="text-lg font-bold pl-2 my-2 hover:underline hover:text-[#D0D3DB]">
                    {product?.name}
                  </h1>
                </Link>
                <p className="pl-2 mb-10">{`$${product.price}`}</p>
              </div>
            ))}
          </Carousel>
        )}

        {isMobile && (
          <div className="flex justify-center">
            {currentSlide !== 0 && (
              <button
                className="btn-primary mr-2 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handlePrevSlide}
              >
                Previous
              </button>
            )}
            <button
              className="btn-primary mr-2 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleNextSlide}
              disabled={currentSlide === latestProducts.length - 1}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
