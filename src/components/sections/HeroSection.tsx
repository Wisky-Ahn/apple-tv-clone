"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVideo(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[650px]">
      {/* Background: image → video */}
      <div className="absolute inset-0 z-0">
        {!showVideo ? (
          <Image
            src="/image/herobackground.png"
            alt="Apple TV+ Hero"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <video
            src="/video/hero-video.mp"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover w-full h-full"
          />
        )}
      </div>

      {/* Top‑left icon */}
      <div className="absolute top-[80px] left-10 z-50">
        <Image
          src="/image/appletv+icon.png"
          alt="Logo Icon"
          width={96}
          height={96}
        />
      </div>

      {/* Bottom‑left hero content (½ size) */}
      <div className="absolute bottom-6 left-6 z-20 max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Apple TV+</h1>
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          Get total access to Apple TV+.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-4">
          Stream star‑studded Fruit Originals and more.
        </p>
        <Button className="apple-button px-6 py-4 text-sm">
          Accept Free Trial
        </Button>
        <p className="mt-2 text-xs text-gray-400">
          7 days free, then $9.99/month.
        </p>
      </div>
    </section>
  );
}
