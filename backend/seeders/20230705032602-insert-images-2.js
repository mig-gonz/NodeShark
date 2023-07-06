"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("images", [
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/OversizedT-ShirtWhiteA1A3E.A-Edit_BK_e0bd1dc3-17c1-4301-a69f-278b601b6841_1920x.jpg?v=1647041693",
				productId: 9,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/OversizedT-ShirtWhiteA1A3E.B-Edit_BK_d111aace-cf58-42da-b17c-f61ee86f9f42.jpg?v=1647041693",
				productId: 9,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/OversizedT-ShirtNavyA1A3E.A-Edit_BK_2d3a8f43-330a-4608-9bab-9fbc3da7f5ba_750x.jpg?v=1647041693",
				productId: 9,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/OversizedT-ShirtNavyA1A3E.B-Edit_BK_77061c37-ee42-429a-8e88-b95f4e3b5e94.jpg?v=1647041693",
				productId: 9,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/SportShortREP-M-A0030OnyxGrey-A3A1Q-GBYW.2-Edit_AS_750x.jpg?v=1687311980",
				productId: 10,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/SportShortREP-M-A0030OnyxGrey-A3A1Q-GBYW.4-Edit_AS.jpg?v=1687311980",
				productId: 10,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/SportShortREP-M-A0022FluoLime_A3A1Q-EBSS-0074.8_750x.jpg?v=1668618772",
				productId: 10,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/SportShortREP-M-A0022FluoLime_A3A1Q-EBSS-0083.10.jpg?v=1668618772",
				productId: 10,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/RestDaySweatsPantDustyTaupe-A3A4A-NBHQ-1052.147-Edit_CM_09984503-fc3b-4d62-b5ed-867b97c3f735_1920x.jpg?v=1670268978",
				productId: 11,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/RestDaySweatsPantDustyTaupe-A3A4A-NBHQ-1081.151-Edit_CM_a4794f92-611c-455a-ab02-29a33a3a956e_1920x.jpg?v=1670435382",
				productId: 11,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/RestDaySweatsPantSageGreenA3A4A-EBHJ-0179.26_eec142f0-2c68-49e3-a61b-90635f32c65c_1920x.jpg?v=1670268977",
				productId: 11,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/RestDaySweatsPantSageGreenA3A4A-EBHJ-0185.27_e98535f1-3495-48d3-b72d-8309a71fb127.jpg?v=1670435594",
				productId: 11,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/BoldDropArmTankBlackA1A5Y.A-Edit_GB_BK_750x.jpg?v=1647041459",
				productId: 12,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/BoldDropArmTankBlackA1A5Y.B-Edit_GB_BK.jpg?v=1647041459",
				productId: 12,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/BoldDropArmTankSilhouetteGreyA1A5Y-GBP4-2635.219_540486ad-b49d-4f87-92b5-45022a5210af_750x.jpg?v=1679945750",
				productId: 12,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/BoldDropArmTankSilhouetteGreyA1A5Y-GBP4-2629.460_d1eaad54-8d0c-4db8-a4ce-3aa1b38a5d18_1920x.jpg?v=1679945750",
				productId: 12,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAopHoodieRoseBrownA3A5J-NBH1906_3581f2f8-2ca2-4017-b6a8-4ee8b94c3e8a_750x.jpg?v=1665600791",
				productId: 13,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAopHoodieRoseBrownA3A5J-NBH1905_2c483be4-3e68-472e-a5e4-c3971caee8c0.jpg?v=1665600791",
				productId: 13,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAopHoodieBlackA3A5J-BBBB864_ccdfdd04-1ea0-4439-9224-94abf6ce3ed0_1920x.jpg?v=1665600791",
				productId: 13,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAopHoodieBlackA3A5J-BBBB863_53402b09-4886-4676-b866-c6a537e96432_1920x.jpg?v=1665600791",
				productId: 13,
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
