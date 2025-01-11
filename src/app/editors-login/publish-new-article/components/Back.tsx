"use client"
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
export default function Back() {
    const router = useRouter()
  return (
    <Button
          variant="ghost"
          size="sm"
          className="absolute left-0 top-0 flex items-center md:text-2xl text-xs font-normal"
          onClick={() => router.back()}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
  )
}
