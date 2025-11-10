# Todo App — Backend (server)

This is the Node.js + Express.js backend for the TODO App, providing RESTful APIs to manage tasks.

## Features

- Get all TODOs (`GET /api/todos`)
- Create a TODO (`POST /api/todos`)
- Edit a TODO (`PUT /api/todos/:id`)
- Toggle TODO done status (`PATCH /api/todos/:id/done`)
- Delete a TODO (`DELETE /api/todos/:id`)

## Tech stack

- Node.js
- Express.js
- MongoDB (local setup with MongoDB Compass)
- Mongoose

## App Set Up Instrcutions

1. Clone the repository:
   ```
   git clone <repo-url>
   cd server
   ```
2. Install dependencies:

   ```
   npm install

   ```

3. Set up environment variables:

   ```
   Create a .env file in the root folder:

   Add the following:

    PORT=5000
    MONGODB_URI=<your-mongodb-connection-string>

   ```

4. Run the backend

   ```
   npm start

   ```

## Assumptions and Limitations

- No authentication or user management is implemented.
- MongoDB is running (local) for the API to work.
- Duplicate TODO titles are allowed.
- Basic validation only.
