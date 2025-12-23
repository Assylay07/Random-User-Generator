### API project
### Project Overview
This project is a web application that demonstrates server-side integration of multiple public APIs using Node.js and Express.  
The application retrieves a random user, extracts personal and location data, fetches related country information, exchange rates, and news headlines, and displays all processed data in a clean and responsive frontend.

All API calls and data processing logic are implemented on the server side, while the frontend is responsible only for displaying the received data.

### Technologies Used
### Backend
- Node.js
- Express.js
- Axios
- dotenv (for environment variables)

### Frontend
- HTML
- CSS 
- JavaScript 

### APIs Used and Their Purpose

### 1. Random User Generator API  
URL: https://randomuser.me/api/

Purpose: Generates a random user profile used as the main data source.

Extracted data:
- First name
- Last name
- Gender
- Age
- Date of birth
- Profile picture
- City
- Country
- Full address (street name + number)

This API is always called first, and its country value is used for subsequent API requests.

### 2. Countrylayer API  
URL: https://countrylayer.com/

Purpose: Provides information about the country obtained from the Random User API.

Extracted data:
- Country name
- Capital city
- Official language(s)
- Currency
- National flag

### 3. Exchange Rate API  
URL: https://www.exchangerate-api.com/

Purpose: Displays how the user’s local currency compares to:
- United States Dollar (USD)
- Kazakhstani Tenge (KZT)


### 4. News API  
URL: https://newsapi.org/

Purpose: Fetches news headlines related to the user’s country.

Conditions:
- English language only
- Maximum 5 articles
- Articles must mention the country name

Displayed data:
- Headline title
- Image (if available)
- Short description
- Link to the full article

### Design Decisions 

- All API keys are stored in environment variables for security 
- Axios is used for backend API requests due to its simplicity and built-in JSON handling 
- Dependent API calls are executed conditionally to avoid errors 
- Missing data is handled gracefully without breaking the UI 
- The frontend uses a card-based, responsive design for better usability 

 
### Setup Instructions

### 1. Install dependencies
npm install

2. Create .env file
env
COUNTRY_API_KEY=countrylayer_api_key
EXCHANGE_API_KEY=exchangerate_api_key
NEWS_API_KEY=newsapi_key

3. Start the server
node server.js

4. Open the application
http://localhost:3000

How to Use the Application

Open the website
Click the "Get Random User" button

View:

User personal information
Country details
Exchange rates (if available)
News headlines related to the user’s country

Known Limitations
Some country data may be unavailable due to free API limitations
Exchange rates depend on the availability of currency data
News articles may not be available for all countries
These limitations are handled gracefully without breaking the application.

### Conclusion
This project demonstrates effective backend API integration, secure server-side logic, clean data processing, and responsive frontend design. It follows best practices in web development and meets all assignment requirements.