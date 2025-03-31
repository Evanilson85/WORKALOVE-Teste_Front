import { Course } from '../../../../domain/repositories/course.repository';

interface CourseResponseApi {
  _id: string;
  nome_grau: string;
}

export class MappersCourse {
  static toDomain(course: CourseResponseApi): Course {
    return {
      id: course._id,
      name: course.nome_grau,
    };
  }
}
