import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class BookGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    console.log('BookGuard called');
    return true;
  }
}
