import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Paris'); // Ville par défaut

  useEffect(() => {
    const fetchWeather = async () => {
      const apiKey = 'VOTRE_CLE_API'; // Remplacez par votre clé API
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      setWeatherData(response.data);
    };

    fetchWeather();
  }, [city]);

  return (
    <div>
      <h1>Météo à {city}</h1>
      {weatherData ? (
        <div>
          <p>Température: {weatherData.main.temp} °C</p>
          <p>Conditions: {weatherData.weather[0].description}</p>
        </div>
      ) : (
        <p>Chargement...</p>
      )}
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Entrez une ville"
      />
      <button onClick={() => setCity(city)}>Rechercher</button>
    </div>
  );
};

export default Weather;
