import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { userService } from 'src/user/user.service';

@Injectable()
export class PassportLocalStragy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: userService) {
    super();
  }
  async validate(username: string, password: string): Promise<any> {
    const user = await this.userService.getUserName(username);
    if (!user) {
      throw new UnauthorizedException('user not found');
    }
    if (user.password !== password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return user;
  }
}
