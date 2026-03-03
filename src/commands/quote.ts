import chalk from "chalk";
import ApiService from "../services/ApiService";

class QuoteCommand {
    private api: ApiService;

    constructor() {
        this.api = new ApiService();
    }

    async run() {
        try {
            console.log(chalk.yellow("Fetching a random quote..."));
            const data = await this.api.getRandomQuote();

            console.log(chalk.cyan("--- Quote ---"));
            console.log(chalk.italic(`"${data.quote}"`));
            console.log(chalk.gray(`  - ${data.author}`));
        } catch (err: any) {
            console.log(chalk.red("Could not fetch a quote right now."));
        }
    }
}

export default QuoteCommand;
