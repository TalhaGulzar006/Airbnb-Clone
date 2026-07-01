# 🏡 Wanderlust - Airbnb Clone

Wanderlust is a full-stack Airbnb-inspired web application that allows users to browse, create, update, and manage property listings. The project is built using the MERN backend technologies with server-side rendering using EJS and follows RESTful architecture.

---

## 🚀 Features

### Property Listings
- View all property listings
- View complete details of a listing
- Create new property listings
- Edit existing listings
- Delete listings
- Default image support when no image URL is provided

### Reviews
- Add reviews for listings
- Rate properties (1–5 stars)
- Delete reviews
- One-to-Many relationship between Listings and Reviews

### Validation & Error Handling
- Server-side validation using Joi
- Custom Express error handling
- Reusable async error wrapper
- Proper HTTP status codes
- Custom 404 page

### Backend Functionality
- RESTful routing
- Express Router for modular routing
- MongoDB database using Mongoose
- Method Override for PUT & DELETE requests
- Database population using Mongoose Populate
- Cascade deletion of reviews when a listing is deleted

### UI
- Responsive interface using Bootstrap 5
- Reusable layouts with ejs-mate
- Dynamic EJS templates
- Clean navigation and forms

---

# 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)
- EJS
- ejs-mate

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Validation & Utilities
- Joi
- Method Override
- ExpressError (Custom Error Class)
- Async Wrapper Utility

---

# 📂 Project Structure

```
Airbnb Clone
│
├── init/
│   ├── data.js
│   └── index.js
│
├── models/
│   ├── listing.js
│   └── review.js
│
├── public/
│   ├── css/
│   └── js/
│
├── routes/
│   └── listing.js
│
├── utils/
│   ├── ExpressError.js
│   └── WrapAsync.js
│
├── views/
│   ├── includes/
│   ├── layouts/
│   ├── listings/
│   └── error.ejs
│
├── app.js
├── schema.js
├── package.json
└── README.md
```

---

# 📌 REST API Routes

| Method | Route | Description |
|---------|-------|-------------|
| GET | /listings | Show all listings |
| GET | /listings/new | New listing form |
| POST | /listings | Create listing |
| GET | /listings/:id | Show listing |
| GET | /listings/:id/edit | Edit listing form |
| PUT | /listings/:id | Update listing |
| DELETE | /listings/:id | Delete listing |
| POST | /listings/:id/reviews | Add review |
| DELETE | /listings/:id/reviews/:reviewId | Delete review |

---

# ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Wanderlust.git
```

### Go to Project Folder

```bash
cd Wanderlust
```

### Install Dependencies

```bash
npm install
```

### Start MongoDB

Make sure MongoDB is running locally.

### Seed the Database (Optional)

```bash
node init/index.js
```

### Run the Application

```bash
node app.js
```

or

```bash
nodemon app.js
```

Open your browser:

```
http://localhost:8080/listings
```

---

# 📸 Screenshots

Add screenshots here.

Example:

```
screenshots/
│── home.png
│── listing-details.png
│── create-listing.png
│── reviews.png
```

---

# 📖 What I Learned

During the development of this project, I gained hands-on experience with:

- Building RESTful web applications
- Express.js routing and middleware
- MongoDB data modeling with Mongoose
- One-to-Many database relationships
- Server-side validation using Joi
- Error handling in Express
- CRUD operations
- EJS templating
- MVC project organization
- Git and GitHub workflow

---

# 🚀 Future Improvements

- User Authentication & Authorization
- Login & Signup
- Cloudinary Image Uploads
- Interactive Maps using Mapbox
- Search & Filtering
- Wishlist Feature
- Booking System
- User Profiles
- Image Gallery
- Pagination

---

# 👨‍💻 Author

**Muhammad Talha Gulzar**



