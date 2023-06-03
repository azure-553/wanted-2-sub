import React from "react";
import { useClickOutside } from "hooks/useClickOutside";
import { useInput } from "hooks/useInput";
import { useDebounceRecommend, useKeyPress } from "./SearchBar.hooks";
import * as _ from "./SearchBar.style";
import { Recommendation } from "./Recommendation";

export const SearchBar = () => {
  const { ref, isVisible, setIsVisible } = useClickOutside();
  const { value, onChange, setValue } = useInput();
  const { recommendations } = useDebounceRecommend(value);
  const { focusIndex, setFocusIndex, onKeyDownHandler } = useKeyPress(
    recommendations,
    setValue
  );

  const handleSearch = () => {
    setIsVisible(false);
  };

  const onChangeInput = (e) => {
    onChange(e);
    setIsVisible(true);
  };
  return (
    <form
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
    >
      <_.SearchBar>
        <_.SearchIcon />
        <_.Input
          value={value}
          onFocus={() => {
            setIsVisible(true);
            setFocusIndex(0);
          }}
          onKeyDown={onKeyDownHandler}
          onChange={onChangeInput}
        />
        <_.Button>검색</_.Button>
        <Recommendation
          isActive={isVisible}
          onClick={handleSearch}
          focusIndex={focusIndex}
          recommendations={recommendations}
          setFocusIndex={setFocusIndex}
        />
      </_.SearchBar>
    </form>
  );
};
