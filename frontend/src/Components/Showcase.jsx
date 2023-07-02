import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Showcase = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("http://localhost:9000/products")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setProducts(data.data);
			});
	}, []);

	return (
		<>
			<div className="text-[#F2F3F5] flex flex-wrap justify-center">
				{products.map((product) => (
					<div
						key={product.id}
						className="w-1/4 m-2 border bg-[#323338] rounded overflow-hidden">
						<Link to={`/products/${product.id}`}>
							<div className="hover:text-[#F2F3F5] duration-150">
								<img
									src={product?.Images[2]?.url}
									alt=""
									className="mb-2"
								/>
								<h1 className="text-lg font-bold pl-2 mb-1 hover:underline">
									{product.name}
								</h1>
								<p className="pl-2 mb-1">${product.price}</p>
								<p className="font-bold pl-2 mb-1">{product?.Skus[0]?.color}</p>
								<Link to={`/products/${product.brandId}`}>
									<p className="font-bold pr-2 mb-1 text-right hover:underline">
										{/* Link to ALL brand products */}
										{/* Create Show All Brand Products Component */}
										{product.Brand.name}
									</p>
								</Link>
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default Showcase;
