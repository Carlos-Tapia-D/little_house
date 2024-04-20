import { Body, Controller, Delete, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { Get } from '@nestjs/common';
import { CreateUser, UpdateUser } from '../dtos/user.dtos';
@Controller('user')
export class UserController {
  constructor(private userService:UserService){}
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
  create(@Body()payload:CreateUser){
    return ""
  }

  @Put("update/:id")
  update(@Param("id",ParseIntPipe)id:number,@Body()payload:UpdateUser){
    return{}
  }
  @Delete("delete/:id")
  delete(@Param("id") id:number){
    return ""
  }
}
