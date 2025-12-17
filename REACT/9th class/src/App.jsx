import { useState } from "react";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const getWeather = () => {
    if (!city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_REAL_API_KEY&lang=en`
    )
      .then((res) => {
        if (!res.ok) throw new Error("City not found or invalid API key");
        return res.json();
      })
      .then((data) => {
        setWeather(data);
        setError("");
      })
      .catch((err) => {
        setWeather(null);
        setError(err.message);
      });
  };

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <h1 className="text-4xl font-bold">Weather App</h1>

      <input
        type="text"
        placeholder="Enter city"
        className="border p-2 rounded w-64 text-center"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        onClick={getWeather}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Check
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="mt-6 text-center">
          <h2 className="text-3xl font-bold">{weather.name}</h2>
          <p className="text-2xl">{weather.main.temp}°C</p>
          <p className="text-xl">{weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default App;
