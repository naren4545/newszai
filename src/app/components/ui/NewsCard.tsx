interface NewsCardProps {
  title: string;
  category: string;
  date: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
}

export default function NewsCard({
  title,
  category,
  date,
  imageUrl,
  imageAlt,
  description,
}: NewsCardProps) {
  return (
    <article className="max-w-[691px] mx-auto my-5 overflow-hidden rounded-lg bg-white shadow-sm">
      <div className="py-4">
        <div className="px-4">
        <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900">
          {title}
        </h2>
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-full bg-[#CDCDCD] px-2.5 py-0.5 text-base text-gray-700">
            {category}
          </span>
          <time className="text-base text-gray-500">{date}</time>
        </div>
        </div>
        <hr className="mb-4 border-t border-[#636363]" />
        <div className="px-4">
        {imageUrl && (
          <div className="mb-4 text-center">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="inline  rounded-md object-cover"
            />
          </div>
        )}
        <p className="text-xl text-gray-600">{description}</p>
        </div>
      </div>
    </article>
  );
}

