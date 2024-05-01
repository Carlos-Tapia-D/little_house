import { Injectable, NotFoundException } from '@nestjs/common';
import { Customers } from '../entities/Customers.entity';
import { CreateCustomer, UpdateCustomer } from '../dtos/customers.dto';

@Injectable()
export class CustomerService {

    private customers:Customers[]=[
        {id:1,name:"root",lastName:"a",phone:"123"},
        {id:2,name:"admin",lastName:"c",phone:"123"},
        {id:3,name:"Luffy",lastName:"c",phone:"123"},
        {id:4,name:"Nami",lastName:"s",phone:"123"},
        {id:5,name:"Tony",lastName:"a",phone:"123"},
      ]
      private counter=this.customers[this.customers.length-1].id
      getAll(){
        return this.customers
      }
    
      findOne(id:number){
        return this.customers.find(x=>x.id===id)
      }
      
      create(payload:CreateCustomer){
        this.counter=this.counter + 1
        const newCustomer={id:this.counter,...payload}
        this.customers.push(newCustomer)
        return {message:"se creo el customer",
          user:newCustomer
        }
      }
    
      update(payLoad:UpdateCustomer){
        const updateCustomer=this.findOne(payLoad.id)
        if(updateCustomer){
    
          const index=this.customers.findIndex(x=>x.id==payLoad.id)
          this.customers[index]={...updateCustomer,...payLoad}
          return this.customers[index]
    
        }else return null
      }
      delete(id:number){
        const index=this.customers.findIndex(x=>x.id==id)
        if(index===-1){
          throw new NotFoundException(`customer ${id} no found`)
        }else{
          this.customers.splice(index,1)
        }
        return true
      }
}
