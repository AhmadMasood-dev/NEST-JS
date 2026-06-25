import { Module } from '@nestjs/common';

import { userService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { userRepository } from './repo/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [userService, userRepository],
  exports: [userService, userRepository],
})
export class UserModule {}
