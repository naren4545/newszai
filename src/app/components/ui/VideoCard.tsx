'use client'

import { useState } from 'react'
import { NewsVideos } from '../NewsVideos'

interface VideoCardProps {
  videoSrc: string
  thumbnailSrc: string
  title: string
  category: string
  timestamp: string
  onClick?: () => void
}

export default function VideoCard({
  videoSrc,
  thumbnailSrc,
  title,
  category,
  timestamp,
  onClick
}: VideoCardProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = () => {
    setIsPlaying(!isPlaying)
    onClick && onClick()
  }

  return (
    <div 
      className="max-w-[497px] my-5 rounded-lg overflow-hidden shadow-lg bg-white cursor-pointer transition-transform "
      onClick={handleClick}
    >






      {/* Video Container */}
      <div className="relative">
      <NewsVideos videoSrc={videoSrc} thumbnailSrc={thumbnailSrc}/>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 bg-[#CDCDCD] text-[#636363] text-base rounded-full">
            {category}
          </span>
          <span className="text-gray-500 text-base">
            {timestamp}
          </span>
        </div>
        <h3 className="font-bold text-gray-900 text-3xl leading-tight">
          {title}
        </h3>
      </div>
    </div>
  )
}

