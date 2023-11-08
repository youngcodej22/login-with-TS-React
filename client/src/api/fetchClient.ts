import { getAccessTokenFromLocalStorage } from "../utils/accessTokenHandler";

// * RequestInit: TS type에 있다
export const fetchClient = async (
  url: string,
  options: RequestInit
): Promise<Response> => {
  const accessToken = getAccessTokenFromLocalStorage();
  const newOptions = {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return fetch(url, newOptions);
};
