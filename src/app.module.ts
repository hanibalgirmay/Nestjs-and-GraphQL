import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
    }),
    LessonModule,
    TypeOrmModule.forRoot({
      type:'mongodb',
      url: 'mongodb://localhost/School',
      useUnifiedTopology: true,
      entities:[Lesson, Student]
    }),
    StudentModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
