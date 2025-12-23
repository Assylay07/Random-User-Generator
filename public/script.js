document.getElementById("btn").addEventListener("click", async () => {
    const res = await fetch("/api/random-user");
    const data = await res.json();

    const user = data.user;
    const country = data.country;
    const exchange = data.exchange;

    // Карточки пользователя и страны
    document.getElementById("user-country-wrapper").innerHTML = `
        <div class="user-country-row">
            <div class="card">
                <img src="${user.picture}" alt="Profile picture" class="profile">
                <h2>${user.firstName} ${user.lastName}</h2>
                <p><strong>Gender:</strong> ${user.gender}</p>
                <p><strong>Age:</strong> ${user.age}</p>
                <p><strong>Date of Birth:</strong> ${new Date(user.dateOfBirth).toDateString()}</p>
                <p><strong>City:</strong> ${user.city}</p>
                <p><strong>Country:</strong> ${user.country}</p>
                <p><strong>Address:</strong> ${user.address}</p>
            </div>

            <div class="card">
                ${country.flag ? `<img src="${country.flag}" alt="Flag" class="flag">` : "<p>No flag available</p>"}
                <h2>Country Information</h2>
                <p><strong>Capital:</strong> ${country.capital}</p>
                <p><strong>Languages:</strong> ${country.languages}</p>
                <p><strong>Currency:</strong> ${country.currency}</p>
                ${
                    exchange
                    ? `<hr>
                       <h3>Exchange Rates</h3>
                       <p>1 ${exchange.base} = ${exchange.USD} USD</p>
                       <p>1 ${exchange.base} = ${exchange.KZT} KZT</p>`
                    : `<p>Exchange rate data not available</p>`
                }
            </div>
        </div>
    `;

    // Новости
    const newsHTML = data.news.length
        ? data.news.map(n => `
            <div class="card">
                ${n.image ? `<img src="${n.image}" alt="News image" style="width:100%;border-radius:10px;margin-bottom:10px;">` : ""}
                <h3>${n.title}</h3>
                <p>${n.description || ""}</p>
                <a href="${n.url}" target="_blank">Read more</a>
            </div>
        `).join("")
        : "<p>No news available</p>";

    document.getElementById("news-wrapper").innerHTML = newsHTML;
});
