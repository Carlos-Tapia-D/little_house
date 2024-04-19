import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategory, UpdateCategory } from 'src/dtos/categories.dtos';
import { Category } from 'src/entities/Categori.entity';

@Injectable()
export class CategoryService {

private categories:Category[]=[
  {id:1,name:"FRIO"},
  {id:2,name:"LIMPIEZA"},
  {id:3,name:"ELECTRONICA"}
]

private counter=this.categories[this.categories.length-1].id
getCategories(){
  return this.categories
}
findOne(id:number){
  const product= this.categories.find(x=>x.id===id)
  if(!product){
    throw new NotFoundException(`Product ${id} no found`)
  }else{
    return  this.categories.find(x=>x.id===id)
  }
}
findXName(name:string){
  return this.categories.find(x=>x.name===name)
}
create(payLoad:CreateCategory){
  this.counter=this.counter+1
  const newProduct={
    id:this.counter,
    ...payLoad
  }
  this.categories.push(newProduct)
}

update(payLoad:UpdateCategory){
  const product=this.findOne(payLoad.id)
  if(product){
    const index=this.categories.findIndex(item=> item.id==payLoad.id)
    this.categories[index]={...product,...payLoad}
    return this.categories[index]
  }else return null
}

delete(id:number){

  const index=this.categories.findIndex(x=>x.id==id)
  if(index===-1){
    throw new NotFoundException(`Product ${id} no found`)
  }else{
    this.categories.splice(index,1)
  }
  return true
}
}
