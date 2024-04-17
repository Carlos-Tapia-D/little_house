import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //staticos
  //dinamicos
  @Get(":id")
  getProductoCategorie(@Param('id') id:number) {
    return {
      message:`estas son tus categorias ${id}`
    }
  }
  @Post("create")
  create(@Body() payload:any){
    return{
      message:`Creando categoria`,
      payload:payload
    }
  }

  @Put("update/:id")
  update(@Param('id') id:number,@Body() payload:any){
    return{
      message:`Actualizando categoria ${id}`,
      payload:payload
    }
  }


  @Delete("Delete/:id")
  delete(@Param('id') id:number){
    return{
      message:`Eliminando categoria ${id}`,
    }
  }


}

