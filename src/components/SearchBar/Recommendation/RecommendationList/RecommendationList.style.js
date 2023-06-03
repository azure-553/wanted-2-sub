import styled from "styled-components";
import { flex, textStyle } from "styles/utils";
import { recommendationSizes } from "../Recommendation.contants";
import { colors } from "styles/constants/color";
import { AiOutlineSearch } from "react-icons/ai";

export const List = styled.ul`
  ${flex.column()}
`;

export const Button = styled.button`
  ${flex({ alignItems: "center" })}
  gap: 8px;

  width: 100%;

  padding: 4px ${recommendationSizes.paddingX}px;
  ${textStyle(16)}

  ${({ isActive }) => isActive && `background-color: ${colors.grayLight}`}
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 18px;
`;
