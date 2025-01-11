'use client'

import Link from 'next/link'
import { Pencil, Trash2 } from 'lucide-react'

import CustomCheckbox from './CustomCheckbox'

interface ArticleCardProps {
  id: string
  title: string
  category: string
  timestamp: string
  onDelete?: (id: string) => void
  isSelected: boolean
  onSelectChange: (id: string, isSelected: boolean) => void
}

export function ArticleCard({ id, title, category, timestamp, onDelete, isSelected, onSelectChange }: ArticleCardProps) {
 
  function formatTimestampToReadableDate(timestamp: string): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      timeZone: 'Asia/Kolkata',
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }
 
  return (
    <div className="w-full max-w-[1182px] mx-auto rounded-lg border bg-card p-6 py-10 shadow-sm">
     {/* <span className='md:hidden block'>  <CustomCheckbox
            checked={isSelected}
            onChange={(checked) => onSelectChange(id, checked as boolean)}
            aria-label={`Select article: ${title}`}
          /></span> */}
      <div className="flex md:flex-row flex-col items-center gap-4 justify-between">
        <div className="flex md:items-center space-x-4">
        <span className=' '>
          <CustomCheckbox
            checked={isSelected}
            onChange={(checked) => onSelectChange(id, checked as boolean)}
            aria-label={`Select article: ${title}`}
          />
          </span>
          <div className="space-y-3">
            <h3 className="md:text-2xl text-base font-bold leading-none">{title}</h3>
            <div className="flex items-center gap-3 md:flex-row flex-col ">
              <span className="bg-[#CDCDCD] w-fit px-2.5 py-0.5 md:text-lg text-sm font-normal rounded-[51px] text-[#636363]">
                {category}
              </span>
              <span className="md:text-lg text-sm text-[#636363]">{formatTimestampToReadableDate(timestamp)}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:text-lg text-sm border-black border rounded-xl px-3 py-4">
          <Link href={`/editors-login/edit/${id}`}>
            <button 
              className="inline-flex gap-3 text-[#00944F] items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
              aria-label="Edit article"
            >
              Edit
              <Pencil className="h-4 w-4 text-[#00944F]" />
            </button>
          </Link>
          <button
            className="inline-flex gap-3 text-[#CB1F27] items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
            onClick={() => onDelete?.(id)}
            aria-label="Delete article"
          >
            delete
            <Trash2 className="h-4 w-4 text-[#CB1F27]" />
          </button>
        </div>
      </div>
    </div>
  )
}

