'use client'

import { useState, useTransition } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import  NewsCard  from "./ui/NewsCard"
import img from '../../../public/image 1.png'
import { AnimatePresence, motion } from "framer-motion"

const ITEMS_PER_PAGE = 3

const newsData = [
    {
      id: "1",
      title: "India's \"Mini Silicon Valley\" Plan in Goa",
      category: "Technology",
      timestamp: "Nov 11 2024, 11:57 AM IST",
      image: img.src,
      description: "The Indian government plans to develop Goa into a tech hub with a focus on start-ups, semiconductor design, and electronics production.",
    },
    {
      id: "2",
      title: "India's Hockey Team Faces China in Asian Champions Trophy Final",
      category: "Sports",
      timestamp: "Nov 11 2024, 11:55 AM IST",
      image: img.src,
      description: "A preview of the Asian Champions Trophy final where India's hockey team is set to play China, who have reached the final for the first time.",
    },
    {
      id: "3",
      title: "New Breakthrough in Quantum Computing Research",
      category: "Science",
      timestamp: "Nov 11 2024, 11:50 AM IST",
      image: img.src,
      description: "Scientists achieve major breakthrough in quantum computing stability, paving way for practical applications.",
    },
    {
      id: "4",
      title: "Global Climate Summit Announces New Initiatives",
      category: "Environment",
      timestamp: "Nov 11 2024, 10:00 AM IST",
      image: img.src,
      description: "World leaders gather to announce ambitious new climate action plans and sustainability initiatives.",
    },
    {
      id: "5",
      title: "India's Economic Growth Surges in Q3",
      category: "Economy",
      timestamp: "Nov 11 2024, 09:30 AM IST",
      image: img.src,
      description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
    },
    {
        id: "6",
        title: "India's Economic Growth Surges in Q3",
        category: "Economy",
        timestamp: "Nov 11 2024, 09:30 AM IST",
        image: img.src,
        description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
      },

      {
        id: "7",
        title: "India's Economic Growth Surges in Q3",
        category: "Economy",
        timestamp: "Nov 11 2024, 09:30 AM IST",
        image: img.src,
        description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
      },

      {
        id: "8",
        title: "India's Economic Growth Surges in Q3",
        category: "Economy",
        timestamp: "Nov 11 2024, 09:30 AM IST",
        image: img.src,
        description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
      },


      {
        id: "9",
        title: "India's Economic Growth Surges in Q3",
        category: "Economy",
        timestamp: "Nov 11 2024, 09:30 AM IST",
        image: img.src,
        description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
      },


      {
        id: "10",
        title: "India's Economic Growth Surges in Q3",
        category: "Economy",
        timestamp: "Nov 11 2024, 09:30 AM IST",
        image: img.src,
        description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
      },

      {
        id: "11",
        title: "India's Economic Growth Surges in Q3",
        category: "Economy",
        timestamp: "Nov 11 2024, 09:30 AM IST",
        image: img.src,
        description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
      },

      {
        id: "12",
        title: "India's Economic Growth Surges in Q3",
        category: "Economy",
        timestamp: "Nov 11 2024, 09:30 AM IST",
        image: img.src,
        description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
      },

      {
        id: "13",
        title: "India's Economic Growth Surges in Q3",
        category: "Economy",
        timestamp: "Nov 11 2024, 09:30 AM IST",
        image: img.src,
        description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
      },

      {
        id: "14",
        title: "India's Economic Growth Surges in Q3",
        category: "Economy",
        timestamp: "Nov 11 2024, 09:30 AM IST",
        image: img.src,
        description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
      },

      {
        id: "15",
        title: "India's Economic Growth Surges in Q3",
        category: "Economy",
        timestamp: "Nov 11 2024, 09:30 AM IST",
        image: img.src,
        description: "India records a significant economic growth surge in Q3, driven by increased exports and infrastructure development.",
      },
  ];
  
  
export function NewsSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isPending, startTransition] = useTransition()
  
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentNews = newsData.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    startTransition(() => {
      setCurrentPage(page)
    })
  }

  return (
    <section className="container mx-auto py-8 relative">
      {isPending && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6"
        >
          {currentNews.map((news) => (
            <NewsCard key={news.id} title={news.title} category={news.category} date={news.timestamp} imageUrl={news.image} imageAlt={news.title} description={news.description} />
          ))}
        </motion.div>
      </AnimatePresence>
      
      <div className="mt-8 flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "default" : "outline"}
            size="icon"
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        ))}
        
        <Button
          variant="outline"
          size="icon"
          onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  )
}

