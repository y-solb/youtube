import React, { useState, useEffect } from 'react';
import './app.css';
import SearchHeader from './component/search_header/search_header';
import VideoList from './component/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const search = (txt) => {
    youtube
      .search(txt)
      .then((videos) => setVideos(videos))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then((videos) => setVideos(videos))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <SearchHeader onSearch={search} />
      <VideoList videos={videos} />
    </>
  );
}
export default App;
