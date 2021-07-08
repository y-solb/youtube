import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => (
  <section className={styles.detail}>
    <div className={styles.box}>
      <iframe
        className={styles.video}
        type="text/html"
        title="youtube video player"
        width="100%"
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h3>{video.snippet.title}</h3>
      <h5 className={styles.title}>{video.snippet.channelTitle}</h5>
      <pre className={styles.description}>{video.snippet.description}</pre>
    </div>
  </section>
);

export default VideoDetail;
