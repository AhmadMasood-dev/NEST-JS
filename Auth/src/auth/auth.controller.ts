import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/auth')
export class AuthController {
    @Post('register')
    register(){
        return {message: "User registered successfully"};
     }
}
