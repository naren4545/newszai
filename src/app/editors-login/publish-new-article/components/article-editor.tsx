'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Article } from '@/app/types/article'
import { saveArticle } from '@/app/action'
import FileUpload from './FileUpload'

interface ArticleEditorProps {
  article?: Article
}

export function ArticleEditor({ article }: ArticleEditorProps) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  async function handleSubmit(formData: FormData) {
    setSaving(true)
    try {
      const status = formData.get('status') as 'draft' | 'published'
      await saveArticle(formData)
      router.push(status === 'published' ? '/editors-login/uploaded-content' : '/editors-login/your-draft')
    } finally {
      setSaving(false)
    }
  }

  return (

    <section className=''>

        <div className='bg-[#EBEBEB]'>
    <form action={handleSubmit} className="max-w-[1077px] mx-auto px-3 py-10 space-y-6">
      <div className="space-y-2">
        <label htmlFor="title" className="block md:text-2xl text-sm font-medium">
          Enter the news title
        </label>
        <input
          id="title"
          name="title"
          defaultValue={article?.title}
          required
          className="w-full p-2 border-[0.8px] rounded-xl md:h-[90px]  h-[50px] border-black"
        />
        <p className='text-[#636363] text-[10px] md:text-lg'></p>
      </div>

      <div className="space-y-2">
        <label htmlFor="category" className="block md:text-2xl text-sm font-medium">
          Category
        </label>
        <select
          id="category"
          name="category"
          defaultValue={article?.category}
          required
          className="w-full p-2 border-[0.8px] rounded-xl md:h-[90px]  h-[50px] border-black"
        >
          <option value="">Select category</option>
          <option value="technology">Technology</option>
          <option value="science">Science</option>
          <option value="culture">Culture</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="summary" className="block md:text-2xl text-sm font-medium">
          Job Summary
        </label>
        <textarea
          id="summary"
          name="summary"
          defaultValue={article?.summary}
          required
          rows={4}
          className="w-full p-2 border-[0.8px] rounded-xl md:h-[260px]  h-[139px] border-black"

        />
      </div>

      <div className="space-y-2">
        <label htmlFor="thumbnail" className="block md:text-2xl text-sm font-medium">
          Upload Thumbnail Image
        </label>
       <FileUpload/>
      </div>

      <div className="space-y-2">
        <label htmlFor="content" className="block md:text-2xl text-sm font-medium">
          News Editor
        </label>
        <textarea
          id="content"
          name="content"
          defaultValue={article?.content}
          required
          rows={8}
          className="w-full p-2 border-[0.8px] rounded-xl md:h-[260px]  h-[139px] border-black"
        />
      </div>

      {article?.id && (
        <input type="hidden" name="id" value={article.id} />
      )}

      <div className="flex gap-4">
        <button
          type="submit"
          name="status"
          value="published"
          disabled={saving}
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 disabled:opacity-50"
        >
          Publish Article
        </button>
        <button
          type="submit"
          name="status"
          value="draft"
          disabled={saving}
          className="px-4 py-2 border border-black rounded-md hover:bg-gray-50 disabled:opacity-50"
        >
          Save Draft
        </button>
      </div>
    </form>
    </div>
    </section>
  )
}

