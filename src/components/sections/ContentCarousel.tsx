"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ContentCard from "@/components/ui/content-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ContentItem {
  id: string;
  title: string;
  imageUrl: string;
  genre?: string;
  year?: string;
  type?: string;
  description?: string;
  rank?: number;
  isNew?: boolean;
}

interface ContentCarouselProps {
  title: string;
  items: ContentItem[];
  viewAllLink?: string;
  showRank?: boolean;
}

export default function ContentCarousel({
  title,
  items,
  viewAllLink,
  showRank = false,
}: ContentCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth * 0.75
          : scrollLeft + clientWidth * 0.75;

      carouselRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8">
      <div className="container px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="section-title">{title}</h2>
          {viewAllLink && (
            <Link
              href={viewAllLink}
              className="text-blue-500 hover:text-blue-400 text-sm font-medium transition-colors"
            >
              See All
            </Link>
          )}
        </div>

        <div className="relative group">
          <div
            ref={carouselRef}
            className="flex space-x-4 overflow-x-scroll scrollbar-hide scroll-smooth pb-4"
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex-none w-[280px] sm:w-[320px]"
              >
                <ContentCard
                  title={item.title}
                  imageUrl={item.imageUrl}
                  genre={item.genre}
                  year={item.year}
                  type={item.type}
                  description={item.description}
                  rank={showRank ? index + 1 : undefined}
                  isNew={item.isNew}
                  href={`/show/${item.id}`}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}

// CSS utility to hide scrollbar
const scrollbarHideStyles = `
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
`;

// Add this to globals.css or create a separate style tag in your layout
// to hide scrollbars on the carousel
