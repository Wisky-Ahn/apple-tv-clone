"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface BingeShow {
  id: string;
  title: string;
  imageUrl: string;
}

interface BingeSeasonsSectionProps {
  title: string;
  shows: BingeShow[];
  viewAllLink?: string;
}

export default function BingeSeasonsSection({
  title,
  shows,
  viewAllLink,
}: BingeSeasonsSectionProps) {
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
            {shows.map((show) => (
              <div
                key={show.id}
                className="flex-none w-[280px] sm:w-[320px]"
              >
                <Link href={`/show/${show.id}`} className="group cursor-pointer">
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={show.imageUrl}
                      alt={show.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent flex items-end p-4">
                      <h3 className="text-lg font-bold">{show.title}</h3>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

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
