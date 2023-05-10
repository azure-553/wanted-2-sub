import { css } from "styled-components";

const position = ({ position, top, right, bottom, left, inset }) => {
  return css`
    position: ${position ?? "relative"};
    ${top !== undefined && `top: ${top}`};
    ${right !== undefined && `right: ${right}`};
    ${bottom !== undefined && `bottom: ${bottom}`};
    ${left !== undefined && `left: ${left}`};
    ${inset !== undefined && `inset: ${inset}`};
  `;
};

const absolute = (props) => position({ position: "absolute", ...props });

const fixed = (props) => position({ position: "fixed", ...props });

const sticky = (props) => position({ position: "sticky", ...props });

const posCenter = (type = "absolute") => css`
  ${position({ position: type, top: "50%", left: "50%" })}

  transform: translate(-50%, -50%);
`;

const posCenterX = (type = "absolute") => css`
  ${position({ position: type, left: "50%" })}

  transform: translateX(-50%);
`;

const posCenterY = (props, type = "absolute") => css`
  ${position({ position: type, top: "50%", ...props })}

  transform: translateY(-50%);
`;

position.absolute = absolute;
position.fixed = fixed;
position.sticky = sticky;
position.posCenter = posCenter;
position.posCenterX = posCenterX;
position.posCenterY = posCenterY;
export { position };
