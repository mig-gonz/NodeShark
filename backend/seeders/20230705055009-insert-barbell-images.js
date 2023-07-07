"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("images", [
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/files/ultralight-tech-tee-front-black_720x.jpg?v=1686253194",
				productId: 21,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/files/ultralight-tech-tee-back-in-focus-black_720x.jpg?v=1686253194",
				productId: 21,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/files/ultralight-tech-tee-front-in-focus-storm_720x.jpg?v=1686253194",
				productId: 21,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/files/ultralight-tech-tee-back-in-focus-storm_720x.jpg?v=1686253194",
				productId: 21,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/phantom-short-front-in-focus-blackout_720x.jpg?v=1678227245",
				productId: 22,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/phantom-short-back-blackout_720x.jpg?v=1678227245",
				productId: 22,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/phantom-short-front-in-focus-woodland_720x.jpg?v=1678227245",
				productId: 22,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/phantom-short-back-woodland_720x.jpg?v=1678227245",
				productId: 22,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/files/recon-jogger-front-slate_720x.jpg?v=1686341389",
				productId: 23,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/files/recon-jogger-front-in-focus-slate_720x.jpg?v=1686341389",
				productId: 23,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/recon-jogger-front-woodland_720x.jpg?v=1682107765",
				productId: 23,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/recon-jogger-front-in-focus-woodland_720x.jpg?v=1682107765",
				productId: 23,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-ultralight-drop-tank-front-in-focus-black_720x.jpg?v=1652311613",
				productId: 24,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-ultralight-drop-tank-front-black_720x.jpg?v=1652311613",
				productId: 24,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-ultralight-drop-tank-front-in-focus-ember_720x.jpg?v=1651177968",
				productId: 24,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-ultralight-drop-tank-front-ember_720x.jpg?v=1651177968",
				productId: 24,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-stealth-hoodie-stealth-front-in-focus-charcoal_720x.webp?v=1649958650",
				productId: 25,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-stealth-hoodie-stealth-back-charcoal_720x.webp?v=1649959933",
				productId: 25,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-stealth-hoodie-stealth-front-in-focus-navy_720x.webp?v=1649959933",
				productId: 25,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-stealth-hoodie-stealth-back-navy_720x.webp?v=1649959933",
				productId: 25,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-thrive-training-shirt-front-in-focus-black_720x.jpg?v=1665528650",
				productId: 26,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-thrive-training-shirt-back-black_720x.jpg?v=1665528650",
				productId: 26,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-thrive-training-shirt-front-in-focus-gray_720x.jpg?v=1665528650",
				productId: 26,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-thrive-training-shirt-back-gray_720x.jpg?v=1665528650",
				productId: 26,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/sunrise-runner-short-front-in-focus-meadow_720x.jpg?v=1669245842",
				productId: 27,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/sunrise-runner-short-pocket-detail-meadow_720x.jpg?v=1669245842",
				productId: 27,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/sunrise-runner-short-front-in-focus-iris_720x.jpg?v=1669245844",
				productId: 27,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/sunrise-runner-short-pocket-detail-iris_720x.jpg?v=1669245842",
				productId: 27,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-contour-jogger-front-cadet_720x.webp?v=1650309303",
				productId: 28,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-contour-jogger-front-second-angle-cadet_720x.webp?v=1650309303",
				productId: 28,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-contour-jogger-front-rifle_720x.webp?v=1650309303",
				productId: 28,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-contour-jogger-front-second-angle-rifle_720x.webp?v=1650309303",
				productId: 28,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-calm-pullover-front-in-focus-black_720x.jpg?v=1665698431",
				productId: 29,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-calm-pullover-back-black_720x.jpg?v=1665698431",
				productId: 29,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-calm-pullover-front-in-focus-gray_720x.jpg?v=1665698431",
				productId: 29,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-calm-pullover-back-gray_720x.jpg?v=1665698339",
				productId: 29,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-barbell-leggings-front-static-gray_720x.webp?v=1669239201",
				productId: 30,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-barbell-leggings-front-second-angle-static-gray_720x.webp?v=1669239201",
				productId: 30,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-leggings-front-in-focus-harmony_720x.jpg?v=1669239201",
				productId: 30,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-leggings-front-second-angle-harmony_720x.jpg?v=1669239197",
				productId: 30,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-barbell-crop-tee-front-in-focus-heather_720x.webp?v=1650326000",
				productId: 31,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-barbell-crop-tee-front-heather_720x.webp?v=1650325863",
				productId: 31,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-barbell-crop-tee-front-in-focus-olive_720x.webp?v=1650326000",
				productId: 31,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-barbell-crop-tee-front-second-angle-olive_720x.webp?v=1650326000",
				productId: 31,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-vented-sports-bra-front-maroon_720x.webp?v=1651094776",
				productId: 32,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-vented-sports-bra-back-maroon_720x.webp?v=1651094776",
				productId: 32,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-vented-sports-bra-front-jewel_720x.webp?v=1651094776",
				productId: 32,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0437/8521/products/barbell-vented-sports-bra-back-jewel_720x.webp?v=1651094776",
				productId: 32,
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
