import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request, Response, NextFunction } from 'express';
function globalMiddlewareOne(req: Request, res: Response, next: NextFunction) {
  console.log('this is the global middle ware');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalMiddlewareOne);
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
