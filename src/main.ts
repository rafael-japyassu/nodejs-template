import { env } from './config/env';
import { logger } from './config/logger';
import { expressServer } from './infra/http/gateways/express';

async function bootstrap() {
  expressServer.listen(env.PORT, () => {
    logger.info(`API Running at http://localhost:${env.PORT}`);
  });
}

bootstrap();
