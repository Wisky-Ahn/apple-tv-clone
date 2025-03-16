"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

// HeroSection 컴포넌트: 메인 히어로 섹션을 렌더링합니다.
export default function HeroSection() {
  return (
    // 전체 섹션: 최소 높이 설정, 중앙 정렬을 위한 flex 설정
    <section className="relative min-h-[650px] flex items-center">
      {/* 배경 이미지 영역 */}
      <div className="absolute inset-0 z-0">
        {/* Next.js Image 컴포넌트를 사용하여 배경 이미지 설정 */}
        <Image
          src="https://web-assets.same.dev/euDUX1741588677964"
          alt="Fruit TV+ Hero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero 컨텐츠 영역 */}
      <div className="container relative z-10 mt-24 md:mt-0 px-6">
        <div className="max-w-lg">
          {/* 메인 타이틀 */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Fruit TV+</h1>
          {/* 서브 타이틀 */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Get total access to Fruit TV+.
          </h2>
          {/* 설명 문구 */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Stream star-studded Fruit Originals and more.
          </p>
          {/* 무료 체험 버튼 */}
          <Button className="apple-button px-8 py-6 text-base">
            Accept Free Trial
          </Button>
          {/* 추가 안내 문구 */}
          <p className="mt-4 text-sm text-gray-400">
            7days free, then $9.99/month.
          </p>
        </div>
      </div>
    </section>
  );
}
