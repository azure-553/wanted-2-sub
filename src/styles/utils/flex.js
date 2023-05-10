import { css } from "styled-components";

const flex = (props = {}) => {
  return css`
    display: ${props.display ?? "flex"};
    flex-direction: ${props.direction ?? "row"};
    align-items: ${props.alignItems ?? "stretch"};
    justify-content: ${props.justifyContent ?? "flex-start"};
  `;
};

const center = (props = {}) => css`
  ${flex({ alignItems: "center", justifyContent: "center", ...props })}
`;

const column = (props = {}) => css`
  ${flex({ direction: "column", ...props })}
`;

flex.center = center;
flex.column = column;
export { flex };
