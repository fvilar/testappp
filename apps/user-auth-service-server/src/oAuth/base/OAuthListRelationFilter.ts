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
import { OAuthWhereInput } from "./OAuthWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OAuthListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OAuthWhereInput,
  })
  @ValidateNested()
  @Type(() => OAuthWhereInput)
  @IsOptional()
  @Field(() => OAuthWhereInput, {
    nullable: true,
  })
  every?: OAuthWhereInput;

  @ApiProperty({
    required: false,
    type: () => OAuthWhereInput,
  })
  @ValidateNested()
  @Type(() => OAuthWhereInput)
  @IsOptional()
  @Field(() => OAuthWhereInput, {
    nullable: true,
  })
  some?: OAuthWhereInput;

  @ApiProperty({
    required: false,
    type: () => OAuthWhereInput,
  })
  @ValidateNested()
  @Type(() => OAuthWhereInput)
  @IsOptional()
  @Field(() => OAuthWhereInput, {
    nullable: true,
  })
  none?: OAuthWhereInput;
}
export { OAuthListRelationFilter as OAuthListRelationFilter };
