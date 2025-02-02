const apiKey = "00146bad67ee2510b5c02715cf1295d2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const  searchBox = document.querySelector(".search input");
const  searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhkL2oQTxn3xYtqmOH39Rh4OGh3GPmtXgcg&s";
    }
    else if(data.weather[0] == "Clear"){
        weatherIcon.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioVdl7ofRE3Gr1lBHCF8EHIbKh7uMkdlFag&s";
    }

    else if(data.weather[0] == "Rain"){
        weatherIcon.src = " https://cdn-icons-png.flaticon.com/512/116/116251.png";
    }

    else if(data.weather[0] == "Drizzle"){
        weatherIcon.src = " https://cdn-icons-png.flaticon.com/512/116/116251.png";
    }

    else if(data.weather[0] == "Mist"){
        weatherIcon.src = " https://cdn-icons-png.flaticon.com/512/116/116251.png";
    }

    


}

searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})
con.png



checkWeather();