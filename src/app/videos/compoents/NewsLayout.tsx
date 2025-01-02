"use client"

import { NewsVideos } from "@/app/components/NewsVideos"
import VideoCard from "@/app/components/ui/VideoCard"

export default function NewsLayout() {

  const handleShare = async (title: string) => {
    const shareData = {
      title: title,
      url: `${window.location.href}/${encodeURIComponent(title)}`
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(`${shareData.title} - ${shareData.url}`)
        alert('Link copied to clipboard!')
      }
    } catch (error) {
      console.error('Error sharing:', error)
    }
  }


    // Dummy data for videos
    const latestVideo = {
      thumbnail: "/placeholder.svg?height=400&width=600",
      category: "Environment",
      timestamp: "Nov 11 2024, 11:57 AM IST",
      title: "Smog in Lahore and Delhi: What Caused the Latest Spike",
      description: "Recent smog levels in Lahore and Delhi have spiked, reaching Lahore's highest peak in five years."
    }
  
    const exploreVideos = Array(4).fill({
      thumbnail: "/placeholder.svg?height=100&width=150",
      category: "Technology",
      timestamp: "Nov 11 2024, 11:57 AM IST",
      title: "India's Mini Silicon Valley Plan in Goa",
      link: "Continue Reading"
    })
  
    return (
      <div className="max-w-[1337px] md:py-16 py-10 mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Latest Videos Section */}
          <div className="col-span-2">
            <h2 className="md:text-4xl text-center font-bold mb-4">Latest Videos</h2>
            <div className=" rounded-lg overflow-hidden p-4 [box-shadow:0px_0px_4px_0px_#00000040]">
             <NewsVideos         videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 thumbnailSrc={latestVideo.thumbnail}/>
              {/* <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                </div>
              </button> */}
              <div className="p-4">
                <div className="flex items-center gap-4 mb-2">
                  <span className="px-2 py-1 bg-[#CDCDCD] rounded-md text-base text-[#636363]">
                    {latestVideo.category}
                  </span>
                  <span className="text-base text-[#636363]">
                    {latestVideo.timestamp}
                  </span>
                  <button className="ml-auto"  onClick={async() => await handleShare(latestVideo.title)}>
                  <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.9362 10.5L16.625 4.18875V7.57125L15.4425 7.75C9.51625 8.58875 5.50125 11.6962 3.205 16.4537C6.395 14.1987 10.355 13.1125 15.25 13.1125H16.625V16.8112M13.875 14.515C7.72875 14.8037 3.32875 17.0175 0.125 21.5C1.5 14.625 5.625 7.75 15.25 6.375V0.875L24.875 10.5L15.25 20.125V14.4875C14.7962 14.4875 14.3425 14.5012 13.875 14.515Z" fill="black"/>
</svg>

                  </button>
                </div>
                <h3 className="text-4xl font-bold mb-2">{latestVideo.title}</h3>
                <p className="text-2xl text-[#636363]">{latestVideo.description}</p>
              </div>
            </div>
          </div>
  
          {/* Explore More Section */}
          <div>
            <h2 className="md:text-4xl text-center font-bold mb-4">Explore More</h2>
            <div className="space-y-4">
              {exploreVideos.map((video, index) => (
                <div key={index} className="flex gap-4 py-2">
                  <div className=" w-36 h-24 flex-shrink-0">
                  <NewsVideos  thumbnailSrc="data:image/jpeg;base64,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"       videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
 />
                    {/* <button className="absolute inset-0 flex items-center justify-center">
                      <div className="w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                        <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent border-l-white ml-0.5"></div>
                      </div>
                    </button> */}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 bg-[#CDCDCD]  text-[#636363] rounded-md text-xs">
                        {video.category}
                      </span>
                      <span className="text-xs text-gray-600">
                        {video.timestamp}
                      </span>
                    </div>
                    <h3 className="font-medium text-2xl mb-1 line-clamp-2">{video.title}</h3>
                    <a href="#" className="text-sm hover:underline">
                      {video.link}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  