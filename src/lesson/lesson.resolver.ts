import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { LessonInput } from './lesson.input';
import { AssignStudent } from './assign-student-to-lesson';

@Resolver(of => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query(returns => LessonType)
  lesson(@Args('id') id: string) {
    // return {
    return this.lessonService.getService(id);
    // };
  }

  @Query(returns => [LessonType])
  getLessons() {
    return this.lessonService.getLessons();
  }

  @Mutation(returns => LessonType)
  createLesson(@Args('createLessonInput') lessonInput: LessonInput) {
    return this.lessonService.createLesson(lessonInput);
  }

  @Mutation(returns => LessonType)
  assignStudents(
    @Args('assignStudent') assignStudent: AssignStudent,
  ){
    const { lessonId, studentsIds} = assignStudent;
    return this.lessonService.assignStudentsToLesson(lessonId,studentsIds)
  }
}
