import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      bgMain: string;
      textMain: string;
      hover: string;
    };
  }
}
