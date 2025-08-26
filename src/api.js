import axios from "axios";
// export const requestAllPosts = async () => {
//   const { data } = await axios.get(
//     "https://api.unsplash.com/search/photos?query=elkrmklmrkem&client_id=5nZCHC8kBq8Vc_xdk2tmDAMdpneALlrsNgGt2Ekq__4"
//   );
//   return data;
// };
const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos",
  headers: {
    Authorization: "Client-ID 5nZCHC8kBq8Vc_xdk2tmDAMdpneALlrsNgGt2Ekq__4",
  },
});
export const requestPostsByName = async (queryName, page) => {
  const { data } = await instance.get(
    `?query=${queryName}&per_page=24&page=${page}`
  );
  return data;
};
