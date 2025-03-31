import { Course, CourseRepository } from '../repositories/course.repository';

export class GetCoursesUseCase {
  constructor(private courseRepository: CourseRepository) {}

  async execute(): Promise<Course[]> {
    return await this.courseRepository.getAllCourses();
  }
}
