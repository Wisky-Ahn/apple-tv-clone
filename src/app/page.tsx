import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ContentCarousel from "@/components/sections/ContentCarousel";
import TopChartsSection from "@/components/sections/TopChartsSection";
import TrailersSection from "@/components/sections/TrailersSection";
import BingeSeasonsSection from "@/components/sections/BingeSeasonsSection";
import MLSSection from "@/components/sections/MLSSection";
import DevicesSection from "@/components/sections/DevicesSection";
import FAQSection from "@/components/sections/FAQSection";
import { topShows, topMovies, newestReleases, trailers, bingeSeasons } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-15">
        <HeroSection />

        <ContentCarousel
          title="Newest Releases"
          items={newestReleases}
          viewAllLink="/new"
        />

        <TopChartsSection
          showsData={topShows}
          moviesData={topMovies}
        />

        <TrailersSection
          title="Trailers"
          items={trailers}
          viewAllLink="/trailers"
        />

        <BingeSeasonsSection
          title="Binge Entire Seasons"
          shows={bingeSeasons}
          viewAllLink="/shows"
        />

        <MLSSection />

        <DevicesSection />

        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
