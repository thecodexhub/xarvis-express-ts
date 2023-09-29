# Xarvis Express TS

Node and Express Starter Template - TypeScript.

![node express workflow](https://github.com/thecodexhub/xarvis-express-ts/actions/workflows/ci.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Features

* Linting rules with ESlint and Prettier
   * Pre-commit hooks using husky for staged-lint
   * Editor configuration with .editorconfig
   * Lint staged parser in .lintstagedrc.json
* ENV validations with Joi and dotenv
   * cross-env and pm2 as load balancer
   * ecosystem config file for production
* Secure http requests using helmet
* Sanitize request data with xss filters
* gzip compression for response body size
* Enable cors, pre-flight across-the-board
* 404 for unknown API request
* Convert unknown errors to known object, error handling
* process.exit on unhandled exception/rejection
* Custom logging with Winston and Morgan
* Add a health check route
* Rate limiter for repeated failed requests in production environment
* Add unit tests with jest and supertest
* Github workflow

## Project setup

Create a `.env` file in the root folder, and add the following line

```
PORT = <PORT_NUMBER>
```

Then try running the following command to start up the server locally

```
$ npm run dev
```
