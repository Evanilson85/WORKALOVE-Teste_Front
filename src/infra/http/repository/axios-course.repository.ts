import { Course, CourseRepository } from '../../../domain/repositories/course.repository';
import { axiosRequest } from '../api/axios';
import { MappersCourse } from './mappers/mappers.course';

const URL = '/api/courses';
export class AxiosCourseRepository implements CourseRepository {
  async getAllCourses(): Promise<Course[]> {
    const { data } = await axiosRequest({ baseUrl: URL }).get('');
    return data.result.records.map(MappersCourse.toDomain);
  }
}
