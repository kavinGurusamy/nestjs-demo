import { CategoryService } from 'src/task-manager-api/category/category.service';
import { Category } from '../models/category.model';
import { Args, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => Category)
  async author(@Args('id', { type: () => Int }) id: number) {
    return this.categoryService.findOne(id);
  }
}
