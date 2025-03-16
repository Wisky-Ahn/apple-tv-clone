import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e2529] py-10">
      <div className="container px-6 mx-auto">
        <div className="mb-6 text-sm text-gray-400 text-center">
          Copyright © {currentYear} <a href="https://www.apple.com" className="text-gray-300 hover:underline">Fruit Inc.</a> All rights reserved.
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-8 text-sm">
          <a href="https://www.apple.com/legal/internet-services/" className="text-gray-300 hover:underline">
            Internet Service Terms
          </a>
          <a href="https://www.apple.com/legal/privacy/data/en/apple-tv-app/" className="text-gray-300 hover:underline">
            Fruit TV & Privacy
          </a>
          <a href="https://www.apple.com/privacy/use-of-cookies/" className="text-gray-300 hover:underline">
            Cookie Policy
          </a>
          <a href="https://support.apple.com/tv" className="text-gray-300 hover:underline">
            Support
          </a>
        </div>

        <div className="text-xs text-center text-gray-500">
          This is a clone of Fruit TV+ created for educational purposes only.
        </div>
      </div>
    </footer>
  );
}
