import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BookModule } from './Middleware/book/book.module';

@Module({
  imports: [BookModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
