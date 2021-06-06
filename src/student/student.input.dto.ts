import { IsNotEmpty, MinLength } from "class-validator"
import { Field, InputType } from "@nestjs/graphql"

@InputType()
export class StudentDtoInput {
    @IsNotEmpty()
    @MinLength(3)
    @Field()
    firstName:string

    @Field()
    @IsNotEmpty()
    lastName:string
}