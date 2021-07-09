import React, { useState, useEffect, useCallback } from 'react';
import styles from './app.module.css';
import SearchHeader from './component/search_header/search_header';
import VideoDetail from './component/video_detail/video_detail';
import VideoList from './component/video_list/video_list';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = useCallback(
    (txt) => {
      youtube
        .search(txt)
        .then((videos) => {
          setVideos(videos);
          setSelectedVideo(null);
        })
        .catch((error) => console.log('error', error));
    },
    [youtube]
  );

  useEffect(() => {
    youtube
      .mostPopular()
      .then((videos) => setVideos(videos))
      .catch((error) => console.log('error', error));
  }, [youtube]);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search} />
      {selectedVideo && (
        <div className={styles.detail}>
          <VideoDetail video={selectedVideo} />
        </div>
      )}
      <div className={styles.list}>
        <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'} />
      </div>
    </div>
  );
}
export default App;
