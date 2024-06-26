import { Module } from '@nestjs/common';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandController } from './controllers/brand.controller';
import { ProductsService } from './services/products.service';
import { BrandService } from './services/brand.service';
import { CategoryService } from './services/category.service';

@Module({
  imports: [ProductsModule],
  controllers: [ ProductsController, CategoriesController, BrandController],
  providers:  [ProductsService, BrandService, CategoryService],
  exports:[ProductsService]
})
export class ProductsModule {}
