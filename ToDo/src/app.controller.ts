import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('/api/v1/book')
export class BookController {
  @Post()
  addBook() {
    return 'Book added successfully';
  }
  @Delete('/delete')
  deleteBook() {
    return 'Book deleted successfully';
  }
  @Put('/update')
  updateBook() {
    return 'Book updated successfully';
  }
  @Get()
  getBook() {
    return 'Book details';
  }
  @Get('/:bookId')
  getBookById(@Param() params): string {
    console.log(params);
    return `Book details for id ${params.bookId}`;
  }
}
