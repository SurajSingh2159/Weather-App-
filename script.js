const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1848b4342emsh5f9b0e00406a052p121f20jsne29d0c1ef782',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
      cityname.innerHTML = city
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
            
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
      
      })
	.catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
      e.preventDefault()
getWeather(city.value)
})

getWeather("Delhi")


const getWeatherCustom1 = (city)=>{
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
            
            console.log(response)
            cloud_pct_S.innerHTML = response.cloud_pct
            feels_like_S.innerHTML = response.feels_like
            humidity_S.innerHTML = response.humidity
            max_temp_S.innerHTML = response.max_temp
            min_temp_S.innerHTML = response.min_temp
            sunrise_S.innerHTML = response.sunrise
            sunset_S.innerHTML = response.sunset
            temp_S.innerHTML = response.temp
            wind_degrees_S.innerHTML = response.wind_degrees
            wind_speed_S.innerHTML = response.wind_speed
            
      
      })
	.catch(err => console.error(err));
}

getWeatherCustom1("Shanghai")

const getWeatherCustom2 = (city)=>{
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
            
            console.log(response)
            cloud_pct_L.innerHTML = response.cloud_pct
            feels_like_L.innerHTML = response.feels_like
            humidity_L.innerHTML = response.humidity
            max_temp_L.innerHTML = response.max_temp
            min_temp_L.innerHTML = response.min_temp
            sunrise_L.innerHTML = response.sunrise
            sunset_L.innerHTML = response.sunset
            temp_L.innerHTML = response.temp
            wind_degrees_L.innerHTML = response.wind_degrees
            wind_speed_L.innerHTML = response.wind_speed
            
      
      })
	.catch(err => console.error(err));
}

getWeatherCustom2("Lucknow")

const getWeatherCustom3 = (city)=>{
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
            
            console.log(response)
            cloud_pct_B.innerHTML = response.cloud_pct
            feels_like_B.innerHTML = response.feels_like
            humidity_B.innerHTML = response.humidity
            max_temp_B.innerHTML = response.max_temp
            min_temp_B.innerHTML = response.min_temp
            sunrise_B.innerHTML = response.sunrise
            sunset_B.innerHTML = response.sunset
            temp_B.innerHTML = response.temp
            wind_degrees_B.innerHTML = response.wind_degrees
            wind_speed_B.innerHTML = response.wind_speed
            
      
      })
	.catch(err => console.error(err));
}

getWeatherCustom3("Boston")

const getWeatherCustom4 = (city)=>{
      fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {
            
            console.log(response)
            cloud_pct_K.innerHTML = response.cloud_pct
            feels_like_K.innerHTML = response.feels_like
            humidity_K.innerHTML = response.humidity
            max_temp_K.innerHTML = response.max_temp
            min_temp_K.innerHTML = response.min_temp
            sunrise_K.innerHTML = response.sunrise
            sunset_K.innerHTML = response.sunset
            temp_K.innerHTML = response.temp
            wind_degrees_K.innerHTML = response.wind_degrees
            wind_speed_K.innerHTML = response.wind_speed
            
      
      })
	.catch(err => console.error(err));
}

getWeatherCustom4("Kolkata")
