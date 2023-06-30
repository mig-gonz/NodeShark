import ProductGallery from "../components/ProductGallery";

const Home = ({ products, onProductClick }) => {
  return (
    <div>
      <ProductGallery products={products} onProductClick={onProductClick} />
    </div>
  );
};

export default Home;
