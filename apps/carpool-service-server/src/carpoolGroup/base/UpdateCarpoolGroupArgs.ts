/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CarpoolGroupWhereUniqueInput } from "./CarpoolGroupWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CarpoolGroupUpdateInput } from "./CarpoolGroupUpdateInput";

@ArgsType()
class UpdateCarpoolGroupArgs {
  @ApiProperty({
    required: true,
    type: () => CarpoolGroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CarpoolGroupWhereUniqueInput)
  @Field(() => CarpoolGroupWhereUniqueInput, { nullable: false })
  where!: CarpoolGroupWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CarpoolGroupUpdateInput,
  })
  @ValidateNested()
  @Type(() => CarpoolGroupUpdateInput)
  @Field(() => CarpoolGroupUpdateInput, { nullable: false })
  data!: CarpoolGroupUpdateInput;
}

export { UpdateCarpoolGroupArgs as UpdateCarpoolGroupArgs };