import { useCallback, useState } from "react";
import { searchConditionsApi } from "api/searchConditions";
import { useDebounce } from "../../hooks/useDebounce";
import {
  RECOMMENDATION_DELAY,
  searchEnterKeyCode,
  searchLength,
} from "./SearchBar.constant";

export const useDebounceRecommend = (keyword) => {
  const [recommendations, setRecommendations] = useState([]);

  const fetchRecommendations = useCallback(async () => {
    const recommendationList = await searchConditionsApi.getCondition(keyword);

    if (!recommendationList) {
      setRecommendations([]);
      return;
    }

    const data = recommendationList.slice(0, searchLength.LIST_MAX);
    if (Array.isArray(data)) setRecommendations(data);
    else setRecommendations([]);
  }, [keyword]);

  useDebounce(fetchRecommendations, RECOMMENDATION_DELAY);

  return { recommendations };
};

export const useKeyPress = (recommendations, setKeyword) => {
  const [focusIndex, setFocusIndex] = useState(0);

  const recomendLen =
    recommendations.length + 1 <= searchLength.INDEX_MAX
      ? recommendations.length + 1
      : searchLength.INDEX_MAX;

  const onKeyDownHandler = (e) => {
    switch (e.keyCode) {
      case searchEnterKeyCode.ENTER:
        if (!recommendations[focusIndex - 1]) return;
        setKeyword(recommendations[focusIndex - (1 % recomendLen)].name);
        setFocusIndex(0);
        break;
      case searchEnterKeyCode.ARROW_DOWN:
        setFocusIndex(focusIndex < recomendLen - 1 ? focusIndex + 1 : 1);
        break;
      case searchEnterKeyCode.ARROW_UP:
        setFocusIndex(focusIndex === 1 ? recomendLen - 1 : focusIndex - 1);
        break;

      default:
        break;
    }
  };
  return { focusIndex, setFocusIndex, onKeyDownHandler };
};
