'use client'

import { NewsVideos } from "@/app/components/NewsVideos"
import Image from "next/image"

export default function Article() {
  // Function to handle sharing
  const handleShare = async (platform: string) => {
    const title = "Heavy Rainfall Causes Severe Flooding in Mumbai, Disrupting Daily Life"
    const url = window.location.href

    switch (platform) {
      case 'native':
        if (navigator.share) {
          try {
            await navigator.share({
              title,
              url,
              text: "Read about the severe flooding in Mumbai"
            })
          } catch (err) {
            console.log('Error sharing:', err)
          }
        }
        break
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`, '_blank')
        break
      case 'copy':
        try {
          await navigator.clipboard.writeText(url)
          alert('Link copied to clipboard!')
        } catch (err) {
          console.log('Error copying:', err)
        }
        break
    }
  }

  return (
    <article className="max-w-[1212px] mx-auto px-4 py-6">
      {/* Back button */}
      <button 
        onClick={() => window.history.back()} 
        className="mb-4 text-gray-600 relative left-[-5%] hover:text-gray-900 flex items-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      {/* Article Header */}
      <h1 className="text-4xl font-bold mb-4">
        Heavy Rainfall Causes Severe Flooding in Mumbai, Disrupting Daily Life
      </h1>

      {/* Image Container */}
      <div className="relative aspect-video mb-6">
         <NewsVideos         videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
         thumbnailSrc={"https://media.istockphoto.com/id/2071028370/photo/parking-lot-in-the-heavy-rain-in-summer-thunderstorm.jpg?s=612x612&w=0&k=20&c=U-zY1KVttvyOsCGK-srDS6gqyi2ZeIZ13Lg0NYzJXt0="}/>
      </div>

      {/* Article Content */}
      <div className="prose max-w-none mb-8">
        <p className="text-gray-600 mb-4">
          Mumbai residents navigate waterlogged streets after continuous rainfall
        </p>

        <p className="mb-4">
          Incessant rainfall over the past 24 hours in Mumbai (MMR) has resulted in severe flooding, with over 30 locations experiencing significant water accumulation. The city recorded 500 mm of rainfall in 24 hours, marking the highest one-day rain this season.
        </p>

        <p className="mb-4">
          The waterlogged areas included Mumbai's local tracks - the city's lifeline - causing major disruptions to train services. Several low-lying areas reported water levels reaching up to 3 feet, while many arterial roads are still struggling to clear the excess water.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">Community Response and Challenges</h2>
        
        <p className="mb-4">
          Local authorities and disaster management teams are especially stretched, with residents in affected areas being moved to temporary shelters or staying with family and friends.
        </p>

        <h2 className="text-xl font-bold mt-6 mb-4">Emergency and Assessment Response</h2>
        
        <p className="mb-4">
          The BMC has activated its monsoon control room to aid stranded citizens, while the Maharashtra government is closely monitoring the situation, preparing to deploy additional forces for displaced families.
        </p>
      </div>

      {/* Author Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
          <Image
            src="/placeholder.svg?height=48&width=48"
            alt="Author avatar"
            width={48}
            height={48}
          />
        </div>
        <div>
          <h3 className="font-semibold">Michael Fox</h3>
          <p className="text-sm text-gray-600">Environmental Correspondent</p>
        </div>
      </div>

      {/* Share Section */}
      <div className="flex items-center gap-4 border-t pt-6">
        <span className="text-gray-600">Share:</span>
        <div className="flex gap-2">
          {/* Native Share */}
          <button
            onClick={() => handleShare('native')}
            className="p-2 hover:bg-gray-100 rounded-full"
            title="Share"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
            </svg>
          </button>
          
          {/* Facebook */}
          <button
            onClick={() => handleShare('facebook')}
            className="p-2 hover:bg-gray-100 rounded-full"
            title="Share on Facebook"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </button>

          {/* Twitter */}
          <button
            onClick={() => handleShare('twitter')}
            className="p-2 hover:bg-gray-100 rounded-full"
            title="Share on Twitter"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </button>

          {/* LinkedIn */}
          <button
            onClick={() => handleShare('linkedin')}
            className="p-2 hover:bg-gray-100 rounded-full"
            title="Share on LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </button>

          {/* Copy Link */}
          <button
            onClick={() => handleShare('copy')}
            className="p-2 hover:bg-gray-100 rounded-full"
            title="Copy link"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
            </svg>
          </button>
        </div>
      </div>
    </article>
  )
}

