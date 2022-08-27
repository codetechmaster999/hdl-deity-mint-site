import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = {
    bgDark: '#1e1e1e',
    textWhite: '#ffffff',
  };

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
