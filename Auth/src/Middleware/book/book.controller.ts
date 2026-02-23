import { Controller, Get } from '@nestjs/common';

@Controller('/api/v1/book')
export class BookController {
  @Get()
  getBooks(): string {
    return 'List of books in the library';
  }
}
