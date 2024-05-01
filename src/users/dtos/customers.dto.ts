import { PartialType } from "@nestjs/mapped-types"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCustomer{
  @IsString()
  @IsNotEmpty()
  name:string
  @IsString()
  @IsNotEmpty()
  lastName:string
  @IsString()
  @IsNotEmpty()
  phone:string
}

export class UpdateCustomer extends PartialType(CreateCustomer){
  @IsNumber()
  @IsNotEmpty()
  readonly id?:number
}
