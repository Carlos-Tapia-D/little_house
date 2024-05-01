import { Module } from '@nestjs/common';
import { HttpModule, HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/controllers/products.controller';
import { CategoriesController } from './products/controllers/categories.controller';
import { BrandController } from './products/controllers/brand.controller';
import { ProductsService } from './products/services/products.service';
import { BrandService } from './products/services/brand.service';
import { CategoryService } from './products/services/category.service';
import { UsersModule } from './users/users.module';
import { enviroments } from './enviroments';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import config from './config';

@Module({
  imports: [HttpModule,
    UsersModule,
    ProductsModule,
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),

      })
    })],
  controllers: [AppController, ProductsController, CategoriesController, BrandController],
  providers: [
    AppService,
    ProductsService,
    BrandService,
    CategoryService,
    {
      provide: 'TASKS', useFactory: async (http: HttpService) => {
        console.log(enviroments[process.env.NODE_ENV])
        const request = http.get("https://jsonplaceholder.typicode.com/todos")
        const tasks = await lastValueFrom(request)
        return tasks.data;

      }, inject: [HttpService]
    }],
})
export class AppModule { }
