import { getApiResource, getQueryParams } from "../utils";
import { API_HEADERS, API_BASE_URL } from "../constants";

export const get = async (id) => {
  const init = {
    method: "GET",
    headers: API_HEADERS,
  };
  const data = await getApiResource(
    API_BASE_URL + "/api/v2.2/films/" + id,
    init,
  );

  return data;
};

export const getList = async (params = {}) => {
  const init = {
    method: "GET",
    headers: API_HEADERS,
  };

  const queryParams = getQueryParams(params);

  const data = await getApiResource(
    API_BASE_URL + "/api/v2.2/films?" + queryParams,
    init,
  );

  return data;
};

export const search = async (params = {}) => {
  const init = {
    method: "GET",
    headers: API_HEADERS,
  };

  const queryParams = getQueryParams(params);

  const data = await getApiResource(
    API_BASE_URL + "/api/v2.1/films/search-by-keyword?" + queryParams,
    init,
  );

  return data;
};
