import { ApiResponseProperty } from '@nestjs/swagger';
import { ITask } from 'src/shared/interface/task.interface';
import { IUser, Role } from 'src/shared/interface/user.interface';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email'])
export class User implements IUser {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column()
  email: string;

  @ApiResponseProperty()
  @Column()
  isActive: boolean;

  @ApiResponseProperty()
  @Column({ length: 50 })
  name: string;

  @ApiResponseProperty()
  @Column({ enum: Role })
  role: Role;
}
