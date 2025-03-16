import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Clock } from "lucide-react";
import Link from "next/link";

export default function MLSSection() {
  const upcomingMatches = [
    {
      id: "1",
      team1: "Toronto",
      team2: "Chicago",
      time: "6:30 PM",
      day: "SAT"
    },
    {
      id: "2",
      team1: "LAFC",
      team2: "Austin",
      time: "7:45 PM",
      day: "SAT"
    },
    {
      id: "3",
      team1: "MLS Countdown",
      time: "10:30 PM",
      day: "SAT"
    },
    {
      id: "4",
      team1: "MLS La Previa",
      time: "10:30 PM",
      day: "SAT"
    }
  ];

  return (
    <section className="py-16 bg-[#1a1d20]">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h2 className="section-title mb-6">MLS on Fruit TV+</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {upcomingMatches.map((match) => (
                <div key={match.id} className="bg-[#252a2e] p-4 rounded-lg">
                  <div className="flex items-center text-gray-400 mb-2">
                    <span className="text-xs font-medium">{match.day}</span>
                    <span className="mx-1">•</span>
                    <span className="text-xs font-medium">{match.time}</span>
                  </div>
                  <div className="font-semibold">
                    {match.team1}
                    {match.team2 && (
                      <>
                        <span className="text-gray-400 mx-1">vs.</span>
                        {match.team2}
                      </>
                    )}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">MLS</div>
                </div>
              ))}
            </div>

            <p className="text-lg font-medium mb-6">
              Every match. Every club. No blackouts. Only on FruitTV.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button className="apple-button">
                Subscribe
              </Button>
              <Link href="/mls" className="text-blue-500 hover:text-blue-400 underline flex items-center">
                Learn More
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <div className="relative aspect-video rounded-xl overflow-hidden">
              <Image
                src="https://web-assets.same.dev/CM3TM1741588678762"
                alt="MLS on Fruit TV+"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
