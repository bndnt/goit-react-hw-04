import { useState, useEffect } from "react";
import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import { requestPostsByName } from "../../api";
import Loader from "../Loader/Loader";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import css from "./App.module.css";
function App() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotslPage] = useState(1);
  // useEffect(() => {
  //   const fetchAllPosts = async () => {
  //     try {
  //       const data = await requestAllPosts();
  //       setPosts(data.results);
  //     } catch {
  //       setError(true);
  //     }
  //   };
  //   fetchAllPosts();
  // }, []);
  useEffect(() => {
    const fetchPostBySearchValue = async () => {
      try {
        setError(false);
        setLoading(true);
        if (searchValue === null) return; // если пусто — не делаем запрос
        const data = await requestPostsByName(searchValue, page);
        if (totalPage < page) return;
        if (data.results.length === 0) {
          setError(true);
          console.log(`data.results.length ===0 :${data.results.length}`);
        } else {
          setPosts((prev) =>
            page === 1 ? data.results : [...prev, ...data.results]
          );
          setTotslPage(data.total_pages);
        }
      } catch {
        setError(true);
        console.log("Error in catch");
      } finally {
        setLoading(false);
      }
    };
    fetchPostBySearchValue(searchValue);
    console.log(searchValue);
  }, [searchValue, page, totalPage]);

  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);
    setPage(1);
  };
  const onLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <SearchBar onSubmit={onSearch} />
      <div className={css.container}>
        {error ? <ErrorMessage /> : <ImageGallery posts={posts} />}
        {Array.isArray(posts) && posts.length === 0 && (
          <p style={{ color: "red", margin: "auto", width: "500px" }}>
            За вашим запитом не знайдено фотографій, спробуйте ще раз
          </p>
        )}
        {loading && <Loader />}
        {Array.isArray(posts) && posts.length > 0 && !error && (
          <LoadMoreBtn onLoadMore={onLoadMore} />
        )}
      </div>
    </div>
  );
}

export default App;
