# Library Management System API

A RESTful API for managing a library system, built using **Express.js**, **TypeScript**, **Mongoose**, and **MongoDB**.

---

## Features

- **Books Management**:
  - CRUD operations for books.
  - Automatic stock and availability updates.
  - Validation for genres, ISBN uniqueness, and stock levels.

- **Borrowing Management**:
  - Borrow books with dynamic stock deduction.
  - Availability status auto-updates based on stock.

- **Summary Reports**:
  - View borrowed books with total quantities using aggregation pipelines.

- **Error Handling**:
  - Comprehensive error responses for validation and system errors.

---

## Tech Stack

- **Backend**: Node.js with Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **API Testing**: Postman

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/library-management-api
cd library-management-api
```

 ### 2. Install Dependencies

```bash
npm install
```
