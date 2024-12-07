interface NewsCardProps {
    title: string;
    category: string;
    date: string;
  
  }
  
  export default function LatestNewsCard({
    title,
    category,
    date,
    
    
  }: NewsCardProps) {
    return (
      <article className="max-w-[497px] my-5 overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="py-4">
          <div className="px-4">
          
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-[#CDCDCD] px-2.5 py-0.5 text-base text-gray-700">
              {category}
            </span>
            
          </div>
          </div>
          <div className="px-4">
          <h2 className="mb-4 text-2xl font-an leading-tight text-gray-900">
            {title}
          </h2>
          
          <time className="text-base text-gray-500">{date}</time>
          </div>
        </div>
      </article>
    );
  }
  
  