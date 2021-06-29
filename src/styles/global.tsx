import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import { theme } from '.';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}

        body {
          font-family: 'Raleway', sans-serif;
        }

        a:hover {
          color: ${theme.colors.chestnut};
        }
      `}
    />
  );
};
