import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      chestnut: string;
      chestnutLight: string;
      concrete: string;
      black: string;
      white: string;
    };
    transitions: string;
  }
}
