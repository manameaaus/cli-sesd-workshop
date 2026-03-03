import { Command } from "commander";
import GreetCommand from "./commands/greet";
import FileInfoCommand from "./commands/fileinfo";
import WeatherCommand from "./commands/weather";
import GithubCommand from "./commands/github";
import QuoteCommand from "./commands/quote";
import JokeCommand from "./commands/joke";
import CalcCommand from "./commands/calc";
import PasswordCommand from "./commands/password";
import TodoCommand from "./commands/todo";
import WordCountCommand from "./commands/wordcount";

class CLI {
    private program: Command;
    private greetCmd: GreetCommand;
    private fileInfoCmd: FileInfoCommand;
    private weatherCmd: WeatherCommand;
    private githubCmd: GithubCommand;
    private quoteCmd: QuoteCommand;
    private jokeCmd: JokeCommand;
    private calcCmd: CalcCommand;
    private passwordCmd: PasswordCommand;
    private todoCmd: TodoCommand;
    private wordCountCmd: WordCountCommand;

    constructor() {
        this.program = new Command();
        this.greetCmd = new GreetCommand();
        this.fileInfoCmd = new FileInfoCommand();
        this.weatherCmd = new WeatherCommand();
        this.githubCmd = new GithubCommand();
        this.quoteCmd = new QuoteCommand();
        this.jokeCmd = new JokeCommand();
        this.calcCmd = new CalcCommand();
        this.passwordCmd = new PasswordCommand();
        this.todoCmd = new TodoCommand();
        this.wordCountCmd = new WordCountCommand();

        this.setup();
    }

    private setup() {
        this.program
            .name("mycli")
            .description("A simple CLI tool with multiple utilities")
            .version("1.0.0");

        this.registerGreet();
        this.registerFileInfo();
        this.registerWeather();
        this.registerGithub();
        this.registerQuote();
        this.registerJoke();
        this.registerCalc();
        this.registerPassword();
        this.registerTodo();
        this.registerWordCount();
    }

    private registerGreet() {
        this.program
            .command("greet <name>")
            .description("Greet someone by name")
            .action((name: string) => {
                this.greetCmd.run(name);
            });
    }

    private registerFileInfo() {
        this.program
            .command("fileinfo <filename>")
            .description("Get information about a file")
            .action((filename: string) => {
                this.fileInfoCmd.run(filename);
            });
    }

    private registerWeather() {
        this.program
            .command("weather <city>")
            .description("Get current weather for a city")
            .action(async (city: string) => {
                await this.weatherCmd.run(city);
            });
    }

    private registerGithub() {
        this.program
            .command("github <username>")
            .description("Get GitHub profile info for a user")
            .action(async (username: string) => {
                await this.githubCmd.run(username);
            });
    }

    private registerQuote() {
        this.program
            .command("quote")
            .description("Get a random inspirational quote")
            .action(async () => {
                await this.quoteCmd.run();
            });
    }

    private registerJoke() {
        this.program
            .command("joke")
            .description("Get a random joke")
            .action(async () => {
                await this.jokeCmd.run();
            });
    }

    private registerCalc() {
        this.program
            .command("calc <expression>")
            .description("Evaluate a math expression")
            .action((expression: string) => {
                this.calcCmd.run(expression);
            });
    }

    private registerPassword() {
        this.program
            .command("password <length>")
            .description("Generate a random password of given length")
            .action((length: string) => {
                this.passwordCmd.run(parseInt(length, 10));
            });
    }

    private registerTodo() {
        const todo = this.program
            .command("todo")
            .description("Manage your todo list");

        todo
            .command("add <task>")
            .description("Add a new todo")
            .action((task: string) => {
                this.todoCmd.add(task);
            });

        todo
            .command("list")
            .description("List all todos")
            .action(() => {
                this.todoCmd.list();
            });

        todo
            .command("done <id>")
            .description("Mark a todo as done")
            .action((id: string) => {
                this.todoCmd.done(parseInt(id, 10));
            });

        todo
            .command("remove <id>")
            .description("Remove a todo by ID")
            .action((id: string) => {
                this.todoCmd.remove(parseInt(id, 10));
            });
    }

    private registerWordCount() {
        this.program
            .command("wordcount <filename>")
            .description("Count lines, words, and characters in a file")
            .action((filename: string) => {
                this.wordCountCmd.run(filename);
            });
    }

    run() {
        this.program.parse(process.argv);
    }
}

export default CLI;
