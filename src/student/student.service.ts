import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentDtoInput } from './student.input.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepo: Repository<Student>,
  ) {}

  async createStudent(studentDto: StudentDtoInput): Promise<Student> {
    const { firstName, lastName } = studentDto;

    const student = await this.studentRepo.create({
      id: uuid(), 
      firstName,
      lastName
    });

    return this.studentRepo.save(student)
  }

  getAllStudent(): Promise<Student[]>{
      return this.studentRepo.find();
  }

  async getStudentByID(id): Promise<Student>{
    return this.studentRepo.findOne({id})
  }
}
