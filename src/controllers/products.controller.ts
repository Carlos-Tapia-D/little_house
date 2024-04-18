import { Body, Controller, Delete, Get, Param, Post, Put, Query,HttpCode,HttpStatus } from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';
@Controller('products')
export class ProductsController {
  constructor(private productsServices:ProductsService){}
  //staticos
  @Get()
  getProducto() {
    return{
    message:"buscando productos....",
    products:this.productsServices.getProducts()
  };
  }
//dinamicos
@Get(":id")
getProductoToId(@Param('id') id: number) {
  return {
    message:"buscando productos...",
    products:this.productsServices.findOne(id)
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
      payload:this.productsServices.create(payload)
    };
  }
  @Put("update/:id")
  update(@Param("id") id:number,@Body() payload:any){

    return{
      message:"Actualizando producto",
      payload:this.productsServices.update(payload)
    }
  }

  @Delete("delete/:id")
  delete(@Param("id") id:number){

    return{
      message:"Eliminando el producto",
      product:this.productsServices.delete(id)
    }
  }
}
