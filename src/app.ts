import express, { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import xss from './middlewares/xss';
import * as config from './config/config';
import * as morgan from './config/morgan';
import { errorConverter } from './middlewares/error-converter';
import { errorHandler } from './middlewares/error-handler';
import { ApiError } from './utils/api-error';
import httpStatus from 'http-status';

const app: Express = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// Secure HTTP Requests
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to sanitize incoming request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// Respond with a 404 for any unknown API request.
app.use((req: Request, res: Response, next: NextFunction) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not Found'));
});

// Convert errors, other than ApiError, into ApiError
app.use(errorConverter);
// Handle errors
app.use(errorHandler);

export default app;
