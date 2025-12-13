# BharatConnect – Swadeshi Transportation & Logistics Platform

A full-stack Swadeshi Transportation & Logistics platform built using MERN stack with AI integration.
BharatConnect connects Shippers and Drivers on a single digital platform to simplify booking, vehicle management, routing, and logistics operations—supporting the vision of Atmanirbhar Bharat.

---

## Table of Contents

- ### About the Project
- ### Features
- ### Tech Stack
- ### Folder Structure
- ### Installation
- ### Environment Variables
- ### Usage
- ### API Endpoints
- ### AI Assistant (SetuAI)
- ### Deployment
- ### Contributing
- ### License
- ### Contact

---
 
## About the Project

BharatConnect is a smart logistics management platform designed for the Indian transportation ecosystem.
It allows Shippers to book transport easily and Drivers to manage vehicles, bookings, and trips efficiently.

The platform also includes an AI assistant SetuAI, which provides issue-focused help related to logistics, bookings, routes, and platform usage.

This project follows a secure, scalable, and role-based architecture with JWT authentication and OTP verification.

---

## Features

🔐 Secure authentication with JWT & OTP

👤 Role-based access (Shipper & Driver)

🚛 Vehicle management (Add, Update, View)

📦 Transport booking & order lifecycle

🗺️ Live route mapping & distance calculation

💰 Dynamic fare calculation

🤖 SetuAI – AI assistant for logistics & support

🔄 Booking status management (Pending, Paid, Accepted, Ongoing, Completed)

🇮🇳  Built for Indian logistics & transport use-cases

---

## Tech Stack
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB (MongoDB Atlas)
- Caching & OTP Storage: Redis
- Authentication: JWT, OTP-based verification
- Media Storage: Cloudinary (vehicle images)
- Maps & Routing: OpenStreetMap, OSRM
- AI Integration: Gemini API (SetuAI Assistant)
- Email Service: Nodemailer (Gmail SMTP)
- Runtime: Node.js
- Package Manager: npm


## Folder Structure
```
/bharatconnect
│── /f
│   ├── /components
│   ├── /pages
│   └── App.jsx
│
│── /b
│   ├── /controllers
│   ├── /routes
│   ├── /models
│   ├── /middlewares
│   ├── /services
│   ├── index.js
│
│── .env
│── package.json
└── README.md
```
---

## Installation

- 1️⃣ Clone the repository
git clone https://github.com/Kush-012/Transportation-and-Logistics

  cd bharatconnect

- 2️⃣ Install dependencies
npm install

- 3️⃣ Setup Environment Variables

Create a .env file in the root directory:
```
# MongoDB
mongodburl="mongodb://localhost:27017/"

#JWT Authentication
JWT_SECRET=
JWT_EXPIRE=8h

# SMTP Configuration
SMTP_USER=
SMTP_PASS=
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587 

# Redis
redis_endpoint=
redis_password=

# Cloudinary
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=-

#Open Source Route
ORS_API=

# Gemini api
GEMINI_API_KEY= 
```


- ▶️ Usage
  
```
Start Backend Server
nodemon index.js
Server runs at: http://localhost:4500

Start Frontend
npm run dev
Frontend runs on http://localhost:5173

```

---

## API Endpoints
```
Authentication

POST /signup – User registration with OTP

POST /login – Login user

POST /resetpassword – Reset password with OTP

Vehicles

POST /addvehicle – Add vehicle (Driver)

GET /viewvehicle – View all vehicles

POST /updatevehicle/:VechicleNo – Update vehicle

DELETE /deletevehicle – Delete vehicle

Booking

POST /createbooking – Create booking

GET /getbooking – Get bookings

POST /updatebooking/:bookingid – Update booking status

AI

POST /api/ai – SetuAI assistant
```

---

## AI Assistant – SetuAI

SetuAI is an AI assistant integrated using Gemini API.

It helps users with:

- Logistics queries

- Booking issues

- Route & vehicle information

- Platform-specific assistance

SetuAI is issue-focused, not generic, and tailored specifically for BharatConnect.

---

## Deployment

You can deploy this project on:

- Render

- Railway

- Vercel (Frontend)

- AWS / DigitalOcean

Make sure to configure:

- Environment variables

- MongoDB connection

- Backend & frontend URLs

---

## Contributing

Contributions are welcome!

Fork the repository

Create a new branch

Commit your changes

Push and open a Pull Request

---

## License

This project is licensed under the MIT License.

---

## Contact

Kush Mehta

GitHub: https://github.com/Kush-012

LinkedIn: https://www.linkedin.com/in/kushm1

Email: kushmehta124@gmail.com
