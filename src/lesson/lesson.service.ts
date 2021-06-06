import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { LessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
  ) {}

  async createLesson(lessonInput: LessonInput): Promise<Lesson> {
    const { name, startDate, endDate } = lessonInput;

    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
      students: [],
    });

    return this.lessonRepository.save(lesson);
  }

  async assignStudentsToLesson(
    lessonId: string,
    studentsIds: string[],
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOne({ id:lessonId });
    lesson.students = [...lesson.students, ...studentsIds];

    return this.lessonRepository.save(lesson);
  }

  async getLessons(): Promise<Lesson[]> {
    return this.lessonRepository.find();
  }

  async getService(id): Promise<Lesson> {
    return await this.lessonRepository.findOne({ id });
  }
}
