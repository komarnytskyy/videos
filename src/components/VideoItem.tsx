import React from 'react';
import './VideoItem.css'

export const VideoItem = ({ video, onVideoSelect }: any) => {


  return (
    <div
      onClick={() => {
        onVideoSelect(video)
      }}
      className='item video-item'>
      <img
        className='ui image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}/>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  )
}
