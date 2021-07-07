import React, { useState, useEffect } from 'react';
import './app.css';
import SearchHeader from './component/search_header/search_header';
import VideoList from './component/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  const search = (txt) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${txt}&type=video&key=AIzaSyD2yFwzDZFKZBTuzn5COdXaD3fuHNNyDfE`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items.map((item) => ({ ...item, id: item.id.videoId })))
      .then((items) => setVideos(items))
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyD2yFwzDZFKZBTuzn5COdXaD3fuHNNyDfE',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
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
