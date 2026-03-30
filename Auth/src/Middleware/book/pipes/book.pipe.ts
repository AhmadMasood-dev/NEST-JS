import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class BookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(
      'Book pipe is running with value',
      value,
      'typeOf',
      typeof value.id,
    );
    if (value.id == 1) {
      return value;
    } else {
      throw new BadRequestException('Validation failed');
    }
  }
}
