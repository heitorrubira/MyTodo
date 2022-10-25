import 'styled-components';

type Pallete = {
  dark: string;
  light: string;
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    gutter: number;
    borderRadius: number;
    space: number;
    palette: {
      background: {
        default: string;
        paper: string;
      };
      common: {
        black: string;
        white: string;
        hover: string;
      };
      primary: Pallete;
      secondary: Pallete;
    };
    shadow: string;
  }
}
