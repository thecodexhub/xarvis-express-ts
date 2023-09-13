import express, { Express } from 'express';
import * as config from './config/config';

const app: Express = express();
const port: number = config.port;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on PORT ${port}`);
});
