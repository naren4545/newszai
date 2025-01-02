import { ArticleEditor } from   '../../publish-new-article/components/article-editor'
import { getArticle } from '@/app/action'
import HeroSection from '../../publish-new-article/components/HeroSection'
import Header from '@/app/components/Header'
import NewsletterForm from '@/app/components/NewsLetterForm'
import Footer from '@/app/components/Footer'
interface EditArticlePageProps {
  params: {
    id: string;
  };
}
export default async function EditArticlePage() {
 
  const article = await getArticle("2")
 
  if (!article) {
    return <div>Article not found</div>
  }

  return (
    
     
      <div>
        <Header/>
        <HeroSection/>
        <ArticleEditor article={article} />
        <NewsletterForm/>
        <Footer/>
     
    </div>
  )
}

