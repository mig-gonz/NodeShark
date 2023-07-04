import React from "react";

const ContactUs = () => {
	return (
		<div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-white ">
			<div className="flex flex-col lg:flex-row justify-between gap-8">
				<div className="w-full lg:w-5/12 flex flex-col justify-center">
					<h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-black">
						Get In Touch
					</h1>
					<p class="font-normal text-base leading-6 text-gray-900 mb-2">
						For any questions or comments, please contact us!
					</p>
					<a
						href="mailto:contact@nodeshark.com"
						className="text-base font-bold leading-6 text-blue-500 hover:underline">
						contact@nodeshark.com
					</a>
				</div>
				<div className="w-full lg:w-8/12">
					<img
						className="w-full h-full"
						src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1894&q=80"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
