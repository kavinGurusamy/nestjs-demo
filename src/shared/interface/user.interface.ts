import { ITask } from './task.interface';

export enum Role {
  USER = 1,
  TESTER = 2,
  ADMIN = 3,
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
  role: Role;
}
