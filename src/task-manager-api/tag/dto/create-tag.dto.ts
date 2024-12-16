import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsString } from 'class-validator';
import { ICategory } from 'src/shared/interface/category.interface';
import { ITag } from 'src/shared/interface/tag.interface';

export class CreateTagDto implements Omit<ITag, 'id'> {
  @ApiProperty()
  @IsString()
  name: string;
}
