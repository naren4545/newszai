import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'
import React from 'react'
import Article from './components/Article'
import NewsletterForm from '@/app/components/NewsLetterForm'
import  NewsSlider  from '@/app/components/NewsSlider'

export default function page() {
  return (
    <div>
      <Header/>
      <Article/>
      <NewsSlider/>
      <NewsletterForm/>
      <Footer/>
    </div>
  )
}
