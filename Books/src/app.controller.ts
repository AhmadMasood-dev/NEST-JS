import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './book/book.service';

@Controller('/api/v1/book')
export class BookController {
  constructor(private bookServices: BookService) {}
  @Post()
  addBook() {
    return this.bookServices.createBook();
  }
  @Delete('/delete')
  deleteBook() {
    return this.bookServices.deleteBook();
  }
  @Put('/update')
  updateBook() {
    return this.bookServices.updateBook();
  }
  @Get()
  getBook() {
    return this.bookServices.getBookDetails();
  }
  @Get('/:bookId')
  getBookById(@Param() params): string {
    console.log(params);
    return this.bookServices.getBookById(params.bookId);
  }
}
