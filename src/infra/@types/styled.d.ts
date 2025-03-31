import 'styled-components';
import { ThemeType } from '../presentation/theme/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
