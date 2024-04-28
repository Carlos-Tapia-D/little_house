import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { CustomersController } from './controllers/customers.controller';
import { CustomerService } from './services/customer.service';
import { UserService } from './services/user.service';
import { ProductsService } from 'src/products/services/products.service';

@Module({
  controllers: [UserController, CustomersController],
  providers: [ UserService, CustomerService,ProductsService]
})
export class UsersModule {}
