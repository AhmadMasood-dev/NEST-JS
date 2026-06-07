import { HttpException, HttpStatus } from '@nestjs/common';

export class BookException extends HttpException {
  constructor() {
    super('Error in ForbiddenExceptionError Class', HttpStatus.FORBIDDEN);
  }
   
}