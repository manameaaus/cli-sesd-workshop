import axios from "axios";

class ApiService {
    private baseUrls: Record<string, string>;
    private timeout: number;

    constructor() {
        this.baseUrls = {
            github: "https://api.github.com",
            geocode: "https://geocoding-api.open-meteo.com",
            weather: "https://api.open-meteo.com",
            quote: "https://dummyjson.com",
            joke: "https://official-joke-api.appspot.com",
        };
        this.timeout = 8000;
    }

    async getGithubUser(username: string) {
        const url = `${this.baseUrls.github}/users/${username}`;
        const response = await axios.get(url, { timeout: this.timeout });
        return response.data;
    }

    async getWeather(city: string) {
        const geoUrl = `${this.baseUrls.geocode}/v1/search?name=${encodeURIComponent(city)}&count=1`;
        const geoRes = await axios.get(geoUrl, { timeout: this.timeout });

        if (!geoRes.data.results || geoRes.data.results.length === 0) {
            throw new Error("City not found");
        }

        const location = geoRes.data.results[0];
        const lat = location.latitude;
        const lon = location.longitude;

        const weatherUrl = `${this.baseUrls.weather}/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
        const weatherRes = await axios.get(weatherUrl, { timeout: this.timeout });

        return {
            city: location.name,
            country: location.country || "N/A",
            temperature: weatherRes.data.current_weather.temperature,
            windspeed: weatherRes.data.current_weather.windspeed,
            winddirection: weatherRes.data.current_weather.winddirection,
            weathercode: weatherRes.data.current_weather.weathercode,
        };
    }

    async getRandomQuote() {
        const url = `${this.baseUrls.quote}/quotes/random`;
        const response = await axios.get(url, { timeout: this.timeout });
        return response.data;
    }

    async getRandomJoke() {
        const url = `${this.baseUrls.joke}/random_joke`;
        const response = await axios.get(url, { timeout: this.timeout });
        return response.data;
    }
}

export default ApiService;
