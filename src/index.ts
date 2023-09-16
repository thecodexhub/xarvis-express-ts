import app from './app';
import * as config from './config/config';

const port: number = config.port;

const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on PORT ${port}`);
});

const exitHandler = () => {
  if (server) {
    server.close((err) => {
      console.log('Server closed');
      process.exit(err ? 1 : 0);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error: Error) => {
  console.log(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  console.log('SIGTERM received');
  if (server) server.close();
});
