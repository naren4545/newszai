'use server'

import { revalidatePath } from 'next/cache'
import { Article } from '@/app/types/article'

// This would typically be replaced with a database
let articles: Article[] = [
  {
    id: "1",
    title: "The Rise of AI in Technology",
    category: "technology",
    summary: "An overview of how AI is revolutionizing the tech industry.",
    content: "Artificial intelligence is rapidly becoming a core technology...",
    thumbnail: "/images/ai-technology.jpg",
    status: "published",
    createdAt: new Date("2024-01-01T10:00:00Z"),
    updatedAt: new Date("2024-01-02T15:00:00Z"),
  },
  {
    id: "2",
    title: "Exploring the Depths of Space",
    category: "science",
    summary: "A look at recent advancements in space exploration.",
    content: "In recent years, humanity has made significant progress...",
    thumbnail: "/images/space-exploration.jpg",
    status: "draft",
    createdAt: new Date("2024-01-03T08:00:00Z"),
    updatedAt: new Date("2024-01-03T08:00:00Z"),
  },
  {
    id: "3",
    title: "The Evolution of Modern Culture",
    category: "culture",
    summary: "How modern culture is influenced by social media and technology.",
    content: "Modern culture is shaped by various factors, including...",
    thumbnail: "/images/modern-culture.jpg",
    status: "published",
    createdAt: new Date("2024-01-05T12:00:00Z"),
    updatedAt: new Date("2024-01-06T14:00:00Z"),
  },
  {
    id: "4",
    title: "Breakthroughs in Quantum Computing",
    category: "science",
    summary: "An introduction to quantum computing and its potential.",
    content: "Quantum computing is set to revolutionize various industries...",
    thumbnail: "/images/quantum-computing.jpg",
    status: "draft",
    createdAt: new Date("2024-01-07T09:30:00Z"),
    updatedAt: new Date("2024-01-07T09:30:00Z"),
  },
  {
    id: "5",
    title: "The Future of Renewable Energy",
    category: "technology",
    summary: "The latest innovations in renewable energy technology.",
    content: "Renewable energy is at the forefront of combating climate change...",
    thumbnail: "/images/renewable-energy.jpg",
    status: "published",
    createdAt: new Date("2024-01-10T11:45:00Z"),
    updatedAt: new Date("2024-01-11T13:20:00Z"),
  },
]

export async function saveArticle(formData: FormData) {
  const title = formData.get('title') as string
  const category = formData.get('category') as string
  const summary = formData.get('summary') as string
  const content = formData.get('content') as string
  const status = formData.get('status') as 'draft' | 'published'
  const id = formData.get('id') as string || crypto.randomUUID()

  const article = {
    id,
    title,
    category,
    summary,
    content,
    thumbnail: '/placeholder.svg',
    status,
    createdAt: new Date(),
    updatedAt: new Date()
  }
console.log(article,"hii")
  // Update or create article
  const index = articles.findIndex(a => a.id === id)
  if (index !== -1) {
    articles[index] = article
  } else {
    articles.push(article)
  }

  console.log(articles,"articles")
  
  return article
}

export async function getArticles(status?: 'draft' | 'published') {
  if (status) {
    return articles.filter(article => article.status === status)
  }
  console.log(articles,"articles2")
  return articles
}

export async function getArticle(id: string) {
  return articles.find(article => article.id === id)
}

