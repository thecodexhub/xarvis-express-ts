import express, { Express, Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import xss from './middlewares/xss';

const app: Express = express();

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
  next(new Error('Not Found'));
});

export default app;
