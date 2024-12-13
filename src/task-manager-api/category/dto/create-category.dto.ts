import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { ICategory } from 'src/shared/interface/category.interface';

export class CreateCategoryDto implements Omit<ICategory, 'id' | 'tasks'> {
  @ApiProperty()
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    description: 'should have length minimum of three and maximum of 50',
  })
  @IsString()
  name: string;

  @ApiProperty()
  taskIds: number[];
}
