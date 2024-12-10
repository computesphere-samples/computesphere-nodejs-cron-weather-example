require('dotenv').config();
const axios = require('axios');
const moment = require('moment');

const location = process.env.LOCATION;
const apiKey = process.env.API_KEY;

async function getWeather() {
  try {
    const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = response.data;
    console.log(`Today's Date: ${moment().format("YYYY-MM-DD HH:mm A")}`)
    console.log(`Weather in ${data.name}:`);
    console.log(`Temperature: ${data.main.temp}°C`);
    console.log(`Humidity: ${data.main.humidity}%`);
    console.log(`Conditions: ${data.weather[0].description.toLowerCase().replace(/\b\w/g, s => s.toUpperCase())}`);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
  }
}

getWeather();
