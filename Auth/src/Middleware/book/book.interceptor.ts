import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { map, Observable } from 'rxjs';
@Injectable()
export class BookInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    request.body.name = 'this is the name';
    request.body.age = '23';
    console.log('Book Interceptor called');
    return next.handle().pipe(map((data) => {
      return 'from interceptor';
    }));
  }
}
