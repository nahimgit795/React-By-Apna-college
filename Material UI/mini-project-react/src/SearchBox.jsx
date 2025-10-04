import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "efe8a98533ad06c9a29a4b81dbf2f7b0";

    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();
            if (jsonResponse.cod !== 200) {
                alert(jsonResponse.message); // show error if city not found
                return null;
            }
            const result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMIN: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error("Error fetching weather:", error);
            return null;
        }
    };

    const handleCity = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!city) return;
        const newinfo = await getWeatherInfo();
        if (newinfo) updateInfo(newinfo);
        setCity(""); // clear input after submit
    };

    return (
        <div className="SearchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="Enter City"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleCity}
                    placeholder="City"
                />
                <br /><br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
            </form>
        </div>
    );
}
