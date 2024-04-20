import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBrand{
  @IsString()
  @IsNotEmpty()
  readonly name:string
}

export class UpdateBrand extends PartialType(CreateBrand){
  @IsNumber()
  @IsNotEmpty()
  readonly id?:number
}
