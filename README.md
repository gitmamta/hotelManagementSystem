# Hotel Management System

A full-stack Hotel Management System built using Angular 16, Node.js, Express, and MongoDB.  
The application provides secure booking management for hotels, dining areas, and meeting rooms with an admin-controlled workflow.

## Live Demo
- Frontend: https://mamtapalace.netlify.app/
- Backend: https://node-backend-uhgx.onrender.com

## Tech Stack

### Frontend
- Angular 16.2.0
- TypeScript
- Bootstrap
- Angular Animations
- HTTP Interceptor
- Session Storage

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication

## Features

### Authentication & Security
- JWT-based authentication
- Session storage for token management
- Role-based access using Admin Guards
- Protected routes

### Admin Features
- CRUD operations for bookings
- Manage dining and meeting area bookings
- Secure admin-only access

### Booking System
- Hotel room booking
- Dining area booking
- Meeting room booking
- Table booking with messaging functionality

### UI/UX
- Responsive design using Bootstrap
- Smooth UI transitions with Angular Animations
- Modular Angular architecture

## Project Structure

hotel-management-system/
frontend/
backend/
README.md

## Installation

### Clone Repository
https://github.com/gitmamta/hotelManagementSystem.git

### Backend Setup
cd backend  
npm install  
node app.js  

Create a `.env` file:
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
JWT_SECRET=your_jwt_secret  

### Frontend Setup
cd frontend  
npm install  
ng serve  

Open http://localhost:4200

## Environment Configuration

Update API URL in  
frontend/src/environments/environment.ts

export const environment = {
  apiUrl: 'http://localhost:5000/api'
};

## Future Enhancements
- Real-time booking updates
- Payment gateway integration
- Admin dashboard analytics
- Email and SMS notifications
- Unit and integration testing

## License
MIT License

## Author
Developed by Mamta Rana
