import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { ITask, STATUS } from 'src/shared/interface/task.interface';

export class CreateTaskDto
  implements Omit<ITask, 'id' | 'category' | 'tags' | 'user'>
{
  @ApiProperty()
  @IsNumber()
  categoryId: number;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  status: STATUS;

  @ApiProperty()
  tagIds: number[];

  @ApiProperty()
  @IsNumber()
  userId: number;
}
