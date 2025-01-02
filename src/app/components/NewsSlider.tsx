"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface NewsStory {
  id: number;
  title: string;
  category: string;
  timestamp: string;
  image: string;
}

export const newsStories: NewsStory[] = [
  {
    id: 1,
    title: "Community Cleanup Initiative Makes an Impact",
    category: "Community",
    timestamp: "2 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Local Arts Festival Draws Record Crowds",
    category: "Culture",
    timestamp: "3 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "New Community Garden Opens",
    category: "Community",
    timestamp: "4 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
    {
    id: 1,
    title: "Community Cleanup Initiative Makes an Impact",
    category: "Community",
    timestamp: "2 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Local Arts Festival Draws Record Crowds",
    category: "Culture",
    timestamp: "3 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "New Community Garden Opens",
    category: "Community",
    timestamp: "4 hours ago",
    image: "/placeholder.svg?height=200&width=300",
  },
];

export function NewsSlider() {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % newsStories.length)
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + newsStories.length) % newsStories.length)
  }

  const getSlideIndex = (index: number) => {
    return (index + newsStories.length) % newsStories.length
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Local Stories</h2>
      <div className="relative overflow-x-hidden min-h-[331px]">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: isMobile 
              ? `translateX(-${activeIndex * 100}%)` 
              : `translateX(-${activeIndex * 33.333}%)`
          }}
        >
          {[...newsStories, ...newsStories, ...newsStories].map((story, index) => (
            <div 
              key={`${story.id}-${index}`} 
              className={cn(
                "flex-shrink-0 px-2 transition-all duration-500",
                isMobile ? "w-full" : "w-1/3"
              )}
            >
              <NewsCard 
                story={story} 
                isActive={isMobile 
                  ? index % newsStories.length === activeIndex
                  : getSlideIndex(index - activeIndex - 1) === 0
                }
              />
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {newsStories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-colors",
              activeIndex === index ? "bg-primary" : "bg-gray-300"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function NewsCard({ story, isActive }: { story: NewsStory, isActive: boolean }) {
  return (
    <div className={cn(
      "bg-white shadow-md transition-all duration-500 ease-in-out h-full",
      isActive ? "md:scale-105 opacity-100 z-10" : "md:scale-95 opacity-50"
    )}>
      <div className="relative">
        <img
          src={story.image}
          alt=""
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 left-3 bg-white text-xs font-semibold py-1 px-2 rounded">
          {story.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-2 mb-2">{story.title}</h3>
        <p className="text-sm text-gray-500">{story.timestamp}</p>
      </div>
    </div>
  )
}

