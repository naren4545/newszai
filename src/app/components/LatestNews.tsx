import { section } from 'framer-motion/client'
import React from 'react'
import NewsCard from './ui/NewsCard'
import img from '../../../public/image 1.png'
import VideoCard from './ui/VideoCard'
import LatestNewsCard from './ui/LatestNewsCard'
import { NewsSection } from './NewsSection'
export default function LatestNews() {

    const articles = [
        {
          title: "AIADMK Declares No Alliance with BJP for 2026 Elections",
          category: "Politics",
          date: "Nov 11 2024, 11:57 AM IST",
        },
        {
          title: "India's GDP Growth Expected to Reach 7% by 2025",
          category: "Economy",
          date: "Nov 12 2024, 10:00 AM IST",
        },
        {
          title: "New Education Policy Focuses on Digital Learning in Rural Areas",
          category: "Education",
          date: "Nov 13 2024, 1:30 PM IST",
        },
        {
          title: "Tech Giants to Invest $10 Billion in Indian Startups",
          category: "Technology",
          date: "Nov 14 2024, 9:45 AM IST",
        },
        {
          title: "Record-Breaking Monsoon Predicted for Southern India in 2025",
          category: "Weather",
          date: "Nov 15 2024, 8:20 AM IST",
        },
      ];
      const articles1 = [
        {
          title: "AIADMK Declares No Alliance with BJP for 2026 Elections",
          category: "Politics",
          date: "Nov 11 2024, 11:57 AM IST",
        },
        {
          title: "India's GDP Growth Expected to Reach 7% by 2025",
          category: "Economy",
          date: "Nov 12 2024, 10:00 AM IST",
        },
        {
          title: "New Education Policy Focuses on Digital Learning in Rural Areas",
          category: "Education",
          date: "Nov 13 2024, 1:30 PM IST",
        },
       
      ];

  return (
    <section className='px-3 py-10'>


        <div className='text-center py-7 max-w-[919px] mx-auto'>
            <h2 className='font-an text-4xl font-semibold text-center pb-3'>Today’s Top Stories: Fresh Updates at 5 PM</h2>
      <p className='text-2xl '>Catch the latest headlines and videos from across the nation, updated 
      daily at 5 PM to keep you informed.</p>
        </div>
      <div className='max-w-[1352px] px-1 py-6   mx-auto'>


<div className='grid grid-cols-1  lg:grid-cols-5 gap-4 lg:gap-10'>


<div className='lg:col-span-2 '>
    <div className='bg-[#EBEBEB] px-4 py-5 rounded-xl mb-10'>
<h2 className='font-an text-4xl font-semibold text-center py-7'>News Articles</h2>
{articles.map((article, index) => (
  <LatestNewsCard
    key={index}
    title={article.title}
    category={article.category}
    date={article.date}
   
  />
))}
<div className='py-8 text-center'>
<a
                href="/"
                className="px-10 text-2xl py-5 font-semibold  group relative  text-white bg-black rounded-[161px] hover:bg-white hover:text-black hover:shadow-[0px_0px_10px_6px_#00000014] transition-all duration-300 ease-in-out"
              >
                View All

              </a>
              </div>
</div>
<div className='bg-[#EBEBEB] px-4 py-5 rounded-xl'>
<h2 className='font-an text-4xl font-semibold text-center py-7'>News Articles</h2>
{articles1.map((article, index) => (
  <LatestNewsCard
    key={index}
    title={article.title}
    category={article.category}
    date={article.date}
   
  />
))}

<div className='py-8 text-center'>
<a
                href="/"
                className="px-10 text-2xl py-5 font-semibold  group relative  text-white bg-black rounded-[161px] hover:bg-white hover:text-black hover:shadow-[0px_0px_10px_6px_#00000014] transition-all duration-300 ease-in-out"
              >
                View All

              </a>
              </div>
</div>
</div>
<div className='lg:col-span-3 h-full'>
    <div className='bg-[#EBEBEB] px-4 py-5 rounded-xl h-full'>
<h2 className='font-an text-4xl font-semibold text-center py-7'>News Videos</h2>

<NewsSection/>
</div>
</div>
</div>



      </div>
    </section>
  )
}
