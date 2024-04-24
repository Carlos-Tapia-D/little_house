import { Body, Controller, Delete, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Get } from '@nestjs/common';
import { CreateUser, UpdateUser } from '../dtos/user.dtos';
@Controller('user')
export class UserController {
  constructor(private userService:UserService){}
  @Get()
  getAll(){
    return this.userService.getAll()
  }
  @Get(":id")
  getFindOne(@Param("id",ParseIntPipe) id:number){
    return this.userService.findOne(id)
  }

  @Post("create")
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body()payload:CreateUser){
    return this.userService.create(payload)
  }

  @Put("update")
  update(@Body()payload:UpdateUser){
    return this.userService.update(payload)
  }
  @Delete("delete/:id")
  delete(@Param("id") id:number){
    return this.userService.delete(id)
  }
}
