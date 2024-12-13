import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { ICategory } from 'src/shared/interface/category.interface';

export class CreateTagDto
  implements Omit<ICategory, 'id' | 'tasks' | 'taskIds'>
{
  @ApiProperty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty()
  @IsString()
  name: string;
}
