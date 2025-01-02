
"use client"
import Link from 'next/link'
import { Article } from '@/app/types/article'
import { ArticleCard } from './article-card'
import Back from './Back'

interface ArticlesListProps {
  articles: Article[]
  type: 'published' | 'draft'
}

export function ArticlesList({ articles, type }: ArticlesListProps) {
  return (
    <div className="max-w-[1312px] mx-auto p-6 pb-12 ">
      <div className=" py-10 relative">
        <h1 className="text-5xl font-bold text-center pb-11">
          {type === 'published' ? 'Your Uploaded Content' : 'Your Draft'}
        </h1>
        <Back/>
      </div>
      
      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleCard id={article.id} key={article.id} title={article.title} category={article.category} timestamp={article.createdAt.toDateString()} onDelete={() => {}} />
        ))}
        
        {articles.length === 0 && (
          <p className="text-center text-gray-500 py-8">
            No {type === 'published' ? 'articles' : 'drafts'} found
          </p>
        )}
      </div>
    </div>
  )
}

