import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCategory{
  @IsString()
  @IsNotEmpty()
  readonly name:string
}


export class UpdateCategory extends PartialType(CreateCategory){
  @IsNumber()
  @IsNotEmpty()
  readonly id?:number
}
