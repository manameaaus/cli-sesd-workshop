import chalk from "chalk";
import fs from "fs-extra";
import path from "path";

interface TodoItem {
    id: number;
    task: string;
    done: boolean;
}

class TodoCommand {
    private filePath: string;
    private todos: TodoItem[];

    constructor() {
        this.filePath = path.join(process.cwd(), "todos.json");
        this.todos = this.load();
    }

    private load(): TodoItem[] {
        if (fs.existsSync(this.filePath)) {
            const data = fs.readFileSync(this.filePath, "utf-8");
            return JSON.parse(data);
        }
        return [];
    }

    private save() {
        fs.writeFileSync(this.filePath, JSON.stringify(this.todos, null, 2));
    }

    add(task: string) {
        const id = this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1;
        const newTodo: TodoItem = { id, task, done: false };
        this.todos.push(newTodo);
        this.save();
        console.log(chalk.green(`Added: "${task}" (ID: ${id})`));
    }

    list() {
        if (this.todos.length === 0) {
            console.log(chalk.yellow("No todos found. Add one with: mycli todo add <task>"));
            return;
        }

        console.log(chalk.cyan("--- Your Todos ---"));
        for (const todo of this.todos) {
            const status = todo.done ? chalk.green("[done]") : chalk.red("[pending]");
            console.log(`  ${todo.id}. ${status} ${todo.task}`);
        }
    }

    done(id: number) {
        const todo = this.todos.find((t) => t.id === id);
        if (!todo) {
            console.log(chalk.red(`Todo with ID ${id} not found.`));
            return;
        }
        todo.done = true;
        this.save();
        console.log(chalk.green(`Marked "${todo.task}" as done.`));
    }

    remove(id: number) {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index === -1) {
            console.log(chalk.red(`Todo with ID ${id} not found.`));
            return;
        }
        const removed = this.todos.splice(index, 1);
        this.save();
        console.log(chalk.green(`Removed: "${removed[0].task}"`));
    }
}

export default TodoCommand;
