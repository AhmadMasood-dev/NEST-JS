import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class BookMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    let protocol = req.protocol;
    let host = req.get('host');
    let url = req.originalUrl;
    console.log(`Request URL: ${protocol}://${host}/New${url}`);
    console.log('Book middleware is running');
    next();
  }
}
