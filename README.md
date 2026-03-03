# MyCLI
mycli — multi-utility CLI

Overview

This repository provides `mycli`, a Node + TypeScript command-line tool with multiple utilities implemented as classes.

Install

1. Install dependencies:

```bash
npm install
```

2. Build the project:

```bash
npm run build
```

Usage after linking

After building and linking the package locally you can run commands directly with `mycli`.

Quick steps and examples:

```bash
npm run build
npm link
mycli greet Alice
mycli fileinfo ./path/to/file.txt
mycli weather London
mycli github octocat
mycli quote
mycli joke
mycli calc "(1+2)*3"
mycli password 12
mycli todo add "Buy milk"
mycli todo list
mycli todo done 1
mycli wordcount ./path/to/file.txt
```

Run tests

Unit tests are included for core services. To run tests:

```bash
npm install
npm test
```

Notes

- The test suite uses `vitest` and runs against TypeScript sources.
- For API-dependent commands (`weather`, `github`, `quote`, `joke`) a working internet connection is required.

## Setup

```bash
npm install
npm run build
```

## Usage

```bash
node dist/index.js <command> [options]
```

Or link it globally:

```bash
npm link
mycli <command> [options]
```

## Commands

| Command                     | Description                        |
| --------------------------- | ---------------------------------- |
| `greet <name>`              | Greet someone by name              |
| `fileinfo <filename>`       | Get details about a file           |
| `weather <city>`            | Get current weather for a city     |
| `github <username>`         | Look up a GitHub user profile      |
| `quote`                     | Get a random quote                 |
| `joke`                      | Get a random joke                  |
| `calc <expression>`         | Evaluate a math expression         |
| `password <length>`         | Generate a random password         |
| `todo add/list/done/remove` | Manage a todo list                 |
| `wordcount <filename>`      | Count lines, words, and characters |

## APIs Used

- GitHub API (user profile data)
- Open-Meteo API (weather data)
- DummyJSON API (random quotes)
- Official Joke API (random jokes)

## Project Structure

```
src/
├── index.ts
├── cli.ts
├── commands/
│   ├── greet.ts
│   ├── fileinfo.ts
│   ├── weather.ts
│   ├── github.ts
│   ├── quote.ts
│   ├── joke.ts
│   ├── calc.ts
│   ├── password.ts
│   ├── todo.ts
│   └── wordcount.ts
└── services/
    ├── ApiService.ts
    ├── FileService.ts
    └── MathService.ts
```