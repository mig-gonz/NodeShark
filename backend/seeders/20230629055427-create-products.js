'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const products = [
      {
        name: 'Arival Woven Joggers',
        description:
          'Arrival is your chance to realise everything you’re capable of. Created to encourage you to aspire more, perform more and achieve more, this collection features sweat-wicking tech, lightweight material, and plenty of styles and sizes to match your conditioning goals and needs.',
        price: 39.99,
        sku: 'A001',
        brandId: 1,
        styleId: 4 /* Slim Fit */,
        imageId: 1,
      },
      {
        name: 'Power Washed Stringer',
        description:
          'The Power collection is made to fail with you, time and time again.',
        price: 25.99,
        sku: 'A002',
        brandId: 1,
        styleId: 2 /* Oversized */,
        imageId: 2,
      },
      {
        name: 'Legacy 1/4 Zip Sweatshirt',
        description:
          'Discover Legacy’s classic cuts, fresh fabrics and a graphic that takes it back to our lifting roots. It’s what our legacy was built on. Now it’s time to build yours.',
        price: 57.99,
        sku: 'A003',
        brandId: 1,
        styleId: 2 /* Oversized */,
        imageId: 3,
      },
      {
        name: 'Adapt Animal Seamless Sports Bra',
        description:
          'With sweat-wicking fabric, seamless stretch and zero-distraction, lift and unleash your wild side in Adapt Animal.',
        price: 45.99,
        sku: 'A004',
        brandId: 1,
        styleId: 9 /* Medium Support */,
        imageId: 4,
      },
      {
        name: 'Convoy Cargo',
        description:
          'The first in the YoungLA cargo lineup is the convoy cargo pants. Features 2 side patch pockets, 2 welt back pockets, front zip and button closure, and YoungLA woven patch on the flap.',
        price: 51.99,
        sku: 'A005',
        brandId: 2,
        styleId: 1 /* Relaxed */,
        imageId: 5,
      },
      {
        name: 'The Immortal Joggers',
        description:
          'Rock the baggy looks at the gym or outside. The Young Ambitious Club print on the left leg represents the mentality of our core audience. The hunger of the hunting eagle and the blossom of the roses all show the immortality of our dream. The dream to succeed.',
        price: 56.99,
        sku: 'A006',
        brandId: 2,
        styleId: 1 /* Relaxed */,
        imageId: 6,
      },
      {
        name: 'Phantom Oversized Tees',
        description:
          'The phantom oversized tee has a unique rustic design on the front. These shirts have an oversized fit that stretch and feel amazing! Perfect pump cover to add some style to your everyday gym outfits.',
        price: 45.99,
        sku: 'A007',
        brandId: 2,
        styleId: 2 /* Oversized */,
        imageId: 7,
      },
      {
        name: 'Modern Polo',
        description:
          'Introducing the modern polo. Made with relaxed fitting and all cotton material, these polos are super sleek. The fitting is adjusted for a modern style and not your typical tight polo.',
        price: 15.99,
        sku: 'A008',
        brandId: 2,
        styleId: 1 /* Relaxed */,
        imageId: 8,
      },
      {
        name: 'Brushed Core Mock Neck',
        description:
          'This spring we introduce you to our new lightweight, ultra stretchy, all-purpose fabric. Each brushed piece undergoes a gentle surface treatment that results in giving the user a new favorite go to top.',
        price: 45.99,
        sku: 'A009',
        brandId: 3,
        styleId: 1 /* Relaxed */,
        imageId: 9,
      },
      {
        name: 'Identity Pro Hoodie',
        description:
          'This collection packs physique enhancing, confidence inducing seam work that is able to withstand intense activity through structurally supportive darts and panels. The Identity collection uses only the highest quality of infused, silicone branding that delivers state-of-art, water resistant technology and is incredibly durable.',
        price: 34.99,
        sku: 'A010',
        brandId: 3,
        styleId: 4 /* Slim Fit */,
        imageId: 10,
      },
    ];

    const insertedProducts = await queryInterface.bulkInsert(
      'products',
      products,
      { returning: true }
    );

    const images = [
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimWovenPantNavy.A2A1N-UBCY.B_ZH_ZH.jpg?v=1647041889',
        productId: insertedProducts[0].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalSlimWovenPantNavy.A2A1N-UBCY.C_ZH_ZH.jpg?v=1647041889',
        productId: insertedProducts[0].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ARRIVALSLIMWOVENPANT-A1A1X-BBBB-M-AJ3-BLACK.B-Edit_AS_ede510ab-aee4-486b-8b33-7a8d9eb9fd31.jpg?v=1644430208',
        productId: insertedProducts[0].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/ARRIVALSLIMWOVENPANT-A1A1X-BBBB-M-AJ3-BLACK.C-Edit_AS_7573004f-df54-44ff-a21e-738893883b91.jpg?v=1644430209',
        productId:
          insertedProducts[0]
            .id /* productId should be 1 until here.. I added 2 photos per color style */,
      },
      // start of productId 2
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAopStringerEcruBrownA2A8Z-NBRP-0661.41.jpg?v=1678719742',
        productId: insertedProducts[1].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/PowerAopStringerEcruBrown-A2A8Z-NBRP26_78102a97-47e0-4ab5-b8a4-d9d889971d09.jpg?v=1678719742',
        productId: insertedProducts[1].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/PowerWashedStringerOzoneBlueA2A8Z-UBZ10176_bcc6e435-61e0-48d4-ad7b-232f235e5bdb.jpg?v=1685039520',
        productId: insertedProducts[1].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/PowerAopStringerOzoneBlueA2A8Z-UBZ1.12.jpg?v=1685039520',
        productId: insertedProducts[1].id,
      },
      // start of productId 3
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/LegacySweatshirtBlackB4A7M-BBBB-1556.502.jpg?v=1685026603',
        productId: insertedProducts[2].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/LegacySweatshirtBlackB4A7M-BBBB-1590.503.jpg?v=1685026603',
        productId: insertedProducts[2].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/LegacySweatshirtMistGreenB4A7M-EB1S-0464.509.jpg?v=1685026599',
        productId: insertedProducts[2].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/LegacySweatshirtMistGreenB4A7M-EB1S-0477.510.jpg?v=1685026599',
        productId: insertedProducts[2].id,
      },
      // start of productId 4
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/AdaptAnimalSeamlessSportsBraENG-L-A0115UrbanGrey-BlackB6A4Q-GBY4199_2e80f070-609a-4dc9-a9b2-eb5df6abc8c0.jpg?v=1679945719',
        productId: insertedProducts[3].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/products/AdaptAnimalSeamlessSportsBraENG-L-A0115UrbanGrey-BlackB6A4Q-GBY4202_54fe3ebf-f0a7-480f-9a57-bd5aff429982.jpg?v=1679945719',
        productId: insertedProducts[3].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/AdaptAnimalSeamlessSportsBraENG-L-A0115IcebergBlue-ThunderBlueB6A4Q-UB0Y1116.jpg?v=1685106767',
        productId: insertedProducts[3].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0156/6146/files/AdaptAnimalSeamlessSportsBraENG-L-A0115IcebergBlue-ThunderBlueB6A4Q-UB0Y1113.jpg?v=1685106767',
        productId: insertedProducts[3].id,
      },
      // start of productId 5
      {
        url: 'https://www.youngla.com/cdn/shop/files/YLA_Johnny___Rudy_June_27_2023_Launch18943_800x.jpg?v=1687888860',
        productId: insertedProducts[4].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/files/YLA_Johnny___Rudy_June_27_2023_Launch18951_800x.jpg?v=1687887623',
        productId: insertedProducts[4].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/files/YLA_Johnny___Rudy_June_27_2023_Launch18933_800x.jpg?v=1687888860',
        productId: insertedProducts[4].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/files/YLA_Johnny___Rudy_June_27_2023_Launch18969_800x.jpg?v=1687887623',
        productId: insertedProducts[4].id,
      },
      // start of productId 6
      {
        url: 'https://www.youngla.com/cdn/shop/products/Feb_Rudy-159_800x.jpg?v=1653078351',
        productId: insertedProducts[5].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/products/Feb_Rudy-145_800x.jpg?v=1653078356',
        productId: insertedProducts[5].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/products/Feb_Rudy-170_800x.jpg?v=1653078344',
        productId: insertedProducts[5].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/products/Feb_Rudy-197_800x.jpg?v=1653078365',
        productId: insertedProducts[5].id,
      },
      // start of productId 7
      {
        url: 'https://www.youngla.com/cdn/shop/files/YLA_Her_Deidra_June_14_202316746_32ce05f9-7b7b-4ab4-b7bf-0a002f2df4ce_800x.jpg?v=1686855342',
        productId: insertedProducts[6].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/files/YLA_Her_June_28_2023_Re-Stock17317a_800x.jpg?v=1686855342 ',
        productId: insertedProducts[6].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/files/YLA_Her_June_28_2023_Re-Stock17393_800x.jpg?v=1686855342',
        productId: insertedProducts[6].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/files/YLA_Her_June_28_2023_Re-Stock17431_800x.jpg?v=1686855342 ',
        productId: insertedProducts[6].id,
      },
      // start of productId 8
      {
        url: 'https://www.youngla.com/cdn/shop/products/DSC6070_800x.jpg?v=1674691593',
        productId: insertedProducts[7].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/products/DSC6068_800x.jpg?v=1674691593',
        productId: insertedProducts[7].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/products/DSC6069_800x.jpg?v=1674691593',
        productId: insertedProducts[7].id,
      },
      {
        url: 'https://www.youngla.com/cdn/shop/products/DSC6071_800x.jpg?v=1674691593',
        productId: insertedProducts[7].id,
      },
      // start of productId 9
      {
        url: 'https://cdn.shopify.com/s/files/1/0667/0133/products/CoreMockNeckLSBlack1_2000x.jpg?v=1684598036',
        productId: insertedProducts[8].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0667/0133/products/CoreMockNeckLSSangria1_2000x.jpg?v=1682357709',
        productId: insertedProducts[8].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0667/0133/products/CoreMockNeckLSWhite1_2000x.jpg?v=1684598081',
        productId: insertedProducts[8].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0667/0133/products/CoreMockNeckLSSeaShell1_2000x.jpg?v=1682357731',
        productId: insertedProducts[8].id,
      },
      // start of productId 10
      {
        url: 'https://cdn.shopify.com/s/files/1/0667/0133/products/IdentityProHoodieSangria1_2000x.jpg?v=1678403626',
        productId: insertedProducts[9].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0667/0133/products/IdentityProHoodieEvergreen1_2000x.jpg?v=1678403576',
        productId: insertedProducts[9].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0667/0133/products/IdentityProHoodieSage1_2000x.jpg?v=1678403600',
        productId: insertedProducts[9].id,
      },
      {
        url: 'https://cdn.shopify.com/s/files/1/0667/0133/products/IdentityProHoodieBlack1_2000x.jpg?v=1678403540',
        productId: insertedProducts[9].id,
      },
    ];

    await queryInterface.bulkInsert('images', images);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('images', null, {});
    await queryInterface.bulkDelete('products', null, {});
  },
};
