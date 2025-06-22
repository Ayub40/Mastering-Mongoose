# Library Management System API

A RESTful API for managing books and borrowing operations, ensuring robust validations and dynamic inventory control.

---

## Overview

This Library Management API provides CRUD operations for managing books and borrow records, ensuring proper business logic and seamless functionality for library operations.

---

## Features

- **Books Management**: Add, update, delete, and retrieve book records with filtering and sorting options.
- **Borrow Functionality**: Borrow books with stock management and dynamic availability updates.
- **Summary Reports**: View borrowed books summary with total quantities.
- **Error Handling**: Robust validation for all inputs and consistent error responses.

---

## Tech Stack

- Backend: Node.js with Express.js
- Language: TypeScript
- Database: MongoDB with Mongoose
- Tools: Postman (for API testing)

---

## API Endpoints

### Books API

| Method | Endpoint         | Description                |
|--------|-------------------|----------------------------|
| POST   | `/api/books`     | Add a new book             |
| GET    | `/api/books`     | Retrieve books (filterable)|
| GET    | `/api/books/:id` | Get book details by ID     |
| PUT    | `/api/books/:id` | Update book information    |
| DELETE | `/api/books/:id` | Delete a book              |

### Borrow API

| Method | Endpoint      | Description                               |
|--------|---------------|-------------------------------------------|
| POST   | `/api/borrow` | Borrow books with quantity validation     |
| GET    | `/api/borrow` | View borrowed books summary               |

---

## Setup Instructions

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/library-management-api
   cd library-management-api

