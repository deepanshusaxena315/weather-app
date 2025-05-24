const apikey = '6964828b69ccd70563a6de1cb77dfc27';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apikey}`);

	if(response.status== 404){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	}
	else{
		document.querySelector(".error").style.display = "none";
	var data = await response.json();
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

	if(data.weather[0].main=="Clouds"){
		weathericon.src = "images/clouds.png"
	}
	else if(data.weather[0].main=="Rain"){
		weathericon.src = "images/rain.png"
	}
	else if(data.weather[0].main=="Drizzle"){
		weathericon.src = "images/drizzle.png"
	}
	else if(data.weather[0].main=="Mist"){
		weathericon.src = "images/mist.png"
	}
	else if(data.weather[0].main=="Clear"){
		weathericon.src = "images/clear.png"
	}
	else if(data.weather[0].main=="Snow"){
		weathericon.src = "images/snow.png"
	}
	document.querySelector(".weather").style.display = "block";
	}

}

	
searchBtn.addEventListener("click",() => {
	checkweather(searchBox.value);
}
)
searchBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkweather(searchBox.value);
    }
});