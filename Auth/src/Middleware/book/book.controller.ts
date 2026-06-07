import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import type { BookDto } from './dto/book.dto';
import { BookPipe } from './pipes/book.pipe';
import { BookExceptionFilter } from './book.exception.filter';
import { BookGuard } from './book.guard';

@Controller('/api/v1/book')
export class BookController {
  @Get()
  @UseFilters(new BookExceptionFilter())
  @UseGuards(new BookGuard())
  getBooks(): string {
    throw new BadRequestException();
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
