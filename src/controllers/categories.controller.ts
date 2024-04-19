import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CategoryService } from 'src/services/category.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoryServices:CategoryService){}
  //staticos
  @Get("")
  getCategorie() {
    return this.categoryServices.getCategories()
  }
  //dinamicos
  @Get(":id")
  getxId(@Param('id',ParseIntPipe) id:number) {
    return this.categoryServices.findOne(id)
  }
  @Post("create")
  create(@Body() payload:any){
    return this.categoryServices.create(payload)
  }

  @Put("update/:id")
  update(@Param('id',ParseIntPipe) id:number,@Body() payload:any){
    return this.categoryServices.update(payload)
  }

  @Delete("Delete/:id")
  delete(@Param('id',ParseIntPipe) id:number){
    return this.categoryServices.delete(id)
  }


}

