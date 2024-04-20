import { PartialType } from "@nestjs/mapped-types"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCustomer{
  @IsString()
  @IsNotEmpty()
  name:string
  @IsString()
  @IsNotEmpty()
  mail:string
  @IsString()
  @IsNotEmpty()
  password:string
  shoppingList:string
}

export class UpdateCustomer extends PartialType(CreateCustomer){
  @IsNumber()
  @IsNotEmpty()
  readonly id?:number
}
