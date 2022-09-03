import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    colors: {
      bgMain: string;
      textMain: string;
      textOffset: string;
      hover: string;
    };
  }
}
