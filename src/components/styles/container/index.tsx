import styled from '@emotion/styled';

import { md, lg, xl } from '../../../styles';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 540px;
  display: flex;
  flex-direction: column;

  ${md} {
    max-width: 720px;
  }

  ${lg} {
    max-width: 960px;
  }

  ${xl} {
    max-width: 1140px;
  }
`;
