import axios from "axios";

export const fetchData = async (ApiKey, query, page) => {
  const baseURL = "https://api.unsplash.com/search/photos";
  const response = await axios.get(`${baseURL}`, {
    params: {
      query: query,
      per_page: "9",
      page: page,
      client_id: ApiKey,
    },
  });
  return response.data;
};
