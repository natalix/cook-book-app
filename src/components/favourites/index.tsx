import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { BsHeart, BsTrash } from 'react-icons/bs';
import { VscClose } from 'react-icons/vsc';
import { Favourites as Fav } from '../../types';

import { FavouriteContext } from '../contexts/FavouriteContext';

type FavType = {
  favourites: Fav;
  removeFromFavourites;
};

const FavouriteWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: relative;
  cursor: pointer;

  svg {
    font-size: 24px;
  }

  span {
    position: absolute;
    top: -12px;
    right: -14px;
    font-size: 20px;
    color: ${(props) => props.theme.colors.chestnut};
  }
`;

const ListWrapper = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.concrete};
  padding: 0 20px;
  top: 30px;
  right: 0;

  svg {
    cursor: pointer;
    align-self: flex-end;
    margin: 10px -10px 0 -10px;
    font-size: 20px;

    &:hover {
      svg {
        fill: ${(props) => props.theme.colors.chestnutLight};
      }
    }
  }
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    &:visited {
      color: ${(props) => props.theme.colors.black};
    }

    &:hover {
      border-left: 7px solid ${(props) => props.theme.colors.chestnutLight};
      margin-left: -7px;
    }
  }

  h3 {
    font-size: 16px;
    min-width: 100px;
    margin: 0 10px;
    text-align: left;
  }

  img {
    width: 100px;
    height: auto;
  }

  button {
    cursor: pointer;
    border: none;
    height: 50px;
    width: 30px;

    &:hover {
      svg {
        fill: ${(props) => props.theme.colors.chestnutLight};
      }
    }
  }
`;

export const Favourites = () => {
  const { favourites, removeFromFavourites } = useContext(
    FavouriteContext
  ) as FavType;

  const [isVisible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };

  return (
    <FavouriteWrapper onClick={toggle}>
      <IconWrapper>
        <BsHeart />
        <span>{favourites.length}</span>
      </IconWrapper>
      {isVisible ? (
        <ListWrapper>
          <VscClose />
          {favourites.map(({ title, id, image }) => (
            <ListItem key={id}>
              <NavLink to={`/recipe/${id}`}>
                <img src={image} alt={title} />
                <h3>{title}</h3>
              </NavLink>
              <button type="button" onClick={() => removeFromFavourites(id)}>
                <BsTrash />
              </button>
            </ListItem>
          ))}
        </ListWrapper>
      ) : null}
    </FavouriteWrapper>
  );
};
