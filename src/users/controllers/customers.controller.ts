import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CustomerService } from '../services/customer.service';
import { CreateCustomer, UpdateCustomer } from '../dtos/customers.dtos';

@Controller('customers')
export class CustomersController {
  constructor(private customerService:CustomerService){}
  @Get()
  getAll(){
    return this.customerService.getAll()
  }
  @Get(":id")
  getFindOne(@Param("id",ParseIntPipe) id:number){
    return this.customerService.findOne(id)
  }

  @Post("create")
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body()payload:CreateCustomer){
    return this.customerService.create(payload)
  }

  @Put("update")
  update(@Body()payload:UpdateCustomer){
    return this.customerService.update(payload)
  }
  @Delete("delete/:id")
  delete(@Param("id") id:number){
    return this.customerService.delete(id)
  }
}
