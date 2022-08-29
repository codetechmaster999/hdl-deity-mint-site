import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
