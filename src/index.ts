import express, { Express } from 'express';

const app: Express = express();
const port: number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on PORT ${port}`);
});
