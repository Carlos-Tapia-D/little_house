import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrand, UpdateBrand } from 'src/dtos/brand.dtos';
import { Brand } from 'src/entities/Brand.entity';

@Injectable()
export class BrandService {

private brands:Brand[]=[
  {id:1,name:"FUT"},
  {id:2,name:"Zote"},
  {id:3,name:"SAMSUNG"}
]
//este counter es para practicar esta muy mal optimizado
// private counter=this.products.reduce((max,user)=>{
//   return user.id > max ? user.id : max
// },this.products[0].id)
private counter=this.brands[this.brands.length-1].id
getBrands(){
  return this.brands
}
findOne(id:number){
  const product= this.brands.find(x=>x.id===id)
  if(!product){
    throw new NotFoundException(`brands ${id} no found`)
  }else{
    return  this.brands.find(x=>x.id===id)
  }
}
findXName(name:string){
  return this.brands.find(x=>x.name===name)
}
create(payLoad:CreateBrand){
  this.counter=this.counter+1
  const newProduct={
    id:this.counter,
    ...payLoad
  }
  this.brands.push(newProduct)
}

update(payLoad:UpdateBrand){
  const product=this.findOne(payLoad.id)
  if(product){
    const index=this.brands.findIndex(item=> item.id==payLoad.id)
    this.brands[index]={...product,...payLoad}
    return this.brands[index]
  }else return null
}

delete(id:number){

  const index=this.brands.findIndex(x=>x.id==id)
  if(index===-1){
    throw new NotFoundException(`brand ${id} no found`)
  }else{
    this.brands.splice(index,1)
  }
  return true
}
}
