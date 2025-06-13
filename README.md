# COOKHUB

A web application where users can explore, share, and manage food recipes. It's built using the MERN stack (MongoDB, Express.js, React.js, Node.js).

---

## TECH STACK

- **Frontend:** React.js (for building the user interface)
- **Backend:** Node.js & Express.js (for handling server requests)
- **Database:** MongoDB (to store recipes and user info)
- **Authentication:** JWT (for secure login) and bcrypt (for password hashing)

---

## USERS CAN:

- View recipes
- Add new recipes
- Edit and delete existing recipes
- Favorite recipes
- Create an account and log in to save their own recipes

---

## HOW TO RUN:

1. **Clone the Repository**
   
   ```bash
   git clone https://github.com/swathismenon/Cookhubb.git
   cd Cookhubb
 
   

2. **Set Up Environment Variables**

Create a .env file in the root of the project directory and add the following:

```bash
PORT=5000
CONNECTION_STRING=mongodb://localhost:27017/foodRecipe
SECRET_KEY=FED12345
```

3. **Install Dependencies**
  
   # Backend
   ```bash
   cd backend
   npm install


# Frontend
```bash
cd ../frontend
npm install
```

4.**Run the Backend**
```bash
cd backend
npm run dev
```

5. **Run the Frontend**
  ```bash
cd ../frontend
npm run dev
```
  


## ACCESSIBILITY & SEO
-Accessibility (a11y) and SEO were considered in the development of CookHub to ensure usability and discoverability:

-Semantic HTML is used across the application to enhance screen reader support.

-Input fields are accompanied by properly associated labels, improving usability for screen reader and keyboard users.

-Keyboard navigation is supported for all interactive elements like forms and buttons.

-Contrast ratios for text and buttons are being verified and adjusted to meet WCAG 2.1 AA guidelines (minimum 4.5:1 for text).

-Alt text is used on all images to support users who rely on screen readers.

-SEO-friendly practices include meaningful page titles, structured content, and descriptive metadata for better indexing.

## Tracking and Analytics
This application uses Google Analytics (GA4) to track anonymous usage data.

**What is being tracked:**
Page visits, navigation patterns, session duration, and general interaction events within the app — all anonymized and non-personal.

**Why tracking is implemented:**
The primary goal is to understand how users interact with the application. This insight helps identify popular features, drop-off points, and overall engagement. With this data, I can make informed design and UX decisions to improve the app over time.

**Why Google Analytics:**
I chose GA4 for its seamless integration with Vite + React, its real-time dashboard, and minimal performance overhead. It’s widely adopted and GDPR-compliant when configured properly.

**Privacy Considerations:**
No personal data is collected or stored. Users are not profiled or tracked across different sites. The data collected is strictly for internal usage analytics.

## SECURITY
CookHub includes several security features to protect user data:

### Password Hashing
User passwords are hashed using bcrypt before being stored in the database.

### Authentication
JSON Web Tokens (JWT) are used for secure user authentication.

Only authenticated users can access and modify recipes.

### Known Security Concerns
Sensitive Data in Cookies: Currently stores user ID in cookies without encryption.

Cookies Not Marked HTTP-only/Secure: Makes them accessible to client-side scripts.

Local Storage Risks: Tokens are stored in localStorage, which is vulnerable to XSS attacks.

These issues are noted for future improvement.








