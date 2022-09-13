import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth-dto';
import { LoginAuthDto } from './dto/login-auth-dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { UsersDocument } from 'src/users/schema/users.schema';
import { Model } from 'mongoose';
import { hash } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model <UsersDocument>,
  ) {}

  async registerUser(dto: RegisterAuthDto) {
    const { password } =  dto;
    const plainToHash = await hash(password, 10);
    dto = {...dto, password: plainToHash};
    return this.userModel.create(dto);
  };

  loginUser(dto: LoginAuthDto) {
    console.log('DTO login en servicio', dto);
  };
}
