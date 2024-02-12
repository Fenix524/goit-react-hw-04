import axios from "axios";

const MY_KEY = "QPQ_wk2NS29ntZDKlJamV8AVN8h4JrdRRJt4QHw4LiI";

export const fetchPhotos = async (queryString, page) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos` +
      `?page=${page}` +
      `&client_id=${MY_KEY}` +
      `&query=${queryString}`,
    {
      params: {
        orientation: "landscape",
        per_page: 20,
      },
    }
  );
  return response;
};
