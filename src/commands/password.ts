import chalk from "chalk";
import MathService from "../services/MathService";

class PasswordCommand {
    private mathService: MathService;

    constructor() {
        this.mathService = new MathService();
    }

    run(length: number) {
        if (length < 6) {
            console.log(chalk.red("Password length should be at least 6."));
            return;
        }

        if (length > 64) {
            console.log(chalk.red("Password length should be at most 64."));
            return;
        }

        const password = this.mathService.generatePassword(length);
        console.log(chalk.green(`Generated Password: ${password}`));
    }
}

export default PasswordCommand;
