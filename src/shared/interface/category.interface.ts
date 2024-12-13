import { ITask } from './task.interface';

export interface ICategory {
  id: number;
  name: string;
  isActive: boolean;
  tasks: ITask[];
  taskIds: number[];
}
