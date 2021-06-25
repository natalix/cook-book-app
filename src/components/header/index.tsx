import React from "react";
import styled from '@emotion/styled';

import { md, lg } from '../../styles';

import { Favourites } from '../favourites'
import { ShoppingList } from '../shopping-list'
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
`
const ImgWrapper = styled.div`
  flex-basis: 80%;
`

const IconWrapper = styled.div`
  flex-basis: 10%;
  display: flex;
  justify-content: flex-end;
`

function Header() {
  return (
    <HeaderTag>
        <ImgWrapper><img src={Logo} alt="Cookbook-App"/></ImgWrapper>
        <IconWrapper><ShoppingList/></IconWrapper>
        <IconWrapper><Favourites/></IconWrapper>
    </HeaderTag>
  );
};

export { Header };
