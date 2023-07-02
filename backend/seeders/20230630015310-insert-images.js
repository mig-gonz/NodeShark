"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert("images", [
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/CrestSSTeeWhite1_2000x.jpg?v=1684597913",
				productId: 1,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/CrestSSTeeWhite5_2000x.jpg?v=1682357650",
				productId: 1,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/CrestSSTeeBlack1_2000x.jpg?v=1684597441",
				productId: 1,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/CrestSSTeeBlack5_2000x.jpg?v=1682357555",
				productId: 1,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/WolfHeadMeshShortSeaShell1_2000x.jpg?v=1682358229",
				productId: 2,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/WolfHeadMeshShortSeaShell6_2000x.jpg?v=1682358230",
				productId: 2,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/WolfHeadMeshShortEvergreen1_2000x.jpg?v=1682358181",
				productId: 2,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/WolfHeadMeshShortEvergreen6_2000x.jpg?v=1682358180",
				productId: 2,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AcademyClubJoggerHeatherGrey2_2000x.jpg?v=1684597521",
				productId: 3,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AcademyClubJoggerHeatherGrey5_2000x.jpg?v=1684597521",
				productId: 3,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AcademyClubJoggerSmoke2_2000x.jpg?v=1684597549",
				productId: 3,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AcademyClubJoggerSmoke5_2000x.jpg?v=1684597549",
				productId: 3,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/WolfHeadMuscleTankWhite1_2000x.jpg?v=1684598423",
				productId: 4,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/WolfHeadMuscleTankWhite5_2000x.jpg?v=1682357867",
				productId: 4,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/WolfHeadMuscleTankSangria1_2000x.jpg?v=1684601419",
				productId: 4,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/WolfHeadMuscleTankSangria5_2000x.jpg?v=1682357814",
				productId: 4,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/KingQuarterZipVanilla5_2000x.jpg?v=1684597233",
				productId: 5,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/KingQuarterZipVanilla1_2000x.jpg?v=1684597233",
				productId: 5,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/KingQuarterZipEvergreen5_2000x.jpg?v=1679351375",
				productId: 5,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/KingQuarterZipEvergreen1_2000x.jpg?v=1679351375",
				productId: 5,
			},

			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AmplifyLeggingCottonCandy5_2000x.jpg?v=1685992101",
				productId: 6,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AmplifyLeggingCottonCandy1_2000x.jpg?v=1685992101",
				productId: 6,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AmplifyLeggingBlack5_d1b1511f-9157-455d-b2aa-e566fbd05683_2000x.jpg?v=1685992314",
				productId: 6,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AmplifyLeggingBlack1_31aad4ea-b474-4c8d-bc4f-5c3081ad08ae_2000x.jpg?v=1685992314",
				productId: 6,
			},

			{
				url: "https://alphaleteathletics.com/cdn/shop/products/RibbedSeamlessBraLinen1_2000x.jpg?v=1674867385",
				productId: 7,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/RibbedSeamlessBraLinen6_2000x.jpg?v=1674867385",
				productId: 7,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/RibbedSeamlessBraMediumGrey1_2000x.jpg?v=1674867414",
				productId: 7,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/products/RibbedSeamlessBraMediumGrey6_2000x.jpg?v=1674867415",
				productId: 7,
			},

			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AmplifySSCropElectricPurple1_2000x.jpg?v=1683238935",
				productId: 8,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AmplifySSCropElectricPurple4_2000x.jpg?v=1683238938",
				productId: 8,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AmplifySSCropEmeraldGreen1_2000x.jpg?v=1683238952",
				productId: 8,
			},
			{
				url: "https://alphaleteathletics.com/cdn/shop/files/AmplifySSCropEmeraldGreen4_2000x.jpg?v=1683239015",
				productId: 8,
			},
		]);
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("images", null, {});
	},
};
