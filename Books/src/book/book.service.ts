import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService {
  public books: Book[] = [];

  getBooksService() {
    return this.books;
  }
  addBookService(book: Book): string {
    if (!book) {
      throw new Error('Book data is required');
    }
    book.id = uuidv4();
    this.books.push(book);
    return 'Book added successfully';
  }
  updateBookService(bookId: string, updatedBook: Book): string {
    const index = this.books.findIndex((book) => book.id === bookId);
    if (index !== -1) {
      this.books[index] = updatedBook;
      return 'Book updated successfully';
    }
    return 'Book not found';
  }
  deleteBookService(bookId: string): string {
    this.books = this.books.filter((book) => book.id !== bookId);
    return 'Book deleted successfully';
  }
}
