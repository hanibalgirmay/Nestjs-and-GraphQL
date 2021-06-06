import { InputType, Field } from '@nestjs/graphql';
import { IsEmpty, MinLength, MaxLength, IsDateString, IsNotEmpty } from 'class-validator';

@InputType()
export class LessonInput {
  @Field()
  @MinLength(2)
  name: string;

  @Field()
  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @Field()
  @IsDateString()
  endDate: string;
}
