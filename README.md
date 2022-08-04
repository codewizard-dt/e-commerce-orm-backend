# E-Commerce Backend API
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow)](https://opensource.org/licenses/MIT)

## An e-commerce backend connected to MySQL
Uses Sequelize as an ORM to manage Products, Categories, and Product Tags, using RESTful API routes for CRUD operations.

# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
# Installation
- run `npm i`
- update `.env` with relevant MySQL db info
- run db/schema.sql either in MySQL shell or Workbench
- run seeds with `node seeds/index.js`


# Usage

## Demo
[Walkthrough Video](https://drive.google.com/file/d/1AyjUarVAmr_jwiv7Ttbu0q6_UiHei-2_/view?usp=sharing)
![Walkthrough GIF](./demo/e-commerce-orm-demo.gif)

## Products
GET `/api/products` List of all products

POST `/api/products` Creates new product

GET `/api/products/:id` Gets info of product with given ID

PUT `/api/products/:id` Updates a product with the given ID

DELETE `/api/products/:id` Deletes product with the given ID

## Categories
GET `/api/categories` List of all categories

POST `/api/categories` Creates new category

GET `/api/categories/:id` Gets info of category with given ID

PUT `/api/categories/:id` Updates a category with the given ID

DELETE `/api/categories/:id` Deletes category with the given ID

## Tags
GET `/api/tags` List of all tags

POST `/api/tags` Creates new tag

GET `/api/tags/:id` Gets info of tag with given ID

PUT `/api/tags/:id` Updates a tag with the given ID

DELETE `/api/tags/:id` Deletes tag with the given ID


# License
This project is provisioned under the [MIT License](https://opensource.org/licenses/MIT)

# Contributing
[Repo link](https://github.com/codewizard-dt/e-commerce-orm-backend)

Do you want to help make this project better? Visit the the repo to check out existing issues or create a new branch to start working on a suggested feature

# Questions
If you have any questions, please contact me on [Github](https://github.com/codewizard-dt) or [email](mailto:david@codewizard.app).