import React from 'react'

import Header from '@/app/components/Header'

import NewsletterForm from '@/app/components/NewsLetterForm'
import Footer from '@/app/components/Footer'
import NewsLayout from './compoents/NewsLayout'
import NewsCarousel from './compoents/NewsCarousel'

export default function page() {
  return (
    <div>
        <Header/>

        <NewsLayout/>
        <NewsCarousel/>
      <NewsletterForm/>
       <Footer/>
    </div>
  )
}
