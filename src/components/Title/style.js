import styled from "styled-components";
import { textStyle } from "styles/utils/testStyle";

export const Title = styled.h1`
  ${({ marginBottom }) => `margin-bottom: ${marginBottom}`};

  ${textStyle(34)}
  font-weight: 700;
  white-space: pre-line;

  text-align: center;
`;
