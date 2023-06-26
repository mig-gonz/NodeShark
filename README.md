# NodeShark

NodeShark is a web application created to serve as an online destination for gym apparel. Explore an array of exciting features, including hot new deals, our latest addition to our collection, the ability to curate a personalized wishlist, and much more.

## components

- Home
- navbar
- ProductShowCase
- Footer
- Hero/banner
- ?Search
- Products
- ProductViewPage
- ProductDetails
- Login/Signup
- WishList

#

## API Documentation

The following API endpoints are available for interacting with the application:

| Table Name       | Columns                                                                                                              | Description                                                                                                            |
| ---------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Styles           | ID (Integer), Name (String), Gender (String)                                                                         | Stores different styles with their unique IDs, names, and genders.                                                     |
| Users            | ID (Integer), Type                                                                                                   | Stores user information with their unique IDs and types.                                                               |
| Wishlisted_items | ID (Integer), Sku_ID (Type), User_ID (Type)                                                                          | Tracks wishlisted items with their unique IDs, SKU IDs, and user IDs.                                                  |
| Brands           | ID (Integer), Name (Type)                                                                                            | Contains brand details with unique IDs and names.                                                                      |
| Products         | ID (Integer), Name (String), Description (String), Style_ID (Integer), Price (Integer), Brand (String), Image (Type) | Stores product information with unique IDs, names, descriptions, associated style ID, price, brand, and image details. |
| Skus             | ID (Integer), Product_ID (Type), Color (Type), Size (Type)                                                           | Tracks SKU information with unique IDs, associated product IDs, color, and size.                                       |
| Images           | ID (Type), Product_ID (Type), Url (String)                                                                           | Stores image details with their unique IDs, associated product IDs, and URLs.                                          |

## Setup

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
- "axios": "^1.3.5"

After forking and cloning this repo, please ensure that you have installed all the dependencies. Navigate into the backend directory and run npm i. Repeat the process for the frontend.

```
npm i
```

and finally:

```
npm start
```
