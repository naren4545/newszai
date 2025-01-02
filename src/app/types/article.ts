export type Article = {
    id: string
    title: string
    category: string
    summary: string
    content: string
    thumbnail: string
    status: 'draft' | 'published'
    createdAt: Date
    updatedAt: Date
  }
  
  