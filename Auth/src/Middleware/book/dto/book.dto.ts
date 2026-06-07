import { IsString, IsNotEmpty } from 'class-validator';

export class BookDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  
  @IsString()
  @IsNotEmpty()
  title: string;
  
  @IsString()
  @IsNotEmpty()
  author: string;
}
