import { logger } from './utils/index.js';
import app from './src/app.js';
import config from './config/config.js';

const { port } = config.app;

app.listen(port, (err) => {
  if (err) {
    logger.error(err);
    return;
  }
  logger.info(`App listening on port ${port}!`);
});