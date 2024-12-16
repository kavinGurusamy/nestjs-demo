import { ApiResponseProperty } from '@nestjs/swagger';
import { ICategory } from 'src/shared/interface/category.interface';
import { ITask } from 'src/shared/interface/task.interface';
import { Task } from 'src/task-manager-api/task/entities/task.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity()
export class Category implements ICategory {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column()
  isActive: boolean;

  @ApiResponseProperty()
  @Column({ length: '50' })
  name: string;

  @ApiResponseProperty({ type: () => [Task] })
  @OneToMany(() => Task, (task) => task.category, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  tasks: ITask[];

  @ApiResponseProperty()
  @RelationId((category: Category) => category.tasks)
  taskIds: number[];
}
