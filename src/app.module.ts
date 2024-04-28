import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
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

const API_KEY_EXAMPLE = "secreto"
const API_KEY_EXAMPLE_PROD = "secretoprod"
@Module({
  imports: [HttpModule,UsersModule, ProductsModule],
  controllers: [AppController, ProductsController, CategoriesController, BrandController],
  providers: [
    AppService,
    ProductsService,
    BrandService,
    CategoryService,
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === "prod" ? API_KEY_EXAMPLE_PROD : API_KEY_EXAMPLE
    },
    {
      provide: 'TASKS', useFactory: async (http: HttpService) => {
        const request = http.get("https://jsonplaceholder.typicode.com/todos")
        const tasks =await lastValueFrom(request)
        return tasks.data;

      }, inject:[HttpService]}],
})
export class AppModule { }
