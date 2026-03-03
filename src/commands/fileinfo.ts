import chalk from "chalk";
import FileService from "../services/FileService";

class FileInfoCommand {
    private fileService: FileService;

    constructor() {
        this.fileService = new FileService();
    }

    run(filename: string) {
        try {
            const info = this.fileService.getFileInfo(filename);
            console.log(chalk.cyan("--- File Information ---"));
            console.log(`Name:       ${info.name}`);
            console.log(`Extension:  ${info.extension}`);
            console.log(`Size:       ${info.size} bytes`);
            console.log(`Created:    ${info.created}`);
            console.log(`Modified:   ${info.modified}`);
            console.log(`Directory:  ${info.isDirectory ? "Yes" : "No"}`);
        } catch (err: any) {
            console.log(chalk.red(err.message));
        }
    }
}

export default FileInfoCommand;
