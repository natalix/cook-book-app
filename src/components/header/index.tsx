import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import { md, lg } from '../../styles';

import { Favourites } from '../favourites';
import Logo from '../../assets/img/logo.png';

const HeaderTag = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 0;

  ${md} {
    padding: 20px 0;
  }

  ${lg} {
    padding: 30px 0;
  }
`;
const ImgWrapper = styled.div`
  flex-basis: 80%;
`;

const IconWrapper = styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: flex-end;
`;

export const Header = () => {
  return (
    <HeaderTag>
      <ImgWrapper>
        <NavLink to="/">
          <img src={Logo} alt="Cookbook-App" />
        </NavLink>
      </ImgWrapper>
      <IconWrapper>
        <Favourites />
      </IconWrapper>
    </HeaderTag>
  );
};
