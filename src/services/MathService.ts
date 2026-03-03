class MathService {
    evaluate(expression: string): number {
        const sanitized = expression.replace(/[^0-9+\-*/.() ]/g, "");

        if (sanitized.length === 0) {
            throw new Error("Invalid expression");
        }

        const result = Function(`"use strict"; return (${sanitized})`)();

        if (typeof result !== "number" || isNaN(result)) {
            throw new Error("Could not evaluate the expression");
        }

        return result;
    }

    generatePassword(length: number): string {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const digits = "0123456789";
        const symbols = "!@#$%&*?";
        const all = upper + lower + digits + symbols;

        let password = "";

        password += upper[Math.floor(Math.random() * upper.length)];
        password += lower[Math.floor(Math.random() * lower.length)];
        password += digits[Math.floor(Math.random() * digits.length)];
        password += symbols[Math.floor(Math.random() * symbols.length)];

        for (let i = 4; i < length; i++) {
            password += all[Math.floor(Math.random() * all.length)];
        }

        const arr = password.split("");
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }

        return arr.join("");
    }
}

export default MathService;
