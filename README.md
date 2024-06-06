## MVP Web TrackingBoardAlternance: Backend & Frontend Setup Guide

This guide will help you set up and run both the backend and frontend of  MVP web application. The backend is responsible for providing APIs to interact with the application's data, while the frontend is the user interface that consumes these APIs.

### Backend Setup

#### Prerequisites

- Node.js with Express installed on your machine
- PostgreSQL database installed and running
- Reactjs and Boostrap for the ux/ui design

#### Installation Steps

1. Clone the backend repository from GitHub:

   ```
   git clone https://github.com/KanmegneTabouguie/trackboardalternace.git
   ```

2. Navigate to the backend directory:

   ```
   cd <backend-directory>
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following configuration:

   ```
   DB_NAME=yourdata
   DB_USER=yourdata
   DB_PASSWORD=yourdata
   ```

5. Ensure your PostgreSQL database is running.

6. Start the backend server:

   ```
   npm start
   ```

7. The backend server should now be running on `http://localhost:5001`.

### Frontend Setup

#### Prerequisites

- Node.js installed on your machine

#### Installation Steps

2. Navigate to the frontend directory:

   ```
   cd <frontend-directory>
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add the following configuration:

   ```
   REACT_APP_API_BASE_URL=http://localhost:5001
   ```

   Replace `http://localhost:5001` with the base URL of your backend API if it's different.

5. Start the frontend development server:

   ```
   npm start
   ```

6. The frontend development server should now be running on `http://localhost:3000`.

### Features of the TrackingBoardAlternance Web Application

1. **User Authentication**:
   - Users can register using the `/auth/register` endpoint.
   - Users can log in using the `/auth/login` endpoint and receive a JWT token.

2. **Application Management**:
   - Users can view all applications using the `/applications` endpoint.
   - Users can view a single application by ID using the `/applications/:id` endpoint.
   - Users can add a new application using the `/applications` endpoint.
   - Users can update an existing application by ID using the `/applications/:id` endpoint.
   - Users can delete an application by ID using the `/applications/:id` endpoint.

3. **Middleware**:
   - Authentication middleware is available to protect routes that require authentication.

### Running the Application

1. Ensure both the backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:3000`.
3. You can now interact with the web application, register/login, manage applications, and enjoy the features provided.

### Conclusion

You have successfully set up and run both the backend and frontend of your MVP web application. You can further customize and expand the application based on your requirements and user feedback. Happy coding!
