export const getApiResource = async (url, init = {}) => {
  try {
    const response = await fetch(url, init);
    if (!response.ok) {
      console.error(response.status);

      return false;
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

export const getQueryParams = (params = {}) => {
  const queryParams = new URLSearchParams(params).toString();

  return queryParams;
};
