export interface Course {
  id: string;
  name: string;
}

export interface CourseRepository {
  getAllCourses(): Promise<Course[]>;
}
