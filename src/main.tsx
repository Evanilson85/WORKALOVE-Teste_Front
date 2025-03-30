import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { HomePage } from './infra/presentation/page/home/home.page.tsx';
import { GlobalStyle } from './infra/presentation/styles/styles.ts';
import theme from './infra/theme/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={{ theme }}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  </StrictMode>
);
