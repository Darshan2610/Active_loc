# Project Management Dashboard

## Overview
This is a simple Project Management Dashboard application that allows users to manage projects and vendors. It includes features for adding, editing, deleting, and viewing projects.

## Technologies Used
-  Frontend : React.js with Bootstrap for styling
-  Backend : Express.js
-  Database : MongoDB
-  Authentication : Basic token-based authentication (hardcoded token)

## How to Run the Application Locally

### Prerequisites
- Node.js and npm installed on your machine
- MongoDB installed and running locally or a MongoDB Atlas account

### Backend Setup
1. Navigate to the `backend` directory:
    
   cd ActiveLoc_Assignment/backend
    

2. Install the backend dependencies:
    
   npm install
    

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string:
    plaintext
   MONGO_URI=mongodb://localhost:27017/project_management
    

4. Start the backend server:
    
   node server.js
    

### Frontend Setup
1. Open a new terminal and navigate to the `frontend` directory:
    
   cd ActiveLoc_Assignment/frontend
    

2. Install the frontend dependencies:
    
   npm install
    

3. Start the frontend application:
    
   npm start
    

4. Open your browser and navigate to `http://localhost:3000` to access the Project Management Dashboard.

## Assumptions
- The application uses a hardcoded token for authentication. This is suitable for development but should be replaced with a more secure authentication method in production.
- MongoDB is assumed to be running locally. If using MongoDB Atlas, ensure the connection string in the `.env` file is updated accordingly.
- Basic error handling is implemented, but it can be improved for better user experience.

## Limitations
- The application does not implement user authentication and authorization beyond the hardcoded token.
- There is no validation for the format of the input fields (e.g., ensuring the deadline is a valid date).
- The UI is basic and can be enhanced further with more advanced styling and animations.
- The application does not include unit tests or integration tests.

## Future Improvements
- Implement user authentication with JWT or OAuth.
- Add input validation and error handling for form submissions.
- Enhance the UI with more advanced styling and animations.
- Implement unit tests and integration tests for both frontend and backend.
