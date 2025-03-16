import Image from "next/image";

export default function DevicesSection() {
  const tvDevices = [
    { name: "Samsung", image: "https://web-assets.same.dev/DfZ6j1741588685428" },
    { name: "LG", image: "https://web-assets.same.dev/5lsyZ1741588686769" },
    { name: "VIZIO", image: "https://web-assets.same.dev/unbTf1741588686779" },
    { name: "Sony", image: "https://web-assets.same.dev/rLcaU1741588686772" },
    { name: "Xfinity", image: "https://web-assets.same.dev/lxBkS1741588686775" },
    { name: "Roku", image: "https://web-assets.same.dev/KSTSY1741588686773" },
    { name: "Fire TV", image: "https://web-assets.same.dev/72XUc1741588685451" },
    { name: "Google TV", image: "https://web-assets.same.dev/SyCjZ1741588686807" },
    { name: "PlayStation", image: "https://web-assets.same.dev/oONqH1741588686812" },
    { name: "Xbox", image: "https://web-assets.same.dev/5NpOR1741588686777" }
  ];

  const mobileDevices = [
    { name: "iPhone", image: "/assets/devices/iphone.svg" },
    { name: "iPad", image: "/assets/devices/ipad.svg" },
    { name: "Mac & Windows", image: "/assets/devices/mac.svg" },
    { name: "Fruit Vision Pro", image: "/assets/devices/vision-pro.svg" },
    { name: "AirPlay", image: "/assets/devices/airplay.svg" },
    { name: "Android", image: "/assets/devices/android.svg" },
    { name: "Web", image: "/assets/devices/web.svg" }
  ];

  return (
    <section className="py-16">
      <div className="container px-6">
        <h2 className="section-title text-center mb-10">Watch here and on your TV.</h2>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-8 mb-16">
          {tvDevices.map((device) => (
            <div key={device.name} className="flex flex-col items-center">
              <div className="relative h-10 w-20 mb-2">
                <Image
                  src={device.image}
                  alt={device.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-gray-300">{device.name}</span>
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-center mb-6">Watch on the go.</h3>
        <div className="flex justify-center mb-4">
          <a href="https://support.apple.com/guide/tvplus/welcome/web" className="text-blue-500 hover:text-blue-400 underline text-sm">
            See all the ways to watch Fruit TV+
          </a>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-7 gap-6 mt-8">
          {mobileDevices.map((device) => (
            <div key={device.name} className="flex flex-col items-center">
              <div className="flex items-center justify-center h-10 w-10 mb-2">
                {/* Using placeholder icons since we don't have the exact SVGs */}
                {device.name === "iPhone" && <div className="w-5 h-8 rounded-md border-2 border-gray-300"></div>}
                {device.name === "iPad" && <div className="w-7 h-6 rounded-md border-2 border-gray-300"></div>}
                {device.name === "Mac & Windows" && <div className="w-8 h-6 rounded border-2 border-gray-300"></div>}
                {device.name === "Fruit Vision Pro" && <div className="w-8 h-4 rounded-full border-2 border-gray-300"></div>}
                {device.name === "AirPlay" && <div className="w-6 h-6 rounded-full border-2 border-gray-300"></div>}
                {device.name === "Android" && <div className="w-5 h-6 rounded-md border-2 border-gray-300"></div>}
                {device.name === "Web" && <div className="w-6 h-6 rounded border-2 border-gray-300"></div>}
              </div>
              <span className="text-sm text-gray-300 text-center">{device.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
