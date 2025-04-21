COOKHUB a web application where users can explore, share, and manage food recipes. It's built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

TECH STACK

Frontend: React.js (for building the user interface)

Backend: Node.js & Express.js (for handling server requests)

Database: MongoDB (to store recipes and user info)

Authentication: JWT (for secure login) and bcrypt (for password hashing)

USERS CAN : 

View recipes.

Add new recipes.

Edit and delete existing recipes.

Favorite recipes.

Create an account and log in to save their own recipes.

HOW TO RUN:

1. Clone the Repository
git clone https://github.com/swathismenon/Cookhubb.git
cd FOODRECIPE

3. Set Up Environment Variables
Create a .env file in the root of the project directory and add the following environment variables:
PORT=5000
CONNECTION_STRING=mongodb://localhost:27017/foodRecipe
SECRET_KEY="FED12345"

MONGODB_URI: Connection string for MongoDB (can be a local or cloud MongoDB instance).

JWT_SECRET: A secret key for signing JWT tokens (you can generate a random secret).

PORT: The port number the server will listen on (default is 5000).


3. Install Dependencies
Navigate to the root project folder (FOODRECIPE) and install the backend dependencies:

cd backend
npm install

Install frontend dependencies:


cd ../frontend
npm install

4. Running the Backend
Navigate to the backend folder and start the server:

cd backend
npm run dev
This will start the server on the port specified in the .env file (default 5000).

5. Running the Frontend
In another terminal window, navigate to the frontend folder and start the React development server:

cd ../frontend
npm start


TRACKING
Google Analytics is set up for the frontend to track page views and form submissions. The react-ga4 library is used to track events, including user interactions and page views.

SECURITY
CookHub implements several security features to protect user data:

PASSWORD HASHING
bcrypt is used to securely hash user passwords before storing them in the database.

AUTHENTICATION
JWT (JSON Web Tokens) is used to authenticate users securely.

Users must log in to access and modify data.

However, there are some known security issues that still need to be addressed:

CURRENT SECURITY THREATS : 

Storing Sensitive Information in Cookies: The app currently stores important user information (e.g., user ID) in cookies. If an attacker gains access to these cookies, they could misuse that information.

Cookies Are Not Secure: Cookies don’t have additional security measures, such as being encrypted or marked as HTTP-only, which means that malicious actors could read them.

Storing Sensitive Data in Local Storage: Authentication tokens and other sensitive data are stored in local storage, which is not secure. If an attacker executes malicious JavaScript on the page, they could access this data.



