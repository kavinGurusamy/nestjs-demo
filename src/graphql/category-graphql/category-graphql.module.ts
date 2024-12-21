import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/task-manager-api/category/category.module';
import { CategoryResolver } from '../resolver/category.resolver';

@Module({
  controllers: [],
  providers: [CategoryResolver],
  imports: [CategoryModule],
})
export class CategoryGraphQLModule {}
