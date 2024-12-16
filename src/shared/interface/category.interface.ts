import { IEntityRelationShipId } from './entity-relationship.interface';
import { ITask } from './task.interface';

export interface ICategory {
  id: number;
  name: string;
  isActive: boolean;
  tasks: ITask[];
  taskIds: number[];
}

export interface ICreateTaskDto
  extends Omit<
    ITask,
    'id' | 'category' | 'tags' | 'user' | 'tagIds' | 'userId'
  > {
  tagIds: IEntityRelationShipId[];

  userId: IEntityRelationShipId;
}
