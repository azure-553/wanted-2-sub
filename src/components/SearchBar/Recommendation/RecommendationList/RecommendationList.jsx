import * as _ from "./RecommendationList.style";

import React from "react";

export const RecommendationList = ({
  recommendations,
  focusIndex,
  onClick,
  setFocusIndex,
}) => {
  return (
    <_.List>
      {recommendations.map((recommend, index) => {
        return (
          <li key={recommend.id}>
            <_.Button
              isActive={index + 1 === focusIndex}
              type="button"
              onClick={() => onClick()}
              onMouseOver={() => setFocusIndex(index + 1)}
            >
              <_.SearchIcon />
              {recommend.name}
            </_.Button>
          </li>
        );
      })}
    </_.List>
  );
};
