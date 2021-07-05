import React from 'react';

const VideoItem = ({ video }) => {
  return <li>{video.snippet.title}</li>;
};

export default VideoItem;
