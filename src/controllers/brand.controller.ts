import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { BrandService } from 'src/services/brand.service';

@Controller('brand')
export class BrandController {
  constructor(private brandService:BrandService){}
    //staticos
    @Get("")
    getBrand() {
      return this.brandService.getBrands()
    }
  //dinamicos
  @Get(":id")
  getBrandxId(@Param('id',ParseIntPipe) id:number) {
    return this.brandService.findOne(id)}

  @Post("create")
  create(@Body() payload:any){
    return this.brandService.create(payload)
  }

  @Put("update/:id")
  update(@Param('id',ParseIntPipe) id:number,@Body() payload:any){
    return this.brandService.update(payload)
  }


  @Delete("Delete/:id")
  delete(@Param('id',ParseIntPipe) id:number){
    return this.brandService.delete(id)
  }
}
