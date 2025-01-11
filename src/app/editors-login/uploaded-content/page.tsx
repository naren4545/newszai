import Header from '@/app/components/Header'
import { ArticlesList } from '../publish-new-article/components/article-list'

import NewsletterForm from '@/app/components/NewsLetterForm'
import Footer from '@/app/components/Footer'
import UploadContent from '../publish-new-article/components/UploadContent'

export default async function ArticlesPage() {
 
 
  return<>
  <Header/>
  <ArticlesList  type="published" />

  <UploadContent/>
  <NewsletterForm/>
  <Footer/>
  
  </> 
}


