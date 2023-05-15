import { getCachedData, setCachedData } from "utils/cache";
import { axiosInstance } from "./axiosInstance";

export const searchConditionsApi = {
  getCondition: async (keyword) => {
    try {
      if (!keyword) return;

      const cacheKey = `searchConditions_${keyword}`;
      const cachedData = getCachedData(cacheKey);
      if (cachedData) return cachedData;

      const response = await axiosInstance.get("/search-conditions/", {
        params: { name: keyword },
      });

      // eslint-disable-next-line no-console
      console.info("calling api");

      const responseData = response.data;
      setCachedData(cacheKey, responseData);
      return responseData;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  },
};
