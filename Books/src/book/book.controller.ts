import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookService } from './book.service';
import type { Book } from './data/book.dto';

@Controller('api/v1/book')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAllBooks(): Book[] {
    return this.bookService.getBooksService();
  }

  @Post()
  addBook(@Body() book: Book): string {
    return this.bookService.addBookService(book);
  }
  @Put('/update')
  updateBook(@Body() book: Book): string {
    return this.bookService.updateBookService(book.id, book);
  }
  @Delete('/:bookId')
  deleteBook(@Param('bookId') id: string): string {
    return this.bookService.deleteBookService(id);
  }
}
