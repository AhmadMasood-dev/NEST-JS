import { Module } from '@nestjs/common';
import { ChatModule } from './chat/chat.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { BookController } from './app.controller';

@Module({
  imports: [ChatModule, OrdersModule, UsersModule],
  controllers: [BookController],
  providers: [],
  exports: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module Loaded');
  }
}
