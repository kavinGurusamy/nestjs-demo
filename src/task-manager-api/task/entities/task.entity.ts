import { ApiResponseProperty } from '@nestjs/swagger';
import { ICategory } from 'src/shared/interface/category.interface';
import { ITag } from 'src/shared/interface/tag.interface';
import { ITask, STATUS } from 'src/shared/interface/task.interface';
import { IUser } from 'src/shared/interface/user.interface';
import { Category } from 'src/task-manager-api/category/entities/category.entity';
import { Tag } from 'src/task-manager-api/tag/entities/tag.entity';
import { User } from 'src/task-manager-api/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity()
export class Task implements ITask {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ length: 50 })
  description: string;

  @ApiResponseProperty()
  @Column()
  isActive: boolean;

  @ApiResponseProperty()
  @Column({ length: 50 })
  name: string;

  @ApiResponseProperty({ enum: STATUS })
  @Column({ enum: STATUS })
  status: number;

  @ApiResponseProperty({ type: () => Category })
  @ManyToOne(() => Category, (category) => category.tasks, {
    onDelete: 'CASCADE',
    orphanedRowAction: 'delete',
  })
  @JoinColumn({ name: 'category_id', referencedColumnName: 'id' })
  category: Category;

  @ApiResponseProperty()
  @RelationId((task: Task) => task.category)
  categoryId: number;

  @ApiResponseProperty({ type: Tag })
  @ManyToMany(() => Tag, { cascade: false })
  @JoinTable({
    name: 'task_tags',
    joinColumn: { name: 'task_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: ITag[];

  @ApiResponseProperty()
  @RelationId((task: Task) => task.tags)
  tagIds: number[];

  @ApiResponseProperty({ type: () => User })
  @ManyToOne(() => User, {
    cascade: false,
  })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: IUser;

  @ApiResponseProperty()
  @RelationId((task: Task) => task.user)
  userId: number;
}
