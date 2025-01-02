'use client'

import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Play, Search } from 'lucide-react'
import NewsCard from './NewsCard'
import { i } from 'framer-motion/client'
import categoryicon from '../../../../public/category.svg'
import Image from 'next/image'
interface NewsItem {
  id: number
  title: string
  description: string
  imageUrl: string
  date: string
  category: string
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Tech Giant Invests $5+ Billion in Renewable Energy Projects",
    description: "Although they aren't new to the alternative energy sector, this marks their largest investment yet...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    date:" Nov 11 2024, 11:57 AM IST",
    category: "Technology"
  },
  {
    id: 2,
    title: "Tech Giant Invests $5+ Billion in Renewable Energy Projects",
    description: "Although they aren't new to the alternative energy sector, this marks their largest investment yet...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    date:" Nov 11 2024, 11:57 AM IST",
     category: "Technology"
  },
  {
    id: 3,
    title: "Tech Giant Invests $5+ Billion in Renewable Energy Projects",
    description: "Although they aren't new to the alternative energy sector, this marks their largest investment yet...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    date:" Nov 11 2024, 11:57 AM IST",
     category: "Technology"
  },
  {
    id: 4,
    title: "Tech Giant Invests $5+ Billion in Renewable Energy Projects",
    description: "Although they aren't new to the alternative energy sector, this marks their largest investment yet...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    date:" Nov 11 2024, 11:57 AM IST",
     category: "Technology"
  },
  {
    id: 5,
    title: "Tech Giant Invests $5+ Billion in Renewable Energy Projects",
    description: "Although they aren't new to the alternative energy sector, this marks their largest investment yet...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    date:" Nov 11 2024, 11:57 AM IST",
     category: "Technology"
  },
  {
    id: 6,
    title: "Tech Giant Invests $5+ Billion in Renewable Energy Projects",
    description: "Although they aren't new to the alternative energy sector, this marks their largest investment yet...",
    imageUrl: "/placeholder.svg?height=200&width=300",
    date:" Nov 11 2024, 11:57 AM IST",
     category: "Technology"
  },
]

export default function NewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className='bg-[#EBEBEB]'>
    <div className="max-w-[1337px] mx-auto px-4 py-10 sm:px-6 lg:px-8 ">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h2 className="md:text-3xl font-semibold">Trending Videos News</h2>
        <div className="flex items-center gap-4 w-full max-w-[520px]">
          <div className="relative w-full max-w-[520px] flex-grow sm:flex-grow-0">
            <input
              type="text"
              placeholder="Search for news by categories..."
              className="w-full placeholder:text-[#636363] h-[66px] placeholder:text-lg  pl-16 pr-4 py-2 border border-gray-300 rounded-full max-w-[520px] text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
         
         <Image src={categoryicon} alt="Category Icon" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-[46px] h-[46px]" />
          </div>
          
        </div>
      </div>
      
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {newsItems.map((item) => (
              <div key={item.id} className="flex-[0_0_100%] min-w-0 pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%]">
                 <NewsCard 
        imageUrl={item.imageUrl}
        category={item.category}
        date={item.date}
        title={item.title}
        description={item.description}
        />
              </div>
            ))}
          </div>

          <div className="flex gap-2 justify-center pt-10">
            <button 
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="bg-white hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-gray-100 p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-[50px] h-[50px]" />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="bg-white hover:bg-gray-200 disabled:opacity-50 disabled:hover:bg-gray-100 p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-[50px] h-[50px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

