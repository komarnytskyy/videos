import React from 'react';

export const VideoDetail = ({ video }: any) => {
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className='ui embed'>
        <iframe
          width="560"
          height="315"
          title='video player'
          src={videoSrc}
        />
      </div>
      <div className="ui segment">
        <h4 className='ui header'>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}
