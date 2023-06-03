import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { colors } from "styles/constants/color";
import { flex, position, textStyle } from "styles/utils";
import { searchBarSizes } from "./SearchBar.constant";

export const SearchBar = styled.div`
  ${flex()}
  position: relative;
  height: 50px;
`;

export const Input = styled.input`
  width: 100%;

  padding: ${searchBarSizes.inputPaddingY}px ${searchBarSizes.inputPaddingX}px;
  padding-left: ${searchBarSizes.inputPaddingX + searchBarSizes.icon + 8}px;

  border-radius: ${searchBarSizes.radius}px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  ${textStyle(16)}

  background-color: ${colors.white};
`;

export const Button = styled.button`
  ${flex.center()}
  width: 96px;

  border-radius: ${searchBarSizes.radius}px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${textStyle(16)}
  font-weight: 600;

  color: ${colors.white};

  background-color: ${colors.blue};
`;

export const SearchIcon = styled(AiOutlineSearch)`
  ${position.posCenterY({ left: `${searchBarSizes.inputPaddingX}px` })};

  font-size: ${searchBarSizes.icon}px;
`;
