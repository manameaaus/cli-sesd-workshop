import chalk from "chalk";
import ApiService from "../services/ApiService";

class JokeCommand {
    private api: ApiService;

    constructor() {
        this.api = new ApiService();
    }

    async run() {
        try {
            console.log(chalk.yellow("Getting a joke for you..."));
            const joke = await this.api.getRandomJoke();

            console.log(chalk.cyan(joke.setup));
            console.log(chalk.green(joke.punchline));
        } catch (err: any) {
            console.log(chalk.red("Couldn't fetch a joke. Try again later."));
        }
    }
}

export default JokeCommand;
