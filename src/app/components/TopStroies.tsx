import { section } from 'framer-motion/client'
import React from 'react'
import NewsCard from './ui/NewsCard'
import img from '../../../public/image 1.png'
import VideoCard from './ui/VideoCard'
export default function TopStroies() {
  return (
    <section className='px-3 py-10'>


        <div className='text-center py-7 max-w-[919px] mx-auto'>
            <h2 className='font-an text-4xl font-semibold text-center pb-3'>Today’s Top Stories: Fresh Updates at 5 PM</h2>
      <p className='text-2xl '>Catch the latest headlines and videos from across the nation, updated 
      daily at 5 PM to keep you informed.</p>
        </div>
      <div className='max-w-[1352px] px-5 py-6 rounded-xl bg-[#EBEBEB] mx-auto'>


<div className='grid grid-cols-1  lg:grid-cols-5 gap-4'>


<div className='lg:col-span-3'>
<h2 className='font-an text-4xl font-semibold text-center py-7'>News Articles</h2>
<NewsCard
        title={`"India's "Mini Silicon Valley" Plan in Goa"`}
        category="Technology"
        date="Nov 11 2024, 11:57 AM IST"
        imageUrl={img.src}
        imageAlt="Person speaking at a tech event"
        description="The Indian government plans to develop Goa into a tech hub with a focus on data centers, semiconductor design, and electronics production."
      />
<NewsCard
        title={`"India's "Mini Silicon Valley" Plan in Goa"`}
        category="Technology"
        date="Nov 11 2024, 11:57 AM IST"
        imageUrl={img.src}
        imageAlt="Person speaking at a tech event"
        description="The Indian government plans to develop Goa into a tech hub with a focus on data centers, semiconductor design, and electronics production."
      />
</div>
<div className='lg:col-span-2'>
<h2 className='font-an text-4xl font-semibold text-center py-7'>News Videos</h2>

<VideoCard
        videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        thumbnailSrc={img.src}
        title="Community Cleanup Initiative Makes an Impact"
        category="Community"
        timestamp="2 hours ago"
        
      />
       <VideoCard
        videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        thumbnailSrc={img.src}
        title="Community Cleanup Initiative Makes an Impact"
        category="Community"
        timestamp="2 hours ago"
        
      />
</div>
</div>

<div className='py-10 text-center'>
<a
                href="/"
                className="px-6 py-5 group relative font-semibold  text-white bg-black rounded-[161px] hover:bg-white hover:text-black hover:shadow-[0px_0px_10px_6px_#00000014] transition-all duration-300 ease-in-out"
              >
                Explore All Stories<svg className="ml-2 inline" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path  className="group-hover:fill-black" fillRule="evenodd" clipRule="evenodd" d="M10.7833 10.7836C10.9239 10.643 11.1147 10.564 11.3136 10.564C11.5125 10.564 11.7033 10.643 11.8439 10.7836L21.8778 20.8175L21.8778 14.1424C21.8742 14.0417 21.891 13.9414 21.927 13.8473C21.9631 13.7533 22.0178 13.6675 22.0877 13.595C22.1577 13.5226 22.2415 13.4649 22.3342 13.4256C22.4269 13.3862 22.5266 13.3659 22.6273 13.3659C22.728 13.3659 22.8277 13.3862 22.9204 13.4256C23.0131 13.4649 23.097 13.5226 23.1669 13.595C23.2369 13.6675 23.2915 13.7533 23.3276 13.8473C23.3636 13.9414 23.3804 14.0417 23.3768 14.1424V22.6277C23.3767 22.8264 23.2977 23.017 23.1572 23.1575C23.0166 23.2981 22.8261 23.3771 22.6273 23.3772L14.142 23.3772C14.0414 23.3807 13.941 23.364 13.847 23.3279C13.753 23.2919 13.6671 23.2372 13.5947 23.1673C13.5222 23.0973 13.4646 23.0135 13.4252 22.9208C13.3859 22.8281 13.3656 22.7284 13.3656 22.6277C13.3656 22.5269 13.3859 22.4273 13.4252 22.3345C13.4646 22.2418 13.5222 22.158 13.5947 22.0881C13.6671 22.0181 13.753 21.9635 13.847 21.9274C13.941 21.8913 14.0414 21.8746 14.142 21.8781L20.8171 21.8781L10.7833 11.8443C10.6426 11.7036 10.5636 11.5129 10.5636 11.314C10.5636 11.115 10.6426 10.9243 10.7833 10.7836Z" fill="white"/>
</svg>

              </a>
</div>

      </div>
    </section>
  )
}
