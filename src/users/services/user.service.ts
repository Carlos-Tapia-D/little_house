import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../entities/User.entity';
import { CreateUser, UpdateUser } from '../dtos/user.dtos';
import { Order } from '../entities/Order.entity';
import { ProductsService } from 'src/products/services/products.service';
@Injectable()
export class UserService {
  constructor(private  productService:ProductsService){}
  private users:User[]=[
    {id:1,name:"root",mail:"root@root.com",password:"123",role:"admin"},
    {id:2,name:"admin",mail:"admin@admin.com",password:"123",role:"admin"},
    {id:3,name:"Luffy",mail:"luffy@example.com",password:"123",role:"customer"},
    {id:4,name:"Nami",mail:"nami@example.com",password:"123",role:"customer"},
    {id:5,name:"Tony",mail:"chopper@example.com",password:"123",role:"customer"},
  ]
  private counter=this.users[this.users.length-1].id
  getAll(){
    return this.users
  }

  findOne(id:number){
    return this.users.find(x=>x.id===id)
  }
  
  create(payload:CreateUser){
    this.counter=this.counter + 1
    const newUser={id:this.counter,...payload}
    this.users.push(newUser)
    return {message:"se creo",
      user:newUser
    }
  }

  update(payLoad:UpdateUser){
    const updateUser=this.findOne(payLoad.id)
    if(updateUser){

      const index=this.users.findIndex(x=>x.id==payLoad.id)
      this.users[index]={...updateUser,...payLoad}
      return this.users[index]

    }else return null
  }
  delete(id:number){
    const index=this.users.findIndex(x=>x.id==id)
    if(index===-1){
      throw new NotFoundException(`User ${id} no found`)
    }else{
      this.users.splice(index,1)
    }
    return true
  }
  getOrdersByUser(id:number){
    const user = this.findOne(id)
    return {
      id:1,
  date:new Date(),
  user:user,
  products:this.productService.getProducts(),
    }

  }
}
