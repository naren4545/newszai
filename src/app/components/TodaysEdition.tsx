import { section } from 'framer-motion/client'
import React from 'react'
import NewsCard from './ui/NewsCard'
import img from '../../../public/image 1.png'
import VideoCard from './ui/VideoCard'
import TodaysEditionCard from './ui/TodaysEditionCard'
export default function TodaysEdition() {
  return (
    <section className='px-3 py-10 bg-[#EBEBEB]'>


        <div className='text-center py-7 max-w-[919px] mx-auto'>
            <h2 className='font-an text-4xl font-semibold text-center pb-3'>Today's Edition</h2>
      <p className='text-2xl '>Catch up on the most significant stories from across the country 
      and around the world.</p>
        </div>
      <div className='max-w-[1352px] px-5 py-6 rounded-xl  mx-auto'>


<div className='grid grid-cols-1  '>


<div className='lg:col-span-1'>

<TodaysEditionCard
        title={`"India's "Mini Silicon Valley" Plan in Goa"`}
        category="Technology"
        date="Nov 11 2024, 11:57 AM IST"
      
       
        description="TechCorp is excited to announce its Annual Innovation Summit 2024, 
scheduled to take place on November 15-16, 2024, at the Moscone Center, 
San Francisco."  />
<TodaysEditionCard
        title={`"India's "Mini Silicon Valley" Plan in Goa"`}
        category="Technology"
        date="Nov 11 2024, 11:57 AM IST"
      
       
        description="TechCorp is excited to announce its Annual Innovation Summit 2024, 
scheduled to take place on November 15-16, 2024, at the Moscone Center, 
San Francisco."  />
<TodaysEditionCard
        title={`"India's "Mini Silicon Valley" Plan in Goa"`}
        category="Technology"
        date="Nov 11 2024, 11:57 AM IST"
      
       
        description="TechCorp is excited to announce its Annual Innovation Summit 2024, 
scheduled to take place on November 15-16, 2024, at the Moscone Center, 
San Francisco."  />
</div>

</div>

<div className='py-10 text-center'>
<a
                href="/"
                className="px-10 py-6 group relative text-3xl font-semibold  text-white bg-black rounded-[161px] hover:bg-white hover:text-black hover:shadow-[0px_0px_10px_6px_#00000014] transition-all duration-300 ease-in-out"
              >
                Explore More

              </a>
</div>

      </div>
    </section>
  )
}
