# Marketplace App

An online marketplace application that facilitates seamless interactions between sellers and buyers. This full-stack web application is developed using React, Node.js, Express, MongoDB, TailwindCSS, and GraphQL. It incorporates a range of features to provide a comprehensive online shopping experience, including user accounts, shop and product management, as well as advanced product search capabilities.

## Features

- **User Accounts with Seller Access**
    - Users can register for accounts, and authentication is handled securely.
    - Users can upgrade their accounts to seller status, enabling them to list and manage products.
- **Shop Management**
    - Sellers can create their own online shops, customizing them with relevant information and branding.
    - Sellers have access to a dashboard where they can monitor and manage their shop activities.
- **Product Management**
    - Sellers can add, edit, and delete product listings.
    - Each product can have detailed information, including images, descriptions, and pricing.
- **Product Search**
    - Users can search for products based on their names and categories.
    - The application provides intelligent suggestions based on user input to enhance the search experience.
- **Shopping Cart**
    - Buyers can add products to their shopping cart for easy checkout.
    - Users can view and manage the contents of their shopping cart before finalizing their purchase.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Make sure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)
- MongoDB: [Download and Install MongoDB](https://www.mongodb.com/try/download/community)

### Installing

A step by step series of examples that tell you how to get a development env running

1. **Clone the repository:**

```bash
 git clone https://github.com/mohammedhassad/marketplace-app.git
```

2. **Install dependencies:**

```bash
 cd marketplace-app
 npm install

 cd client
 npm install
```

3. **Set up the environment variables:**

Create a `.env` file in the root directory and set the required environment variables. You can use the provided `example.env` as a template.

4. **Run the application:**

```bash
 cd marketplace-app
 npm start  # The application will be accessible at http://localhost:5000

  cd client
  npm start  # The application will be accessible at http://localhost:5173
```

## Tech Stack

- [React](https://react.dev/) - A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework.
- [Node.js](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Express](https://expressjs.com/) - A fast, unopinionated, minimalist web framework for Node.js.
- [GraphQL](https://graphql.org/) - A query language for APIs.
- [MongoDB](https://www.mongodb.com/try/download/community) - A NoSQL database for storing and retrieving data.
- [Mongoose](https://mongoosejs.com/) - Object Data Modelling (ODM) library
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database service
- [JSON Web Token](https://jwt.io/) - Security token
- [Postman](https://www.getpostman.com/) - API testing

## Folder Structure

```
marketplace-app/
|-- client/            # Frontend code (React)
|-- src/               # Backend code (Node.js, Express, GraphQL)
|-- .gitignore         # Git ignore file
|-- .babelrc           # Babel configuration for JavaScript transpilation
|-- .prettierrc        # Prettier configuration for code formatting
|-- index.js           # Project entry point
|-- package.json       # Node.js dependencies and scripts
|-- README.md          # Project documentation
|-- example            # Example environment variable file
```

## Contributing

Pull requests are welcome but please open an issue and discuss what you will do before 😊

## Known Bugs

Feel free to email me at [Email](mailto:mohammed.hassad98@gmail.com) or [Lnkedin](https://linkedin.com/me/mohemedhassad) if you run into any issues or have questions, ideas or concerns. Please enjoy and feel free to share your opinion, constructive criticism, or comments about my work. Thank you! 🙂

## License

This project is licensed under the [MIT License](/LICENSE). Feel free to use, modify, and distribute the code.
