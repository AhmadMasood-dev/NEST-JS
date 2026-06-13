import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class userService {
  public users: User[] = [
    {
      id: 1,
      name: 'user1',
      password: 'password1',
      email: 'user1@gmail.com',
    },
    {
      id: 2,
      name: 'user2',
      password: 'password2',
      email: 'user2@gmail.com',
    },
    {
      id: 3,
      name: 'user3',
      password: 'password3',
      email: 'user3@gmail.com',
    },
  ];

  getUserName(userName: string): User | undefined {
    return this.users.find((user) => user.name === userName);
  }
}
