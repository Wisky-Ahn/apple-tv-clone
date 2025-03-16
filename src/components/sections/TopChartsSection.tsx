import Link from "next/link";
import ContentCard from "@/components/ui/content-card";

interface TopChartsSectionProps {
  showsData: {
    id: string;
    title: string;
    genre: string;
    imageUrl: string;
  }[];
  moviesData: {
    id: string;
    title: string;
    year: string;
    genre: string;
    imageUrl: string;
  }[];
}

export default function TopChartsSection({ showsData, moviesData }: TopChartsSectionProps) {
  return (
    <section className="py-16">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title mb-0">Top Chart: TV Shows</h2>
              <Link
                href="/shows/top"
                className="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors"
              >
                See All
              </Link>
            </div>

            <div className="space-y-6">
              {showsData.slice(0, 4).map((show, index) => (
                <div key={show.id} className="flex gap-4">
                  <div className="font-bold text-3xl text-gray-500 w-10 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <ContentCard
                      title={show.title}
                      imageUrl={show.imageUrl}
                      genre={show.genre}
                      href={`/show/${show.id}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="section-title mb-0">Top Chart: Movies</h2>
              <Link
                href="/movies/top"
                className="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors"
              >
                See All
              </Link>
            </div>

            <div className="space-y-6">
              {moviesData.slice(0, 4).map((movie, index) => (
                <div key={movie.id} className="flex gap-4">
                  <div className="font-bold text-3xl text-gray-500 w-10 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <ContentCard
                      title={movie.title}
                      imageUrl={movie.imageUrl}
                      genre={movie.genre}
                      year={movie.year}
                      href={`/movie/${movie.id}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
