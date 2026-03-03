import fs from "fs-extra";
import path from "path";

class FileService {
    getFileInfo(filePath: string) {
        const fullPath = path.resolve(filePath);

        if (!fs.existsSync(fullPath)) {
            throw new Error(`File not found: ${fullPath}`);
        }

        const stats = fs.statSync(fullPath);
        const ext = path.extname(fullPath);

        return {
            name: path.basename(fullPath),
            extension: ext || "none",
            size: stats.size,
            created: stats.birthtime.toLocaleString(),
            modified: stats.mtime.toLocaleString(),
            isDirectory: stats.isDirectory(),
        };
    }

    readFileContent(filePath: string): string {
        const fullPath = path.resolve(filePath);

        if (!fs.existsSync(fullPath)) {
            throw new Error(`File not found: ${fullPath}`);
        }

        return fs.readFileSync(fullPath, "utf-8");
    }

    countWords(filePath: string) {
        const content = this.readFileContent(filePath);
        const lines = content.split("\n").length;
        const words = content.split(/\s+/).filter((w) => w.length > 0).length;
        const chars = content.length;

        return { lines, words, chars };
    }
}

export default FileService;
