'use client'

import Link from 'next/link'
import { Pencil, Trash2 } from 'lucide-react'

interface ArticleCardProps {
  id: string
  title: string
  category: string
  timestamp: string
  onDelete?: (id: string) => void
}

export function ArticleCard({ id, title, category, timestamp, onDelete }: ArticleCardProps) {
  return (
    <div className="w-full max-w-[1182px] mx-auto rounded-lg border bg-card p-6 py-10 shadow-sm">
      <div className="flex items-center  justify-between">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold leading-none">{title}</h3>
          <div className="flex items-center gap-3">
            <span className=" bg-[#CDCDCD] px-2.5 py-0.5 text-lg font-normal rounded-[51px] text-[#636363]">
              {category}
            </span>
            <span className="text-lg text-[#636363]">{timestamp}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 border-black border rounded-xl px-3 py-4">
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

