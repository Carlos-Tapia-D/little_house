import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { BrandController } from './controllers/brand.controller';
import { ProductsService } from './services/products.service';
import { BrandService } from './services/brand.service';
import { CategoryService } from './services/category.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, CategoriesController, BrandController],
  providers: [AppService, ProductsService, BrandService, CategoryService],
})
export class AppModule {}
