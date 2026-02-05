import { Module } from '@nestjs/common';
import { Feature1Module } from 'src/feature1/feature1.module';
import { Feature2Module } from 'src/feature2/feature2.module';
import { Feature3Module } from 'src/feature3/feature3.module';

@Module({
  imports: [Feature1Module, Feature2Module, Feature3Module],
  controllers: [],
  providers: [],
  exports: [],
})
export class OrdersModule {
  constructor() {
    console.log('Orders Module Loaded');
  }
}
