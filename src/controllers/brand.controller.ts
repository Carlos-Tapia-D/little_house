import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

@Controller('brand')
export class BrandController {
    //staticos
  //dinamicos
  @Get(":id")
  getProductoCategorie(@Param('id',ParseIntPipe) id:number) {
    return {
      message:`estas son tus brand ${id}`
    }
  }
  @Post("create")
  create(@Body() payload:any){
    return{
      message:`Creando brand`,
      payload:payload
    }
  }

  @Put("update/:id")
  update(@Param('id',ParseIntPipe) id:number,@Body() payload:any){
    return{
      message:`Actualizando brand ${id}`,
      payload:payload
    }
  }


  @Delete("Delete/:id")
  delete(@Param('id',ParseIntPipe) id:number){
    return{
      message:`Eliminando brand ${id}`,
    }
  }
}
