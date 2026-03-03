import chalk from "chalk";
import FileService from "../services/FileService";

class WordCountCommand {
    private fileService: FileService;

    constructor() {
        this.fileService = new FileService();
    }

    run(filename: string) {
        try {
            const counts = this.fileService.countWords(filename);
            console.log(chalk.cyan("--- Word Count ---"));
            console.log(`Lines:      ${counts.lines}`);
            console.log(`Words:      ${counts.words}`);
            console.log(`Characters: ${counts.chars}`);
        } catch (err: any) {
            console.log(chalk.red(err.message));
        }
    }
}

export default WordCountCommand;
