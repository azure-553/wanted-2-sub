import React from "react";
import * as _ from "./Recommendation.style";
import { RecommendationList } from "./RecommendationList";

export const Recommendation = ({
  isActive,
  recommendations = [],
  onClick,
  focusIndex,
  setFocusIndex,
}) => {
  return (
    <_.Container isActive={isActive}>
      <_.Recommendation>
        <_.Title>추천 검색어</_.Title>

        {recommendations.length === 0 && (
          <_.SearchEmpty>검색어 없음</_.SearchEmpty>
        )}

        {recommendations.length > 0 && (
          <RecommendationList
            recommendations={recommendations}
            focusIndex={focusIndex}
            onClick={onClick}
            setFocusIndex={setFocusIndex}
          />
        )}
      </_.Recommendation>
    </_.Container>
  );
};
