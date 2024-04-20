import { Body, Controller, Delete, Get, Param, Post, Put, Query,HttpCode,HttpStatus } from '@nestjs/common';
import { ProductsService } from 'src/products/services/products.service';
import { ParseIntPipe } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/products/dtos/products.dtos';
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
getProductoToId(@Param('id',ParseIntPipe) id: number) {
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
  create(@Body()payload:CreateProductDto){
    return{
      message:"Accion de crear",
      payload:this.productsServices.create(payload)
    };
  }
  @Put("update/:id")
  update(@Param("id",ParseIntPipe) id:string,@Body() payload:UpdateProductDto){

    return{
      message:"Actualizando producto",
      payload:this.productsServices.update(payload)
    }
  }

  @Delete("delete/:id")
  delete(@Param("id",ParseIntPipe) id:number){

    return{
      message:"Eliminando el producto",
      product:this.productsServices.delete(id)
    }
  }
}
