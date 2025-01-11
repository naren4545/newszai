export type Article = {
    id: string
    headline: string
    category: string
    summary: string
    content: string
    thumbnail: string
    timestamp:string
    status: 'draft' | 'published'
    dateTime: string
    updatedAt: Date
  }
  
  