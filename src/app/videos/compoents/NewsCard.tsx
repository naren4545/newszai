import { NewsVideos } from "@/app/components/NewsVideos";

interface NewsCardProps {
    imageUrl: string;
    category: string;
    date: string;
    title: string;
    description: string;
  }
  
  export default function NewsCard({ imageUrl, category, date, title, description }: NewsCardProps) {
    return (
      <div className="max-w-2xl overflow-hidden rounded-lg bg-white shadow">
        <div className="">
           <NewsVideos         videoSrc="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          thumbnailSrc={imageUrl}/>
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700">
                {category}
              </span>
              <span className="text-sm text-[#636363]">
                {date}
              </span>
            </div>
            <button 
              className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              aria-label="Share"
            >
                    <svg width="25" height="22" viewBox="0 0 25 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.9362 10.5L16.625 4.18875V7.57125L15.4425 7.75C9.51625 8.58875 5.50125 11.6962 3.205 16.4537C6.395 14.1987 10.355 13.1125 15.25 13.1125H16.625V16.8112M13.875 14.515C7.72875 14.8037 3.32875 17.0175 0.125 21.5C1.5 14.625 5.625 7.75 15.25 6.375V0.875L24.875 10.5L15.25 20.125V14.4875C14.7962 14.4875 14.3425 14.5012 13.875 14.515Z" fill="black"/>
</svg>
            </button>
          </div>
        </div>
        <div className="p-4">
          <h2 className="mb-2 text-xl font-bold text-gray-900">
            {title}
          </h2>
          <p className="text-sm text-gray-600">
            {description}
          </p>
        </div>
      </div>
    )
  }
  
  