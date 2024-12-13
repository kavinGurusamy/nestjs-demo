import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { BaseCrudService } from 'src/shared/curd-base.service';
import { Tag } from './entities/tag.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagService extends BaseCrudService<
  Tag,
  CreateTagDto,
  UpdateTagDto
> {
  constructor(@InjectRepository(Tag) repository: Repository<Tag>) {
    super();
    this.repository = repository;
  }
}
