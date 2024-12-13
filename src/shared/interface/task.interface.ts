import { ICategory } from './category.interface';
import { ITag } from './tag.interface';
import { IUser } from './user.interface';

export interface ITask {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
  status: STATUS;
  category: ICategory;
  categoryId: number;
  user: IUser;
  userId: number;
  tags: ITag[];
  tagIds: number[];
}

export enum STATUS {
  TODO = 0,
  INPROGRESS = 1,
  INREVIEW = 2,
  DONE = 3,
}
