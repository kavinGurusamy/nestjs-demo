import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { BaseCrudService } from 'src/shared/curd-base.service';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService extends BaseCrudService<
  Task,
  CreateTaskDto,
  UpdateTaskDto
> {
  constructor(@InjectRepository(Task) repository: Repository<Task>) {
    super();
    this.repository = repository;
  }
}
