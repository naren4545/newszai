import React from 'react'
import { ArticleEditor } from './components/article-editor'
import Header from '@/app/components/Header'
import HeroSection from './components/HeroSection'
import NewsletterForm from '@/app/components/NewsLetterForm'
import Footer from '@/app/components/Footer'

export default function page() {
  return (
    <div>
        <Header/>

        <HeroSection/>
      <ArticleEditor/>
      <NewsletterForm/>
       <Footer/>
    </div>
  )
}
