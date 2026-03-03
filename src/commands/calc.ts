import chalk from "chalk";
import MathService from "../services/MathService";

class CalcCommand {
    private mathService: MathService;

    constructor() {
        this.mathService = new MathService();
    }

    run(expression: string) {
        try {
            const result = this.mathService.evaluate(expression);
            console.log(chalk.green(`Result: ${result}`));
        } catch (err: any) {
            console.log(chalk.red(err.message));
        }
    }
}

export default CalcCommand;
