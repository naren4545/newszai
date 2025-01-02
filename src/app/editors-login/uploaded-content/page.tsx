import Header from '@/app/components/Header'
import { ArticlesList } from '../publish-new-article/components/article-list'
import { getArticles } from '@/app/action'
import NewsletterForm from '@/app/components/NewsLetterForm'
import Footer from '@/app/components/Footer'
import UploadContent from '../publish-new-article/components/UploadContent'

export default async function ArticlesPage() {
  const articles = await getArticles('published')
  console.log(articles)
  return<>
  <Header/>
  <ArticlesList articles={articles} type="published" />

  <UploadContent/>
  <NewsletterForm/>
  <Footer/>
  
  </> 
}


