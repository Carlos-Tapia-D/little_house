import { PartialType } from "@nestjs/mapped-types"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateUser{
  @IsString()
  @IsNotEmpty()
  name:string
  @IsString()
  @IsNotEmpty()
  mail:string
  @IsString()
  @IsNotEmpty()
  password:string
  @IsString()
  @IsNotEmpty()
  role:string

}

export class UpdateUser extends PartialType(CreateUser){
  @IsNumber()
  @IsNotEmpty()
  readonly id?:number
}
