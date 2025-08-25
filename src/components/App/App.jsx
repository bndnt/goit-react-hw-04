import { useState, useEffect } from "react";
import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import { requestAllPosts, requestPostsByName } from "../../api";
import Loader from "../Loader/Loader";

function App() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const data = await requestAllPosts();
        setPosts(data.results);
      } catch {
        setError(true);
      }
    };
    fetchAllPosts();
  }, []);
  useEffect(() => {
    const fetchPostBySearchValue = async () => {
      try {
        setLoading(true);
        const data = await requestPostsByName(searchValue);
        setPosts(data.results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPostBySearchValue();
    console.log(searchValue);
  }, [searchValue]);

  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };
  return (
    <div>
      <SearchBar onSubmit={onSearch} />

      {error ? <p>Oops.. try adain later</p> : <ImageGallery posts={posts} />}
      {loading && <Loader />}
    </div>
  );
}

export default App;
