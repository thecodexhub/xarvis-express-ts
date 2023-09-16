import app from './app';
import * as config from './config/config';

const port: number = config.port;

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on PORT ${port}`);
});
