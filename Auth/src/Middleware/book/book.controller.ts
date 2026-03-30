import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import type { BookDto } from './dto/book.dto';
import { BookPipe } from './pipes/book.pipe';

@Controller('/api/v1/book')
export class BookController {
  @Get()
  getBooks(): string {
    return 'List of books in the library';
  }
  @Get('/:id')
  getBookById(@Param('id', ParseIntPipe) id: number): string {
    console.log(`Book ID: ${id}`, typeof id);
    return `Details of book with ID ${id}`;
  }

  @Post()
  addBook(@Body(new BookPipe()) book: BookDto) {
    console.log('Book data:', book);
    return 'Book added successfully';
  }
}
