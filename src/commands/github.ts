import chalk from "chalk";
import ApiService from "../services/ApiService";

class GithubCommand {
    private api: ApiService;

    constructor() {
        this.api = new ApiService();
    }

    async run(username: string) {
        try {
            console.log(chalk.yellow(`Looking up GitHub user: ${username}...`));
            const user = await this.api.getGithubUser(username);

            console.log(chalk.cyan("--- GitHub Profile ---"));
            console.log(`Username:    ${user.login}`);
            console.log(`Name:        ${user.name || "N/A"}`);
            console.log(`Bio:         ${user.bio || "N/A"}`);
            console.log(`Public Repos:${user.public_repos}`);
            console.log(`Followers:   ${user.followers}`);
            console.log(`Following:   ${user.following}`);
            console.log(`Profile:     ${user.html_url}`);
        } catch (err: any) {
            console.log(chalk.red("Could not find that GitHub user."));
        }
    }
}

export default GithubCommand;
