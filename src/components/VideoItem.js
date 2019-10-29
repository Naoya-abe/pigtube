import React from 'react';

const VideoItem = props => {
  console.log(props);

  return (
    <div className="item">
      <div className="image">
        <img src={props.thumbnail} />
      </div>
      <div className="content">
        <a className="header">{props.title}</a>
        <div className="meta">
          <span>
            <a path="">{props.channel}</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
