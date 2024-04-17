import { Body, Controller, Delete, Get, Param, Post, Put, Query,HttpCode,HttpStatus } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //staticos
  @Get()
  getProducto(): string {
    return `Gracias por buscar el producto`
  }
//dinamicos
@Get(":id")
getProductoToId(@Param('id') id: string) {
  return {
    message:"buscando productos..."
  };
}
  @Get("findProduct")
  findProduct(
    @Query(`limit`) limit: number=100,
    @Query(`offset`) offset: number=0,
    @Query(`brand`) brand: string) {

    return `limit=> ${limit} offset=> ${offset} brand=> ${brand}`

  }

  @Post("create")
  @HttpCode(HttpStatus.ACCEPTED)
  create(@Body()payload:any){
    return{
      message:"Accion de crear",
      payload:payload
    };
  }
  @Put("update/:id")
  update(@Param("id") id:number,@Body() payload:any){

    return{
      message:"Actualizando producto",
      payload:payload
    }
  }

  @Delete("delete/:id")
  delete(@Param("id") id:number){

    return{
      message:"Eliminando el producto"
    }
  }
}
