# NodeShark

NodeShark is a web application created to serve as an online destination for gym apparel. Explore an array of exciting features, including hot new deals, our latest addition to our collection, the ability to curate a personalized wishlist, and much more.

# Team

- Miguel Gonzalez - components, Gallery.jsx, AllProducts.jsx, Womens/mens.jsx, co-op Navbar...
- Fernando Estrada - backend, Footer.jsx and corresponding pages....
- Roman Marchen - tailwindcss styling Home.jsx, Hero.jsx/BotHero.jsx, co-op Navbar....
- Hunter Rawal - SignUp.jsx/Register.jsx, backend User Authentication....
- Christian Limtiaco - AdBanner.jsx, assets/images for banners....

# Tech stack, PERN stack

- PostreSQL
- Express
- React.js
- Node.js
- Sequelize as our ORM

Throughout our application, we used [tailwindcss] (https://tailwindcss.com/) to maintain application style consistency.
We also use DaisyUi, a CSS library extension of Tailwind.

## Components

- Navbar
- Footer
- Hero
- Login
- Register
- BotHero
- AdBanner
- Womens
- Mens
- Gallery

# Pages

- AboutUs
- AllProducts
- CategoryPages
- ContactUs
- Details
- Home
- User

# features

- filter products via gender
- user registry
- user login
- product details

Our app features allow users to view products, the ability to filter products by male or female, user registry, and user login.

# Stretch goals

## Apart from the existing features, our stretch goal features are as follow:

- Implement the ability for the user to add products to their personal wishlist
- Adding a shopping cart
- Implementing payment methods

## API Documentation

The following API endpoints are available for interacting with the application:

| Table Name       | Columns                                                                                                                | Description                                                                                                            |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Styles           | ID (Integer), Name (String), Gender (String)                                                                           | Stores different styles with their unique IDs, names, and genders.                                                     |
| Users            | ID (Integer), Type                                                                                                     | Stores user information with their unique IDs and types.                                                               |
| Wishlisted_items | ID (Integer), Sku_ID (Integer), User_ID (Integer)                                                                      | Tracks wishlisted items with their unique IDs, SKU IDs, and user IDs.                                                  |
| Brands           | ID (Integer), Name (String)                                                                                            | Contains brand details with unique IDs and names.                                                                      |
| Products         | ID (Integer), Name (String), Description (String), Style_ID (Integer), Price (Integer), Brand (String), Image (String) | Stores product information with unique IDs, names, descriptions, associated style ID, price, brand, and image details. |
| Skus             | ID (Integer), Product_ID (Integer), Color (String), Size (String)                                                      | Tracks SKU information with unique IDs, associated product IDs, color, and size.                                       |
| Images           | ID (Integer), Product_ID (Integer), Url (String)                                                                       | Stores image details with their unique IDs, associated product IDs, and URLs.                                          |

### Dependencies

- "react": "^18.2.0"
- "cors": "^2.8.5"
- "react-dom": "^18.2.0"
- "react-router-dom": "^6.10.0"
- "react-scripts": "5.0.1"
- "web-vitals": "^2.1.4"
- "sequelize": "^6.31.0"
- "express": "^4.18.2"
- "pg": "^8.10.0"
- "pg-hstore": "^2.3.4"
- "dotenv": "^16.3.1"
- "react-responsive-carousel": "^3.2.23"
- "react-scripts": "^5.0.1"
- "react-slick": "^0.29.0"
- "slick-carousel": "^1.8.1"
