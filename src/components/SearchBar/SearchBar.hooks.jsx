import { searchConditionsApi } from "api/searchConditions";
import { useCallback, useState } from "react";
import {
  RECOMMENDATION_DELAY,
  searchEnterKeyCode,
  searchLength,
} from "./SearchBar.constant";
import { useDebounce } from "hooks/useDebounce";

export const useDebounceRecommend = (keyword) => {
  const [recomendations, setRecomendations] = useState([]);

  const fetchRecomendations = useCallback(async () => {
    const recommendationList = await searchConditionsApi.getCondition(keyword);

    if (!recommendationList) {
      setRecomendations([]);
      return;
    }

    const data = recommendationList.slice(0, searchLength.LIST_MAX);
    if (Array.isArray(data)) setRecomendations(data);
    else setRecomendations([]);
  }, [keyword]);

  useDebounce(fetchRecomendations, RECOMMENDATION_DELAY);

  return { recomendations };
};

export const useKeyPress = (recomendations, setKeyword) => {
  const [focusIndex, setFocusIndex] = useState(0);

  const recomendLen =
    recomendations.length + 1 <= searchLength.INDEX_MAX
      ? recomendations.length + 1
      : searchLength.INDEX_MAX;

  const onKeyDownHandler = (e) => {
    switch (e.keyCode) {
      case searchEnterKeyCode.ENTER:
        if (!recomendations[focusIndex - 1]) return;
        setKeyword(recomendations[focusIndex - (1 % recomendLen)].name);
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
