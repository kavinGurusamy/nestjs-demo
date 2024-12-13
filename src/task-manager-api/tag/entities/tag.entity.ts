import { ApiResponseProperty } from '@nestjs/swagger';
import { ITag } from 'src/shared/interface/tag.interface';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tag implements ITag {
  @ApiResponseProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty()
  @Column({ length: 50 })
  name: string;
}
