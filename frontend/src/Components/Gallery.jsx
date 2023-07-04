import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const Gallery = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:9000/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.data);
			});
	}, []);

	return (
		<div className="bg-white mb-8 flex justify-center items-center overflow-hidden h-[750px]">
			<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
				<h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">
					Check out our newest drops!
				</h2>

				<Carousel
					showThumbs={false}
					showStatus={false}
					centerMode={true}
					centerSlidePercentage={38}
					autoPlay={true}
					showArrows={true}
					interval={3000}>
					{products.map((product) => (
						<div
							key={product.id}
							className="m-5 text-[#D0D3DB]">
							<Link to={`/products/${product.id}`}>
								<div>
									<img
										src={product?.Images[0]?.url}
										alt=""
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
			</div>
		</div>
	);
};

export default Gallery;
