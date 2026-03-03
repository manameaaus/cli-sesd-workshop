import chalk from "chalk";

class GreetCommand {
    run(name: string) {
        const hour = new Date().getHours();
        let greeting = "Hello";

        if (hour < 12) {
            greeting = "Good morning";
        } else if (hour < 17) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }

        console.log(chalk.green(`${greeting}, ${name}! Welcome to MyCLI.`));
    }
}

export default GreetCommand;
