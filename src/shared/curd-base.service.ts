import { Injectable } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class BaseCrudService<T, CreateDto extends DeepPartial<T>, UpdateDto> {
  repository: Repository<T>;

  // Create
  async create(createDto: CreateDto): Promise<T> {
    return this.repository.save(createDto);
  }

  // Read All
  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  // Read One
  async findOne(id: number): Promise<T | undefined> {
    return this.repository.findOne({ where: { id } as any });
  }

  // Update
  async update(id: number, updateDto: UpdateDto): Promise<T | undefined> {
    await this.repository.update(id, updateDto as any);
    return this.repository.findOne({ where: { id } as any });
  }

  // Delete
  async remove(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected > 0;
  }
}
