"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("images", [
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/GfxDeadLiftMidiTeeBlackB5A3W-BBBB-1291.jpg?v=1688044185",
				productId: 14,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/GfxDeadLiftMidiTeeBlackB5A3W-BBBB-1276.jpg?v=1688044185",
				productId: 14,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/GfxDeadLiftMidiTeeWhiteB5A3W-WBBM-1353.jpg?v=1688044185",
				productId: 14,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/GfxDeadLiftMidiTeeWhiteB5A3W-WBBM-1344.jpg?v=1688044185",
				productId: 14,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerTightShortsDesertSageGreenB4A6U-EB1J.1211.2_cd8678bc-5f17-4d99-94c3-ac275fdc7496.jpg?v=1679945726",
				productId: 15,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerTightShortsDesertSageGreenB4A6U-EB1J.1215.6_2b504165-5261-4816-9544-e9e2f0e7e894.jpg?v=1679945726",
				productId: 15,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerTightShortsIcebergBlueB4A6U-UBZM.1224.15_aa14dcf4-a655-4c25-8d0c-f3c9b83aa3bc.jpg?v=1679945757",
				productId: 15,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/GymsharkPowerTightShortsIcebergBlueB4A6U-UBZM.1228.19_0936f7f1-bd5e-4d2b-b326-0d494bf1edda.jpg?v=1679945757",
				productId: 15,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/RESTDAYSWEATSJOGGER-BROSSteelBlueMarlB2A7Q-UBQG.A.jpg?v=1660161895",
				productId: 16,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/RESTDAYSWEATSJOGGER-BROSSteelBlueMarlB2A7Q-UBQG.B.jpg?v=1660161895",
				productId: 16,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/PremiumSweatsJoggerBlackCoreMarlB2A7Q-BBBC.A_ZH_ZH.jpg?v=1639505397",
				productId: 16,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/PremiumSweatsJoggerBlackCoreMarlB2A7Q-BBBC.B_ZH_ZH.jpg?v=1639505397",
				productId: 16,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/RESTDAYSWEATSHOODIELightGreyCoreMarlB2A7P-GBCN1_cf5400fe-ac01-4b35-be31-db744d8ee1b1.jpg?v=1687269582",
				productId: 17,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/RESTDAYSWEATSHOODIELightGreyCoreMarlB2A7P-GBCN3_df7d9187-a818-48f6-bf90-dfa2fb72367a.jpg?v=1687269582",
				productId: 17,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/RESTDAYSWEATSHOODIE-BROSSteelBlueMarlB2A7P-UBQG.A.jpg?v=1660161896",
				productId: 17,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/RESTDAYSWEATSHOODIE-BROSSteelBlueMarlB2A7P-UBQG.B.jpg?v=1660161896",
				productId: 17,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/SweatSeamlessLeggingsBlack-B6A4T-BBBB-0902.79_c3c2b36c-7916-4e49-85df-f20ad3f34bc8.jpg?v=1687311863",
				productId: 18,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/SweatSeamlessLeggingsBlack-B6A4T-BBBB-0911.80_35edae11-64d9-42d8-af55-91fcfe2c3499.jpg?v=1687311863",
				productId: 18,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/SweatSeamlessLeggings2DustyOlive-B6A4T-EB1M-0016.2_c5af57bb-f7ba-4adc-a14b-0a1e92c089c8.jpg?v=1685388038",
				productId: 18,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/SweatSeamlessLeggings2DustyOlive-B6A4T-EB1M-0025.3_d4a119d9-6c73-4279-8d4b-556b0d2a30f4.jpg?v=1685388038",
				productId: 18,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/RestDayCoreSsBoxyCropTopWhiteB5A1L-WBBM1362_31f2f014-fd4d-40fd-9ef4-901520236602.jpg?v=1686776237",
				productId: 19,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/RestDayCoreSsBoxyCropTopWhiteB5A1L-WBBM1381_90e4690b-c7ed-4918-9127-bb12f8ca4cdc.jpg?v=1686776237",
				productId: 19,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/RestDayCoreSsBoxyCropTopEveningBlueB5A1L-UBZF1295.jpg?v=1685388040",
				productId: 19,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/files/RestDayCoreSsBoxyCropTopEveningBlueB5A1L-UBZF1303.jpg?v=1685388040",
				productId: 19,
			},

			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/SweatSeamlessLonglineBraBlack-B4A5B-BBBB-0552.50_6c6c8c1c-f115-4d6e-8297-1bda00b3d531.jpg?v=1680639125",
				productId: 20,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/SweatSeamlessLonglineBraBlack-B4A5B-BBBB-0564.52_b1672dec-12b9-49bf-b164-dc8a6244ca30.jpg?v=1680639125",
				productId: 20,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/SweatSeamlessLonglineBraDustyOliveB4A5B-EB1M-0075.8_c0a40dff-9837-487c-b17d-e12af39ad7e2.jpg?v=1680639127",
				productId: 20,
			},
			{
				url: "https://cdn.shopify.com/s/files/1/0156/6146/products/SweatSeamlessLonglineBraDustyOliveB4A5B-EB1M-0109.12_8c794813-a358-4e2d-a21b-f21a3699cfe6.jpg?v=1680639127",
				productId: 20,
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
