# Random User Application

## Overview
This application fetches a random user and displays detailed information about them along with country data, currency exchange rates, and news headlines.  
All data is fetched from server-side APIs and presented in a clean, responsive, and user-friendly frontend.

---

## Features
- **Random User Generator API**: Fetches random users with personal and location details.
- **Countrylayer API**: Provides country information including capital, languages, currency, and flag.
- **Exchange Rate API**: Shows exchange rates of the user's currency against USD and KZT.
- **News API**: Retrieves latest news headlines related to the user's country.

---

## Technologies Used
- Node.js + Express
- Axios (for API requests)
- HTML, CSS, JavaScript (frontend)
- Environment variables for API keys

---

## Setup Instructions

1. Clone the repository:
```bash
git clone <your-repo-url>
Navigate to the project folder:

bash
Копировать код
cd <project-folder>
Install dependencies:

bash
Копировать код
npm install
Create a .env file in the root directory and add your API keys:

env
Копировать код
COUNTRY_API_KEY=your_countrylayer_key
EXCHANGE_API_KEY=your_exchangerate_key
NEWS_API_KEY=your_newsapi_key
Start the server:

bash
Копировать код
node server.js
Open your browser and navigate to:

arduino
Копировать код
http://localhost:3000
Usage
Click the "Get Random User" button to fetch a random user.

The user's personal info and country info will appear in cards.

Exchange rates (if available) are displayed below country information.

The latest 5 news headlines related to the user's country are displayed in a responsive grid.

Notes
Missing data (languages, currency, flag, exchange rates) are handled gracefully.

Free API plans may sometimes return incomplete data.

All APIs run on the server side; the frontend only displays cleaned and structured data.

Design
Responsive and modern UI using CSS grid and flexbox.

Cards with shadows and hover effects for better visual appeal.

Mobile-friendly layout.

Known Limitations
Some countries may not have flags, languages, or currency info on the free Countrylayer API plan.

Exchange rates may not be available if currency data is missing.

News may not be available for all countries due to API limitations.