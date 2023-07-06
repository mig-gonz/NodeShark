"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("products", [
			{
				name: "Ultra Tech Tee",
				description:
					"The Ultralight Tech Tee is built to support your toughest workouts, and engineered to fit perfectly. It's insanely light, unbelievably breathable, and built to last.",
				gender: "male",
				categoryId: 1, // shirts
				price: 36.0,
				brandId: 4,
			},
			{
				name: "Phantom Shorts",
				description:
					"From training, lifting, running or just lounging in recovery mode, the Phantom Shorts are built to transition seamlessly for whatever your day demands. With built in media pockets and zippers, they have room to keep all your essentials secure. Tailored to show off those leg days you never skip, these might just be the best workout shorts ever made.",
				gender: "male",
				categoryId: 2, // shorts
				price: 59.0,
				brandId: 4,
			},
			{
				name: "Recon Joggers",
				description:
					"Meet the ultimate fusion of comfort and performance. Tailored with our signature athletic fit, these ultra soft, high performance joggers are the perfect pant for whatever your day demands. From crushing your workout, to lounging in recovery mode, the Recon Joggers will keep you looking great all day long.",
				gender: "male",
				categoryId: 3, // joggers & sweats
				price: 43.0,
				brandId: 4,
			},
			{
				name: "Ultra Drop Tank",
				description:
					"The Ultralight Tech Tee is built to support your toughest workouts, and engineered to fit perfectly. It's insanely light, unbelievably breathable, and built to last.",
				gender: "male",
				categoryId: 4, // tanks & stringers
				price: 37.0,
				brandId: 4,
			},
			{
				name: "Stealh Hoodie",
				description:
					"Meet your new favorite hoodie. This hoodie is built to show off the best parts of your physique. Tailored with a drop hem, scuba hood, and seamless front pocket, the Stealth Hoodie is perfect for the gym, your commute, and everything in between",
				gender: "male",
				categoryId: 5, // hoodies & jackets
				price: 0,
				brandId: 4,
			},

			// Female Products
			{
				name: "Thrive Training Shirt",
				description:
					"Make the most of your me time. The Thrive training shirt is designed to help you move through your toughest workouts with comfort, style and ease. Crafted with a free flowing fit that makes sure you can breath and sweat through whatever your training demands.",
				gender: "female",
				categoryId: 1, // shirts
				price: 35.0,
				brandId: 4,
			},
			{
				name: "Sunrise Runner Shorts",
				description:
					"The Sunrise Runners are a lightweight, flatter short designed for running. Crafted with our silky smooth Flexlite fabric and linerless, you'll feel just as comfortable lounging around as hitting the trails.",
				gender: "female",
				categoryId: 2, // shorts
				price: 24.0,
				brandId: 4,
			},
			{
				name: "Contour Joggers",
				description:
					"Introducing the Contour Joggers. Designed for all day comfort, these joggers are perfect for the toughest workouts or for simply lounging around. With a high rise waist that never fits too tightly, you won't ever want to take these off.",
				gender: "female",
				categoryId: 3, // joggers & sweats
				price: 53,
				brandId: 4,
			},
			{
				name: "Calm Pullover",
				description:
					"Sometimes you just want calm vibes. Our cozy, incredibly soft Calm Pullover is the perfect shirt to throw on after a tough workout or any other time you need to relax and recover. Designed with our all purpose flex fabric - you'll want to live in this do-it-all pullover.",
				gender: "female",
				categoryId: 5, // hoodies & jackets
				price: 40,
				brandId: 4,
			},
			{
				name: "Barbell Leggings",
				description:
					"It's just you and the barbell. You show up, work hard, and make your own rules. These leggings are designed to support your toughest workouts in style.",
				gender: "female",
				categoryId: 6, // leggings
				price: 45.0,
				brandId: 4,
			},
			{
				name: "Barbell Crop Top",
				description:
					"The logo that started it all. Show 'em what you're all about with the Barbell Crop Top. With a flawless mid rise crop, and designed with our super soft poly-blend fabric, this is one tee you don't wanna miss.",
				gender: "female",
				categoryId: 7, // crop tops
				price: 20,
				brandId: 4,
			},
			{
				name: "Vented Sports Bra",
				description:
					"Flex on 'em with the all new Vented Bra. You show up, work hard, and make your own rules. You deserve clothing built to support what you're all about.",
				gender: "female",
				categoryId: 8, // sport bras
				price: 43.0,
				brandId: 4,
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
