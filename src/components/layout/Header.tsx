"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const clearInput = () => {
    setSearchValue("");
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-[#000000]/90 backdrop-blur-md" : "bg-[#000000]"
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between px-4 lg:px-8 py-3">
        {/* 왼쪽: 로고 및 "Open TV" 버튼 영역 */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-2">
            <button
              className="nav-header_punchout-button flex items-center space-x-2"
              data-metrics-click='{ "actionType": "open", "targetType": "button", "targetId": "OpenInAppleTV" }'
              type="button"
            >
              <div className="tab__icon">
                <svg
                  height="24"
                  viewBox="0 0 96 96"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="open_tv_logo"
                  aria-hidden="true"
                >
                  <path
                    d="m90.3078 5.8876c-4.541-4.541-10.791-5.5176-19.6777-5.5176h-45.6054c-8.4961 0-14.795 1.0254-19.336 5.5176-4.4922 4.541-5.4687 10.791-5.4687 19.2871v45.3613c0 8.88673.9277 15.13673 5.4199 19.62892 4.5898 4.49218 10.8398 5.46878 19.6777 5.46878h45.3125c8.8867 0 15.1856-.9766 19.6777-5.46878 4.541-4.54101 5.469-10.74219 5.469-19.62892v-45.0683c0-8.8379-.928-15.0879-5.469-19.5801zm-.586 18.3105v47.6563c0 5.76169-.879 10.888647-3.8573 13.86716-2.9785 3.02735-8.1543 3.90625-13.916 3.90625h-47.9492c-5.7129 0-10.8887-.92773-13.916-3.90625-2.9786-2.978513-3.8086-8.10547-3.8086-13.86716v-47.3633c0-6.0547.83-11.2305 3.8086-14.209 2.9785-3.0273 8.2519-3.8574 14.2578-3.8574h47.6074c5.7617 0 10.9375.9277 13.916 3.9062 3.0273 2.9786 3.8573 8.0567 3.8573 13.8672zm-63.7694 13.1836c3.9551.4395 7.0801-3.9551 6.7871-7.4219-3.9551.1465-6.8848 3.711-6.7871 7.4219zm26.9531-5.0293h-5.0781v5.8106h-3.5156v3.955h3.5156v14.2579c0 4.9316 1.9531 6.6894 7.0312 6.6894 1.0743 0 2.295-.0976 2.6856-.1953v-4.1504c-.1953.1465-1.1231.1465-1.6113.1465-2.002 0-3.0274-.8301-3.0274-3.0762v-13.6719h4.7363v-3.955h-4.7363zm-13.4277 22.0215c-1.9043-.7812-3.0762-2.0508-3.8086-3.8086-.7813-1.9531-.5371-3.9062 0-5.5664.3418-1.123 1.123-2.4902 3.0273-3.6133-1.416-2.1484-3.6621-3.2226-6.2988-3.2226-3.0273 0-4.7851 1.5625-6.2988 1.5625-1.2696 0-2.6367-1.4649-5.0781-1.4649-2.6368 0-4.7364 1.0742-6.1524 2.8321-1.6601 2.0019-2.3437 4.5898-2.3437 7.1777 0 4.2969 1.9531 9.2285 4.7363 12.4023 1.416 1.6602 2.5879 2.4903 3.9551 2.4903 2.0019 0 3.125-1.4649 5.5175-1.4649 1.0254 0 1.9532.4395 2.5391.6348.9766.3906 1.6602.7324 2.832.7324 1.2207 0 2.1973-.4394 2.7832-1.0742 2.1973-2.0508 3.9063-5.0781 4.5899-7.6172zm34.9121 8.4961 8.9355-24.707h-5.5664l-6.0547 19.873-6.3476-19.873h-5.4199l9.1308 24.707z"
                    fill="rgba(235, 235, 245, 0.6)"
                  ></path>
                </svg>
              </div>
              <span className="nav-header__punchout-button-help-text typography-body text-sm text-gray-400">
                Open TV
              </span>
              <svg
                className="open_tv_arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 72 72"
                height="13"
                width="13"
                aria-hidden="true"
              >
                <path
                  d="M61.559 47.094V6.638c0-2.456-1.551-4.093-4.05-4.093l-40.456.086c-2.412 0-3.963 1.767-3.963 3.792s1.766 3.748 3.791 3.748h12.796l20.508-.775-7.799 6.893-38.473 38.56c-.776.775-1.207 1.723-1.207 2.628 0 2.025 1.81 3.964 3.921 3.964.99 0 1.896-.388 2.671-1.164l38.517-38.56 6.936-7.798-.818 19.603v13.744c0 1.982 1.723 3.791 3.834 3.791 2.025 0 3.792-1.68 3.792-3.963z"
                  fill="rgba(255,255,255,0.6)"
                ></path>
              </svg>
            </button>
          </Link>
        </div>

        {/* 중앙: 네비게이션 링크 영역 */}
        <div className="flex-1 flex justify-center">
          <nav className="flex items-center space-x-6">
            <Link href="/" className="header-link" style={{ fontSize: 19, fontWeight: 600, color: "white" }}>
              Apple TV+
            </Link>
            <Link href="/mls" className="header-link" style={{ fontSize: 18, fontWeight: 600 }}>
              MLS
            </Link>
          </nav>
        </div>

        {/* 오른쪽: Search Form 및 Sign In, 모바일 메뉴 */}
        <div className="flex items-center space-x-4">
          {/* Search Form */}
          <form role="search" className="relative">
            {/* 좌측 돋보기 아이콘 */}
            <svg
              height="15" // 크기를 1/3로 줄임
              viewBox="0 0 64 64"
              width="15" // 크기를 1/3로 줄임
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" // 패딩 제거
              aria-hidden="true"
              fill="gray" // 돋보기 아이콘 색상 회색으로 설정
            >
              <path d="m26.72 50.414c5.205 0 10.005-1.683 13.932-4.488l14.773 14.773c.686.686 1.59 1.028 2.556 1.028 2.026 0 3.46-1.558 3.46-3.553 0-.935-.312-1.807-.998-2.493l-14.68-14.71c3.086-4.052 4.925-9.07 4.925-14.524 0-13.184-10.784-23.968-23.967-23.968-13.153 0-23.968 10.753-23.968 23.968 0 13.183 10.784 23.967 23.968 23.967zm0-5.174c-10.285 0-18.793-8.508-18.793-18.793 0-10.286 8.508-18.794 18.794-18.794 10.285 0 18.793 8.508 18.793 18.794 0 10.285-8.508 18.793-18.793 18.793z"></path>
            </svg>
            {/* 검색 input */}
            <input
              name="query"
              placeholder="Search"
              autoComplete="off"
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="search-header__search-input pl-7 pr-7 bg-[#000000] border border-white text-white rounded-[5px]" // border-radius 추가
              id="search-header-form-input-box"
              style={{ width: "172px", height: "28px" }} // input 크기 조정
            />
            {/* 우측 x 아이콘: input 값이 있을 때만 표시 */}
            {searchValue && (
              <button
                type="button"
                onClick={clearInput}
                aria-label="Clear text"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 gray-400"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                  className="search-header__close-icon text-gray-500 hover:text-gray-700"
                  fill="gray" 
                >
                  <path d="M7 14c3.83 0 7-3.177 7-7 0-3.83-3.177-7-7.007-7C3.171 0 0 3.17 0 7c0 3.823 3.177 7 7 7ZM4.694 9.882a.562.562 0 0 1-.563-.57c0-.15.055-.294.165-.397l1.901-1.908-1.9-1.901a.55.55 0 0 1-.166-.398c0-.323.247-.563.563-.563.158 0 .281.055.391.158L7 6.21l1.928-1.915a.52.52 0 0 1 .392-.165c.315 0 .57.247.57.563a.53.53 0 0 1-.172.405L7.81 7.007l1.9 1.9a.524.524 0 0 1 .172.406.57.57 0 0 1-.576.57.543.543 0 0 1-.405-.165L7 7.81 5.106 9.718a.57.57 0 0 1-.412.164Z"></path>
                </svg>
              </button>
            )}
          </form>

          {/* 데스크탑용 Sign In 버튼 */}
          <div className="hidden md:block">
            <Button
              className="apple-button flex items-center"
              variant="ghost"
              size="sm"
            >
                <svg
                height="10"
                width="11"
                viewBox="0 0 10 11"
                xmlns="http://www.w3.org/2000/svg"
                className="commerce-button__avatar"
                role="presentation"
                >
                <path
                  d="M5 5.295c-1.296 0-2.385-1.176-2.385-2.678C2.61 1.152 3.716 0 5 0c1.29 0 2.39 1.128 2.39 2.611C7.39 4.12 6.297 5.295 5 5.295zM1.314 11C.337 11 0 10.698 0 10.144c0-1.55 1.929-3.685 5-3.685 3.065 0 5 2.135 5 3.685 0 .554-.337.856-1.314.856z"
                  fill="#fff"
                ></path>
              </svg>
              Sign In
            </Button>
          </div>

          {/* 모바일 메뉴 */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#1e2529] border-l border-gray-700"
              >
                <div className="flex flex-col space-y-6 mt-12">
                  <Link href="/" className="header-link text-lg">
                    Fruit TV+
                  </Link>
                  <Link href="/mls" className="header-link text-lg">
                    MLS
                  </Link>
                  <Link href="/search" className="header-link text-lg">
                    Search
                  </Link>
                  <Button className="apple-button mt-4 w-full">
                    <svg
                      height="14"
                      width="14"
                      viewBox="0 0 10 11"
                      xmlns="http://www.w3.org/2000/svg"
                      className="commerce-button__avatar mr-1"
                      role="presentation"
                    >
                      <path
                        d="M5 5.295c-1.296 0-2.385-1.176-2.385-2.678C2.61 1.152 3.716 0 5 0c1.29 0 2.39 1.128 2.39 2.611C7.39 4.12 6.297 5.295 5 5.295zM1.314 11C.337 11 0 10.698 0 10.144c0-1.55 1.929-3.685 5-3.685 3.065 0 5 2.135 5 3.685 0 .554-.337.856-1.314.856z"
                        fill="#fff"
                      ></path>
                    </svg>
                    Sign In
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
