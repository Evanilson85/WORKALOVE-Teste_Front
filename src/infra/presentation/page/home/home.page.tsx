import { GetCityUseCase } from '../../../../domain/use-cases/get-city.usecases';
import { GetCoursesUseCase } from '../../../../domain/use-cases/get-courses.usecases';
import { GetStateUseCase } from '../../../../domain/use-cases/get-state.usecases';
import { AxiosCityRepository } from '../../../http/repository/axios-city.repository';
import { AxiosCourseRepository } from '../../../http/repository/axios-course.repository';
import { AxiosStateRepository } from '../../../http/repository/axios-state.repository';
import { useHomeModel } from './home.model';
import { Home } from './home.view';

export const HomePage = () => {
  const repository_course = new AxiosCourseRepository();
  const repository_state = new AxiosStateRepository();
  const repository_city = new AxiosCityRepository();

  const getCoursesUseCase = new GetCoursesUseCase(repository_course);
  const getStateUseCase = new GetStateUseCase(repository_state);
  const getCityUseCase = new GetCityUseCase(repository_city);

  const props = useHomeModel({
    coursesUseCase: getCoursesUseCase,
    stateUseCase: getStateUseCase,
    cityUseCase: getCityUseCase,
  });

  return <Home {...props} />;
};
