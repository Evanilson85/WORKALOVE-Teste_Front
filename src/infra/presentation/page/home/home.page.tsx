import { useHomeModel } from './home.model';
import { Home } from './home.view';

export const HomePage = () => {
  const props = useHomeModel();

  return <Home {...props} />;
};
