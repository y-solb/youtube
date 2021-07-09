import React, { memo } from 'react';
import styles from './video_item.module.css';

const VideoItem = memo(({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
      <div className={`${styles.video} ${displayType}`}>
        <img className={`${styles.thumbnail} ${displayType}`} src={snippet.thumbnails.medium.url} alt="thumbnail" />
        <div className={styles.metadata}>
          <p className={`${styles.title} ${displayType}`}> {snippet.title} </p>
          <p className={styles.channeltitle}> {snippet.channelTitle} </p>
        </div>
      </div>
    </li>
  );
});

export default VideoItem;
