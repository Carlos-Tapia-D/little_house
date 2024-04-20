import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/controllers/products.controller';
import { CategoriesController } from './products/controllers/categories.controller';
import { BrandController } from './products/controllers/brand.controller';
import { ProductsService } from './products/services/products.service';
import { BrandService } from './products/services/brand.service';
import { CategoryService } from './products/services/category.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, ProductsModule],
  controllers: [AppController, ProductsController, CategoriesController, BrandController],
  providers: [AppService, ProductsService, BrandService, CategoryService],
})
export class AppModule {}
