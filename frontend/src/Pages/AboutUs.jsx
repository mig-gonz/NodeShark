import React from "react";

const AboutUs = () => {
	return (
		<div className="2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-white ">
			<div className="flex flex-col lg:flex-row justify-between gap-8">
				<div className="w-full lg:w-5/12 flex flex-col justify-center">
					<h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-black">
						About Us
					</h1>
					<p className="font-normal text-base leading-6 text-gray-900 mb-2">
						We decided to create this website so we could present it our class
						as our final project. The hope is one day become a web developer and
						contine to grow our knowledge in the field we all love.
					</p>
					<p className="font-normal text-base leading-6 text-gray-900 mb-2">
						The difficulties of the project were not too big to handle, we
						continuously chatted about how to get past any humps we faced and in
						the end, we created NodeShark. We hope you have enjoyed the preview
						of our futures.
					</p>
					<p className="font-normal text-base leading-6 text-gray-900 mb-2">
						Thank you all for your support. Best regards, Team NodeShark.
					</p>
				</div>
				<div className="w-full lg:w-8/12">
					<img
						className="w-full h-full"
						src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
