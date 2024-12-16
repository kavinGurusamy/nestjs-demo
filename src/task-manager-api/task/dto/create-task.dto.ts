import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { ICreateTaskDto } from 'src/shared/interface/category.interface';
import { IEntityRelationShipId } from 'src/shared/interface/entity-relationship.interface';
import { ITask, STATUS } from 'src/shared/interface/task.interface';

export class CreateTaskDto implements ICreateTaskDto {
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
  tags: IEntityRelationShipId[];

  @ApiProperty()
  user: IEntityRelationShipId;
}
