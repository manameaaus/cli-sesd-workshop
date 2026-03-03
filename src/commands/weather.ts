import chalk from "chalk";
import ApiService from "../services/ApiService";

class WeatherCommand {
    private api: ApiService;
    private weatherCodes: Record<number, string>;

    constructor() {
        this.api = new ApiService();
        this.weatherCodes = {
            0: "Clear sky",
            1: "Mainly clear",
            2: "Partly cloudy",
            3: "Overcast",
            45: "Foggy",
            48: "Depositing rime fog",
            51: "Light drizzle",
            53: "Moderate drizzle",
            55: "Dense drizzle",
            61: "Slight rain",
            63: "Moderate rain",
            65: "Heavy rain",
            71: "Slight snow",
            73: "Moderate snow",
            75: "Heavy snow",
            80: "Slight rain showers",
            81: "Moderate rain showers",
            82: "Violent rain showers",
            95: "Thunderstorm",
            96: "Thunderstorm with slight hail",
            99: "Thunderstorm with heavy hail",
        };
    }

    private getCondition(code: number): string {
        return this.weatherCodes[code] || "Unknown";
    }

    async run(city: string) {
        try {
            console.log(chalk.yellow(`Fetching weather for ${city}...`));
            const data = await this.api.getWeather(city);

            console.log(chalk.cyan("--- Weather ---"));
            console.log(`Location:    ${data.city}, ${data.country}`);
            console.log(`Temperature: ${data.temperature}°C`);
            console.log(`Wind Speed:  ${data.windspeed} km/h`);
            console.log(`Wind Dir:    ${data.winddirection}°`);
            console.log(`Condition:   ${this.getCondition(data.weathercode)}`);
        } catch (err: any) {
            console.log(chalk.red("Could not fetch weather data. Check the city name."));
        }
    }
}

export default WeatherCommand;
