import { InputType, Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

@InputType()
export class AssignStudent {
  @Field(type => [ID])
  @IsUUID('4', {each:true})
  studentsIds: string[];

  @IsUUID()
  @Field(type => ID)
  lessonId: string;
}
