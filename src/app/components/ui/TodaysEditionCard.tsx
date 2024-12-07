interface NewsCardProps {
    title: string;
    category: string;
    date: string;
   
    description: string;
  }
  
  export default function TodaysEditionCard({
    title,
    category,
    date,
    
    description,
  }: NewsCardProps) {
    return (
      <article className="max-w-[1212px] mx-auto my-10 p-4 py-10 overflow-hidden rounded-lg bg-white shadow-sm">
        <div className="py-4">
          <div className="px-4">
          <h2 className="pb-6 text-[40px] leading-[50px] font-bold  text-gray-900">
            {title}
          </h2>
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-[#CDCDCD] px-2.5 py-0.5 text-base text-gray-700">
              {category}
            </span>
            <time className="text-base text-gray-500">{date}</time>
          </div>
          </div>
          
          <div className="px-4">
         
          <p className="text-3xl ">{description}</p>
          </div>
        </div>
      </article>
    );
  }
  
  