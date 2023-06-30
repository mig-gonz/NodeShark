'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        name: 'Arival Woven Joggers',
        description:
          "Arrival is your chance to realise everything you're capable of. Created to encourage you to aspire more, perform more and achieve more, this collection features sweat-wicking tech, lightweight material, and plenty of styles and sizes to match your conditioning goals and needs.",
        price: 39.99,
        brandId: 1, // 1 is Gymshark
      },
      {
        name: 'Power Washed Stringer',
        description:
          'The Power collection is made to fail with you, time and time again.',
        price: 25.99,
        brandId: 1,
      },
      {
        name: 'Legacy 1/4 Zip Sweatshirt',
        description:
          "Discover Legacy's classic cuts, fresh fabrics and a graphic that takes it back to our lifting roots. It's what our legacy was built on. Now it's time to build yours.",
        price: 57.99,
        brandId: 1,
      },
      {
        name: 'Adapt Animal Seamless Sports Bra',
        description:
          'With sweat-wicking fabric, seamless stretch and zero-distraction, lift and unleash your wild side in Adapt Animal.',
        price: 45.99,
        brandId: 1,
      },
      {
        name: 'Convoy Cargo',
        description:
          'The first in the YoungLA cargo lineup is the convoy cargo pants. Features 2 side patch pockets, 2 welt back pockets, front zip and button closure, and YoungLA woven patch on the flap.',
        price: 51.99,
        brandId: 2, // 2 is YoungLA
      },
      {
        name: 'The Immortal Joggers',
        description:
          'Rock the baggy looks at the gym or outside. The Young Ambitious Club print on the left leg represents the mentality of our core audience. The hunger of the hunting eagle and the blossom of the roses all show the immortality of our dream. The dream to succeed.',
        price: 56.99,
        brandId: 2,
      },
      {
        name: 'Phantom Oversized Tees',
        description:
          'The phantom oversized tee has a unique rustic design on the front. These shirts have an oversized fit that stretch and feel amazing! Perfect pump cover to add some style to your everyday gym outfits.',
        price: 45.99,
        brandId: 2,
      },
      {
        name: 'Modern Polo',
        description:
          'Introducing the modern polo. Made with relaxed fitting and all cotton material, these polos are super sleek. The fitting is adjusted for a modern style and not your typical tight polo.',
        price: 15.99,
        brandId: 2,
      },
      {
        name: 'Brushed Core Mock Neck',
        description:
          'This spring we introduce you to our new lightweight, ultra stretchy, all-purpose fabric. Each brushed piece undergoes a gentle surface treatment that results in giving the user a new favorite go to top.',
        price: 45.99,
        brandId: 3, // 3 is Alphalete
      },
      {
        name: 'Identity Pro Hoodie',
        description:
          'This collection packs physique enhancing, confidence inducing seam work that is able to withstand intense activity through structurally supportive darts and panels. The Identity collection uses only the highest quality of infused, silicone branding that delivers state-of-art, water resistant technology and is incredibly durable.',
        price: 34.99,
        brandId: 3,
      },
      {
        name: 'Dimensional Tee',
        description:
          "The perfect fusion of style and performance. Made with high-quality, moisture-wicking fabrics, our covers keep you cool and dry during intense workouts. With a variety of bold designs, you'll look and feel confident during any activity. Our covers offer a comfortable, no-slip fit that stays in place. Mix and match with our collection for the perfect workout outfit.",
        price: 49.99,
        brandId: 3,
      },
      {
        name: 'Giant Wolf Head Tee',
        description:
          "The perfect fusion of style and performance. Made with high-quality, moisture-wicking fabrics, our covers keep you cool and dry during intense workouts. With a variety of bold designs, you'll look and feel confident during any activity. Our covers offer a comfortable, no-slip fit that stays in place. Mix and match with our collection for the perfect workout outfit.",
        price: 38.99,
        brandId: 3,
      },
      {
        name: 'Slim Athletic Fit Jeans',
        description:
          'Whether you need to move, relax, or just look good, Barbell Apparel jeans are made to perform in perfect sync with your body.',
        price: 22.99,
        brandId: 4, // 4 is Barbell Apparel
      },
      {
        name: 'Ultralight Drop Tank',
        description:
          "Insanely light, unbelievably breathable, and incredibly comfortable, the Ultralight Drop Tank is built to support your toughest workouts, and engineered to fit perfectly. With our all new Flexmesh ™ fabric, you might just forget you're wearing anything at all.",
        price: 23.99,
        brandId: 4,
      },
      {
        name: 'Ultralight Jogger',
        description:
          "Stay light with our all new Ultralight Joggers. Engineered from our state of the art Flexlite fabric, they're designed to take you from your morning warmup through your toughest workouts without missing a beat. Abrasion resistant, moisture wicking, and insanely comfortable these joggers are stylish enough to wear all day.",
        price: 17.99,
        brandId: 4,
      },
      {
        name: 'Sunrise Runner Short',
        description:
          "The Sunrise Runners are a lightweight, flatter short designed for running. Crafted with our silky smooth Flexlite fabric and linerless, you'll feel just as comfortable lounging around as hitting the trails.",
        price: 15.99,
        brandId: 4,
      },
      {
        name: 'Script T-Shirt',
        description:
          'The Script Sport T-Shirt is constructed with a quick dry, lightweight fabrication that is oversized and with a 4-way stretch. ',
        price: 38.0,
        brandId: 5, // 5 is Echt
      },
      {
        name: 'Spear Shorts',
        description:
          'Designed for all-day wear, the Spear Shorts offer the functionality of a workout short, with the style for all season wear.',
        price: 53.0,
        brandId: 5,
      },
      {
        name: 'Classic Oversize Tee',
        description:
          'Oversized goodness is here. The Classic Tee is made with a super soft, breathable cotton fabric to complete the outfit this season.',
        price: 35.0,
        brandId: 5,
      },
      {
        name: 'Zero Leggings',
        description:
          'eep your closet at the pinnacle of performance and style. The Zero Leggings bring an all new style with the performance you love from Echt leggings.',
        price: 27.0,
        brandId: 5,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
