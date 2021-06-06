import { Resolver, Mutation, Args, Query } from "@nestjs/graphql";
import { StudentType } from "./student.type";
import { StudentService } from "./student.service";
import { StudentDtoInput } from "./student.input.dto";

@Resolver(of => StudentType)
export class StudentResolver {
    constructor(private studentService: StudentService){

    }

    @Mutation(returns => StudentType)
    async addStudent(
        @Args('createStudent') studentDto : StudentDtoInput
    ){
        return this.studentService.createStudent(studentDto)
    }

    @Query(returns => [StudentType])
    getStudent(){
        return this.studentService.getAllStudent()
    }

    @Query(returns => StudentType)
    getStudentbyID(
        @Args('id') id: string
    ){
        return this.studentService.getStudentByID(id)
    }

}