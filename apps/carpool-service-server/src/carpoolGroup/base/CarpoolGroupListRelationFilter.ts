/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CarpoolGroupWhereInput } from "./CarpoolGroupWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CarpoolGroupListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CarpoolGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => CarpoolGroupWhereInput)
  @IsOptional()
  @Field(() => CarpoolGroupWhereInput, {
    nullable: true,
  })
  every?: CarpoolGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => CarpoolGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => CarpoolGroupWhereInput)
  @IsOptional()
  @Field(() => CarpoolGroupWhereInput, {
    nullable: true,
  })
  some?: CarpoolGroupWhereInput;

  @ApiProperty({
    required: false,
    type: () => CarpoolGroupWhereInput,
  })
  @ValidateNested()
  @Type(() => CarpoolGroupWhereInput)
  @IsOptional()
  @Field(() => CarpoolGroupWhereInput, {
    nullable: true,
  })
  none?: CarpoolGroupWhereInput;
}
export { CarpoolGroupListRelationFilter as CarpoolGroupListRelationFilter };