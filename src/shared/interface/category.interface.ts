import { IEntityRelationShipId } from './entity-relationship.interface';
import { ITask } from './task.interface';

export interface ICategory {
  id: number;
  name: string;
  isActive: boolean;
}
