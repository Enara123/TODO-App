# Todo App — Frontend (client)

This is the Frontend of the TODO App, built using React.js and MaterialUI. It communicates with the backend API to manage tasks and persist changes.

## Features

- View TODOs
- Add new TODOs
- Update exisitng TODOs (title and description)
- Mark TODOs as done and undone
- Delete TODOs

## Tech stack

- React.js
- Material UI
- Axios for API requests

## App Set Up Instrcutions

1. Clone the repository:
   ```
   git clone https://github.com/Enara123/TODO-App
   cd client
   ```
2. Install dependencies:

   ```
   npm install

   ```

3. Run the frontend:
   ```
   npm start
   ```

## Assumptions and Limitations

- The frontend expects a working backend API at the specified BASE_URL.
- No authentication is implemented.
- Form validation is minimal (title field is required).
