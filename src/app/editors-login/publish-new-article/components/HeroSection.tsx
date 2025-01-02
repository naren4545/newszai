'use client'

import { useRouter } from 'next/navigation'
import { ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const router = useRouter()
  

  return (
    <div className="max-w-[1352px] mx-auto px-4 py-14">
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          className="absolute left-0 top-0 flex items-center text-sm font-normal"
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <div className="text-center pt-12">
          <h1 className="text-5xl font-bold mb-2">
            Write. Edit. Publish.
          </h1>
          <p className="text-2xl ">
          Seamlessly create and share news articles with our <br/>
          powerful editor tools.
          </p>
        </div>
      </div>
    </div>
  )
}

