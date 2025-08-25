import { useState, useEffect } from "react";
import "./App.module.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

import { requestAllPosts } from "../../api";

function App() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(false);

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
  return (
    <div>
      <SearchBar />
      {error ? <p>Oops.. try adain later</p> : <ImageGallery posts={posts} />}
    </div>
  );
}

export default App;
