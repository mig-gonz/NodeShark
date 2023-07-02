import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const ProductGallery = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:9000/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.data);
			});
	}, []);

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
					Check out our newest drops!
				</h2>

				<Carousel
					className=""
					showThumbs={false}
					showStatus={false}
					infiniteLoop={false}
					centerMode={true}
					centerSlidePercentage={33.3}
					autoPlay={true}
					interval={3000}>
					{products.map((product) => (
						<div
							key={product.id}
							className="m-5">
							<img
								src={product.Images[0].url}
								alt=""
							/>
							<Link to={`/products/${product.id}`}>
								<h1 className="text-lg font-bold pl-2 my-2 hover:underline">
									{product.name}
								</h1>
							</Link>
							<p className="pl-2 mb-10">${product.price}</p>
						</div>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default ProductGallery;
