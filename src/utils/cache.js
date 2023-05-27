const CACHE_KEY_PREFIX = "cache_"; // 캐시 키의 접두사
const CACHE_EXPIRATION_TIME = 60 * 1000; // 1분

// 데이터를 캐시에 저장하는 함수
export const setCachedData = (key, data) => {
  const timestamp = Date.now(); // 현재 시간을 밀리초 단위로 얻습니다.
  const cacheKey = `${CACHE_KEY_PREFIX}${key}`; // 실제로 사용될 캐시 키
  const cacheData = JSON.stringify({ data, timestamp }); // 데이터와 타임스탬프를 JSON 형태로 문자열로 변환합니다.
  localStorage.setItem(cacheKey, cacheData); // 로컬 스토리지에 캐시 데이터를 저장합니다.
};

// 캐시된 데이터를 가져오는 함수
export const getCachedData = (key, expirationTime = CACHE_EXPIRATION_TIME) => {
  const cacheKey = `${CACHE_KEY_PREFIX}${key}`; // 실제로 사용된 캐시 키
  const cachedData = localStorage.getItem(cacheKey); // 로컬 스토리지에서 캐시 데이터를 가져옵니다.
  if (!cachedData) return null; // 캐시 데이터가 없을 경우 null을 반환합니다.

  const { data, timestamp } = JSON.parse(cachedData); // JSON 형태의 캐시 데이터를 파싱하여 데이터와 타임스탬프를 추출합니다.

  const isExpired = Date.now() > timestamp + expirationTime; // 현재 시간이 타임스탬프 + 만료 시간을 초과하는지 확인합니다.
  if (!isExpired) {
    return data; // 만료되지 않은 경우 데이터를 반환합니다.
  }
  localStorage.removeItem(cacheKey); // 만료된 경우 로컬 스토리지에서 캐시 데이터를 제거합니다.
};
