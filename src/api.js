import axios from "axios";
export const requestAllPosts = async () => {
  const { data } = await axios.get(
    "https://api.unsplash.com/search/photos?query=elkrmklmrkem&client_id=5nZCHC8kBq8Vc_xdk2tmDAMdpneALlrsNgGt2Ekq__4"
  );
  return data;
};
export const requestPostsByName = async (queryName) => {
  const { data } = await axios.get(
    `https://api.unsplash.com/search/photos?query=${queryName}elkrmklmrkem&client_id=5nZCHC8kBq8Vc_xdk2tmDAMdpneALlrsNgGt2Ekq__4`
  );
  return data;
};
