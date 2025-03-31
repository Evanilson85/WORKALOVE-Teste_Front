import { Course, CourseRepository } from '../../../domain/repositories/course.repository';
import { axiosRequest } from '../api/axios';
import { MappersCourse } from './mappers/mappers.course';

const URL = '/api/courses';
export class AxiosCourseRepository implements CourseRepository {
  async getAllCourses(): Promise<Course[]> {
    const { data } = await axiosRequest({ baseUrl: URL }).get(
      'datastore_search?resource_id=738b884e-e846-4396-8cb3-f3390e00e598&limit=1000'
    );
    return data.result.records.map(MappersCourse.toDomain);
  }
}
