import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CreateCustomer, UpdateCustomer } from '../dtos/customers.dtos';

@Controller('customers')
export class CustomersController {
  constructor(private userService:CustomerService){}
  @Get()
  getAll(){
    return ""
  }
  @Get(":id")
  getFindOne(@Param("id",ParseIntPipe) id:number){
    return""
  }

  @Post("create")
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body()payload:CreateCustomer){
    return ""
  }

  @Put("update/:id")
  update(@Param("id",ParseIntPipe)id:number,@Body()payload:UpdateCustomer){
    return{}
  }
  @Delete("delete/:id")
  delete(@Param("id") id:number){
    return ""
  }
}
