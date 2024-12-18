import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseCrudService } from 'src/shared/service/curd-base.service';
import { User } from './entities/user.entity';
import { ICategory } from 'src/shared/interface/category.interface';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService extends BaseCrudService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super();
    this.repository = repository;
  }
}
