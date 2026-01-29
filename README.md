# Secure TODO Backend

A secure TODO application built using Node.js, Express, Supabase, and JWT-based authorization.

## Tech Stack
- Node.js
- Express.js
- Supabase (PostgreSQL)
- JWT Authentication

## Features
- User Signup & Login
- Password hashing with bcrypt
- JWT Authorization (1 hour expiry)
- Protected TODO CRUD operations
- User-specific data access

## Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Create `.env` file using `.env.example`
4. Run `npm start`

## API Endpoints

### Auth
- POST `/auth/signup`
- POST `/auth/login`

### Todos (Protected)
- POST `/todos`
- GET `/todos`
- PUT `/todos/:id`
- DELETE `/todos/:id`

## Authorization
Send JWT token in header:
