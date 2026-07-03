# mydatabase - Airbnb Clone

A full-stack property listing web application inspired by Airbnb, built using Node.js, Express.js, MongoDB, EJS, and Passport.js. The application allows users to browse listings, create and manage properties, write reviews, and securely authenticate using local authentication.

---

## Features

- User Registration and Login
- Secure Authentication using Passport.js
- Session Management with Express Session
- Protected Routes (Authentication Middleware)
- Property Listing CRUD Operations
- Review System
- Server-side Form Validation using Joi
- Flash Messages for User Feedback
- Custom Error Handling
- Method Override for PUT & DELETE Requests
- Responsive User Interface
- MongoDB Database Integration
- EJS Templating with Layout Support

---

## Tech Stack

### Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS
- EJS-Mate

### Backend

- Node.js
- Express.js

### Database

- MongoDB
- Mongoose

### Authentication

- Passport.js
- Passport Local Strategy
- Passport-Local-Mongoose

### Validation

- Joi

---

# Main Concepts Implemented

This project demonstrates several important backend development concepts including:

- RESTful Routing
- MVC-inspired Project Structure
- Authentication using Passport.js
- User Registration & Login
- Route Protection (Authorization Middleware)
- Session Management
- Express Sessions
- Flash Messages
- Password Hashing (Passport Local Mongoose)
- CRUD Operations
- MongoDB Relationships (Listings & Reviews)
- Mongoose Schema & Models
- Schema Validation using Joi
- Custom Error Handling
- Async Error Wrapper
- Express Middleware
- Method Override
- Dynamic Routing
- Template Rendering with EJS
- Static File Serving
- Form Validation
- HTTP Status Code Handling
- Modular Routing
- Reusable Utility Functions

---

# Project Structure

```
AirBnbProject/
│
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── init/
├── app.js
├── schema.js
├── middleware.js
└── package.json
```

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd AirBnbProject
```

Install dependencies

```bash
npm install
```

Start MongoDB

```bash
mongod
```

Run the application

```bash
node app.js
```

or

```bash
nodemon app.js
```

Visit

```
http://localhost:8080/listings
```

---

# Dependencies

- Express.js
- Mongoose
- Passport.js
- Passport Local
- Passport Local Mongoose
- Express Session
- Connect Flash
- Joi
- Method Override
- Cookie Parser
- EJS
- EJS-Mate

---

# Application Features

### Authentication

- User Signup
- User Login
- User Logout
- Secure Password Hashing
- Persistent Login Sessions

### Listings

- View All Listings
- View Single Listing
- Create New Listing
- Edit Listing
- Delete Listing

### Reviews

- Add Reviews
- Delete Reviews
- Reviews Linked to Listings

### Validation

- Server-side Validation using Joi
- Invalid Requests are Blocked

### User Experience

- Flash Success Messages
- Flash Error Messages
- Friendly Error Pages

---

# Learning Outcomes

This project helped me gain practical experience with:

- Backend development using Node.js and Express.js
- MongoDB database design
- Authentication and session management
- Building RESTful web applications
- Form validation and error handling
- Working with middleware
- Managing user authentication securely
- Building dynamic web pages using EJS
- Organizing large Express applications into multiple modules

---

## Future Improvements

- Image Uploads using Cloudinary
- User Authorization (Only owner can edit/delete listings)
- Search & Filter Listings
- Google Maps Integration
- Favorites/Wishlist
- Booking System
- Profile Management
- Pagination
- Responsive Improvements

---

## Author

**Muhammad Talha Gulzar**

Aspiring MERN Stack Developer passionate about building full-stack web applications and continuously learning modern web technologies.



