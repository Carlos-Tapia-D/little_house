import { Injectable } from '@nestjs/common';
import { Producto } from 'src/entities/Product.entity';

@Injectable()
export class ProductsService {
private products:Producto[]=[
  {id:1,name:"bacardi",description:"algo raro",stock:1,price:10,image:""},
  {id:2,name:"Zote",description:"algo raro",stock:1,price:10,image:""},
  {id:1,name:"Salchicha",description:"algo raro",stock:1,price:10,image:""}
]
aaa
}
