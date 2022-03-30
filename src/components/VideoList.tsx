import React from 'react'
import { VideoItem } from './VideoItem';

export const VideoList = ({ videos, onVideoSelect }: any) => {
  const renderedList = videos.map((video: any) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    )
  })

  return (
    <div className='ui relaxed divided list'>
      {renderedList}
    </div>
  )
}
