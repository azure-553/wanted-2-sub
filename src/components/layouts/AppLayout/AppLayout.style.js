import styled from "styled-components";
import { APP_MAX_WIDTH } from "styles/constants/dimensions";
import { flex } from "styles/utils";

export const AppLayout = styled.div`
  ${flex({ justifyContent: "center" })}
  min-height: 100vh;

  padding: 16px;
`;

export const Main = styled.main`
  width: 100%;
  max-width: ${APP_MAX_WIDTH}px;
`;
