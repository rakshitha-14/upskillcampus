# 🛒 Grocery Delivery Application

A full-stack web application that enables users to browse grocery products, add items to their shopping cart, place online orders, and manage deliveries efficiently. The platform provides a seamless shopping experience with secure authentication, responsive design, real-time order management, and an intuitive user interface.

This project demonstrates the implementation of a modern e-commerce platform using frontend and backend technologies, focusing on usability, performance, and scalability.

---

# 📑 Table of Contents

- Project Overview
- Problem Statement
- Objectives
- Features
- Technology Stack
- System Architecture
- Project Workflow
- Installation
- Environment Variables
- Running the Project
- Folder Structure
- Database Schema
- API Endpoints
- Screenshots
- Future Enhancements
- Advantages
- Limitations
- Applications
- Contributing
- License
- Author

---

# 📖 Project Overview

The Grocery Delivery Application is an online shopping platform that allows customers to purchase grocery items from the comfort of their homes. Users can browse products by category, add items to their shopping cart, place orders, and track order status.

The application also includes an admin panel for managing products, categories, inventory, and customer orders. It provides a secure and responsive shopping experience suitable for desktop and mobile devices.

---

# ❗ Problem Statement

Traditional grocery shopping requires customers to physically visit stores, which can be time-consuming and inconvenient. During busy schedules or emergencies, purchasing groceries becomes even more difficult.

This application solves these challenges by providing an online platform where users can:

- Browse groceries anytime
- Place orders online
- Receive home delivery
- Track order status
- Make secure online payments

---

# 🎯 Objectives

- Develop a responsive grocery shopping platform.
- Provide secure user authentication.
- Allow users to browse grocery products.
- Implement shopping cart functionality.
- Enable online order placement.
- Manage inventory efficiently.
- Generate order history.
- Provide admin dashboard for management.

---

# ✨ Features

## 👤 User Authentication

- User Registration
- Secure Login
- Logout
- Password Encryption
- Forgot Password

---

## 🛍 Product Management

- View grocery products
- Product categories
- Product details
- Product images
- Product search
- Product filtering
- Product sorting

---

## 🛒 Shopping Cart

- Add to Cart
- Remove from Cart
- Update Quantity
- Calculate Total Price
- Save Cart Items

---

## ❤️ Wishlist

- Add products to wishlist
- Remove from wishlist
- Move wishlist items to cart

---

## 📦 Order Management

- Place Orders
- View Order History
- Cancel Orders
- Track Order Status
- Download Invoice

---

## 💳 Payment Integration

Supports online payments using:

- Credit Card
- Debit Card
- UPI
- Net Banking
- Cash on Delivery (Optional)

---

## 🚚 Delivery Management

- Delivery Address
- Estimated Delivery Time
- Order Tracking
- Delivery Status Updates

---

## 🔍 Product Search

Search groceries using:

- Product Name
- Category
- Price
- Brand

---

## 📱 Responsive Design

Works seamlessly on:

- Desktop
- Laptop
- Tablet
- Mobile Devices

---

## 🛠 Admin Dashboard

Admin can:

- Add Products
- Update Products
- Delete Products
- Manage Categories
- Manage Inventory
- View Orders
- Manage Users
- Generate Reports

---

# 🏗 System Architecture

```

Customer

│

▼

Frontend (React)

│

▼

REST API

│

▼

Backend (Node.js + Express)

│

▼

MongoDB Database

│

▼

Admin Dashboard

```

---

# ⚙ Technology Stack

## Frontend

- React.js
- HTML5
- CSS3
- JavaScript
- Bootstrap / Tailwind CSS
- Axios

---

## Backend

- Node.js
- Express.js

---

## Database

- MongoDB
- Mongoose

---

## Authentication

- JWT Authentication
- bcrypt Password Hashing

---

## Payment

- Stripe / Razorpay (Optional)

---

## Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman
- npm

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/grocery-delivery-app.git
```

---

## Navigate into Project

```bash
cd grocery-delivery-app
```

---

## Install Frontend Dependencies

```bash
cd client
npm install
```

---

## Install Backend Dependencies

```bash
cd ../server
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the server folder.

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

# ▶ Running the Project

## Start Backend

```bash
cd server

npm start
```

---

## Start Frontend

```bash
cd client

npm start
```

---

Application runs on

```
Frontend:
http://localhost:3000

Backend:
http://localhost:5000
```

---

# 🔄 Application Workflow

```
User Registration

↓

Login

↓

Browse Products

↓

Search / Filter

↓

Add to Cart

↓

Checkout

↓

Payment

↓

Order Confirmation

↓

Delivery Tracking

↓

Order Completed
```

---

# 📂 Project Structure

```
grocery-delivery-app/

│

├── client/

│ ├── public/

│ ├── src/

│ │ ├── components/

│ │ ├── pages/

│ │ ├── context/

│ │ ├── services/

│ │ ├── App.js

│ │ └── index.js

│

├── server/

│ ├── config/

│ ├── controllers/

│ ├── middleware/

│ ├── models/

│ ├── routes/

│ ├── uploads/

│ ├── server.js

│

├── package.json

├── README.md

└── .env

```

---

# 🗄 Database Schema

## User

- Name
- Email
- Password
- Phone Number
- Address

---

## Product

- Product Name
- Category
- Description
- Price
- Quantity
- Product Image

---

## Cart

- User ID
- Product ID
- Quantity

---

## Order

- User ID
- Ordered Products
- Total Amount
- Payment Status
- Delivery Status
- Order Date

---

# 📡 REST API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login
```

---

## Products

```
GET /api/products

GET /api/products/:id

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id
```

---

## Cart

```
GET /api/cart

POST /api/cart

PUT /api/cart/:id

DELETE /api/cart/:id
```

---

## Orders

```
POST /api/orders

GET /api/orders

GET /api/orders/:id

PUT /api/orders/:id
```

---

# 📸 Screenshots

Add screenshots of:

- Home Page
- Login Page
- Product Listing
- Shopping Cart
- Checkout Page
- Order History
- Admin Dashboard

Example

```
screenshots/

home.png

products.png

cart.png

checkout.png

admin.png
```

---

# 🚀 Future Enhancements

- AI Product Recommendations
- Voice Search
- Dark Mode
- Multi-language Support
- Push Notifications
- Live Delivery Tracking
- QR Code Payments
- Coupon System
- Loyalty Rewards
- Subscription Orders
- Inventory Analytics
- Sales Dashboard
- Mobile Application

---

# ✅ Advantages

- Easy grocery shopping
- User-friendly interface
- Secure authentication
- Fast checkout
- Responsive design
- Efficient order management
- Scalable architecture
- Real-time inventory updates

---

# ⚠ Limitations

- Requires internet connection
- Payment gateway configuration needed
- Delivery depends on service availability
- No offline functionality

---

# 🌍 Applications

- Online Grocery Stores
- Supermarkets
- Organic Food Stores
- Retail Businesses
- Hypermarkets
- Local Grocery Shops
- Wholesale Suppliers

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📜 License

This project is licensed under the MIT License.

---
