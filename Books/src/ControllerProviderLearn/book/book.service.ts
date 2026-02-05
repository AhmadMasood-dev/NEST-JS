import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  getBookDetails(): string {
    return 'Book details from BookService';
  }
  createBook(): string {
    return 'Book created successfully';
  }
  updateBook(): string {
    return 'Book updated successfully';
  }
  deleteBook(): string {
    return 'Book deleted successfully';
  }
  getBookById(bookId: string): string {
    return `Book details for id ${bookId}`;
  }
}
