'use client'

import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

interface NewsItem {
  id: string
  title: string
  category: string
  timeAgo: string
  description: string
  imageUrl: string
}

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Community Cleanup Initiative Makes an Impact',
    category: 'Community',
    timeAgo: '2 hours ago',
    description: 'Volunteers gathered early this morning at [Park Name] to participate in a community-driven cleanup event. Over 100 people showed up to remove litter, plant trees, and restore the area to its natural beauty.',
    imageUrl: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '2',
    title: 'Local Business Expands Operations',
    category: 'Business',
    timeAgo: '4 hours ago',
    description: 'A beloved local business announced plans for expansion today, promising new job opportunities and increased economic growth for the community.',
    imageUrl: '/placeholder.svg?height=200&width=200'
  },
  {
    id: '3',
    title: 'New Park Opens to Public',
    category: 'Environment',
    timeAgo: '6 hours ago',
    description: 'After months of anticipation, the new city park officially opened its gates today, offering residents a beautiful green space for recreation and relaxation.',
    imageUrl: '/placeholder.svg?height=200&width=200'
  }
]

export default function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
      containScroll: "trimSnaps"
  })
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const scrollTo = React.useCallback((index: number) => {
    emblaApi && emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">You May Also Like</h2>
      <div className="overflow-x-hidden py-5" ref={emblaRef}>
        <div className="flex gap-4">
          {newsItems.map((item, index) => (
            <div 
              key={item.id} 
              className="flex-[0_0_100%] md:flex-[0_0_50%]  px-4 "
              style={{
                opacity: index === selectedIndex ? 1 : 0.5,
                transform: `scale(${index === selectedIndex ? 1.1 : 1})`,
              }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500">{item.timeAgo}</span>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {newsItems.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${
              selectedIndex === index ? 'bg-gray-800' : 'bg-gray-300'
            }`}
            onClick={() => scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
