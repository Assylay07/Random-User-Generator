const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// Test route
app.get("/api/test", (req, res) => {
    res.json({ message: "Server is working!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


app.get("/api/random-user", async (req, res) => {
    try {
        // 1. Random User
        const userResponse = await axios.get("https://randomuser.me/api/");
        const user = userResponse.data.results[0];

        const countryName = user.location.country;

        const userData = {
            firstName: user.name.first,
            lastName: user.name.last,
            gender: user.gender,
            age: user.dob.age,
            dateOfBirth: user.dob.date,
            picture: user.picture.large,
            city: user.location.city,
            country: countryName,
            address: `${user.location.street.name}, ${user.location.street.number}`
        };

        // 2. Countrylayer
        const countryResponse = await axios.get(
            `http://api.countrylayer.com/v2/name/${countryName}?access_key=${process.env.COUNTRY_API_KEY}`
        );

        const country = countryResponse.data[0];

        const countryData = {
            name: country.name,
            capital: country.capital || "N/A",
            languages: country.languages
                ? country.languages.map(l => l.name).join(", ")
                : "N/A",
            currency: country.currencies
                ? country.currencies[0].code
                : "N/A",
            flag: country.flag
        };

        // 3. Exchange Rate (ОТДЕЛЬНЫЙ try-catch!)
        let exchangeData = null;

        if (countryData.currency !== "N/A") {
            try {
                const exchangeResponse = await axios.get(
                    `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGE_API_KEY}/latest/${countryData.currency}`
                );

                exchangeData = {
                    base: countryData.currency,
                    USD: exchangeResponse.data.conversion_rates.USD,
                    KZT: exchangeResponse.data.conversion_rates.KZT
                };
            } catch (exchangeError) {
                console.log("Exchange API error — skipped");
            }
        }

        // 4. News API
        let newsData = [];

        try {
            const newsResponse = await axios.get(
                `https://newsapi.org/v2/everything?q=${countryName}&language=en&pageSize=5&apiKey=${process.env.NEWS_API_KEY}`
            );

            newsData = newsResponse.data.articles.map(article => ({
                title: article.title,
                description: article.description,
                image: article.urlToImage,
                url: article.url
            }));
        } catch (newsError) {
            console.log("News API error — skipped");
        }


        res.json({
            user: userData,
            country: countryData,
            exchange: exchangeData,
            news: newsData
        });

    } catch (error) {
        res.status(500).json({ error: "Failed to fetch data" });
    }
});
