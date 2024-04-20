import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from 'src/products/dtos/products.dtos';
import { Product } from 'src/products/entities/Product.entity';

@Injectable()
export class ProductsService {

private products:Product[]=[
  {id:1,name:"bacardi",description:"algo raro",stock:1,price:10,image:""},
  {id:2,name:"Zote",description:"algo raro",stock:1,price:10,image:""},
  {id:3,name:"Salchicha",description:"algo raro",stock:1,price:10,image:""}
]
//este counter es para practicar esta muy mal optimizado
// private counter=this.products.reduce((max,user)=>{
//   return user.id > max ? user.id : max
// },this.products[0].id)
private counter=this.products[this.products.length-1].id
getProducts(){
  return this.products
}
findOne(id:number){
  const product= this.products.find(x=>x.id===id)
  if(!product){
    throw new NotFoundException(`Product ${id} no found`)
  }else{
    return  this.products.find(x=>x.id===id)
  }
}
findXName(name:string){
  return this.products.find(x=>x.name===name)
}
create(payLoad:CreateProductDto){
  this.counter=this.counter+1
  const newProduct={
    id:this.counter,
    ...payLoad
  }
  this.products.push(newProduct)
}

update(payLoad:UpdateProductDto){
  const product=this.findOne(payLoad.id)
  if(product){
    const index=this.products.findIndex(item=> item.id==payLoad.id)
    this.products[index]={...product,...payLoad}
    return this.products[index]
  }else return null
}

delete(id:number){

  const index=this.products.findIndex(x=>x.id==id)
  if(index===-1){
    throw new NotFoundException(`Product ${id} no found`)
  }else{
    this.products.splice(index,1)
  }
  return true
}
}


