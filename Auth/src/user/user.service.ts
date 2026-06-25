import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class userService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  public users: User[] = [
    {
      id: 1,
      firstName: 'user',
      lastName: '1',
      password: 'password1',
      email: 'user1@gmail.com',
    },
    {
      id: 2,
      firstName: 'user',
      lastName: '2',
      password: 'password2',
      email: 'user2@gmail.com',
    },
    {
      id: 3,
      firstName: 'user',
      lastName: '3',
      password: 'password3',
      email: 'user3@gmail.com',
    },
  ];
  createUser(createUserDto: CreateUserDto): Promise<User> {
    let user: User = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    return this.userRepository.save(user);
  }
  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }
  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    let user: User = new User();
    user.firstName = updateUserDto.firstName;
    user.lastName = updateUserDto.lastName;
    user.email = updateUserDto.email;
    user.password = updateUserDto.password;
    user.id = id;
    return this.userRepository.save(user);
  }
  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

  getUserName(firstName: string): User | undefined {
    return this.users.find((user) => user.firstName === firstName);
  }
}
