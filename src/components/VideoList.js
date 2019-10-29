import React from 'react';

import VideoItem from './VideoItem';

const VideoList = props => {
  console.log(props);
  //   const {
  // id: {videoId},
  //     snippet: {channelTitle, thumbnails, title},
  //   } = props.videos;
  const renderedList = props.videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        channel={video.snippet.channelTitle}
        title={video.snippet.title}
        thumbnail={video.snippet.thumbnails.medium.url}
      />
    );
  });

  return <div className="ui items">{renderedList}</div>;
};

export default VideoList;
