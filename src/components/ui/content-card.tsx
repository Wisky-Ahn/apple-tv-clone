import Image from "next/image";
import Link from "next/link";

interface ContentCardProps {
  title: string;
  imageUrl: string;
  genre?: string;
  year?: string;
  type?: string;
  rank?: number;
  href?: string;
  description?: string;
  isNew?: boolean;
}

export default function ContentCard({
  title,
  imageUrl,
  genre,
  year,
  type,
  rank,
  href = "#",
  description,
  isNew = false,
}: ContentCardProps) {
  return (
    <Link href={href} className="group cursor-pointer">
      <div className="relative flex flex-col overflow-hidden transition-transform duration-300 group-hover:scale-105">
        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
          />

          {isNew && (
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded">
              NEW
            </div>
          )}

          {rank && (
            <div className="absolute top-0 left-0 w-8 h-8 flex items-center justify-center bg-black/70 text-white font-bold rounded-tl-lg">
              {rank}
            </div>
          )}
        </div>

        <div className="mt-2">
          {type && <p className="text-xs font-semibold text-gray-400 uppercase">{type}</p>}
          <h3 className="font-semibold mt-1 text-sm sm:text-base">{title}</h3>

          {description && (
            <p className="text-sm text-gray-400 mt-1 line-clamp-2">{description}</p>
          )}

          <div className="flex items-center gap-2 mt-1">
            {year && <span className="text-xs text-gray-400">{year}</span>}
            {genre && (
              <>
                {year && <span className="text-xs text-gray-400">•</span>}
                <span className="text-xs text-gray-400">{genre}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
