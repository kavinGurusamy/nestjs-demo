import { Inject, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { BaseCrudService } from 'src/shared/service/curd-base.service';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService extends BaseCrudService<
  Category,
  CreateCategoryDto,
  UpdateCategoryDto
> {
  constructor(@InjectRepository(Category) repository: Repository<Category>) {
    super();
    this.repository = repository;
  }
}
