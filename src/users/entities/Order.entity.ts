import { Product } from "src/products/entities/Product.entity"
import { User } from "./User.entity"

export class Order{
  id:number
  date:Date
  user:User
  products:Product[]

}
