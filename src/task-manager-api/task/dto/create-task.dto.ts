import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';
import { IEntityRelationShipId } from 'src/shared/interface/entity-relationship.interface';
import {
  ICreateTaskDto,
  ITask,
  STATUS,
} from 'src/shared/interface/task.interface';

export class CreateTaskDto implements ICreateTaskDto {
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

  @ApiProperty()
  category: IEntityRelationShipId;
}
