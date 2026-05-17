import Image from "next/image";
import { FaUserCheck, FaBolt, FaChartLine, FaShieldAlt } from "react-icons/fa";

const aboutCards = [
  {
    icon: FaUserCheck,
    title: "AI Facial Recognition",
    desc: "Advanced facial recognition powered by neural networks",
  },
  {
    icon: FaBolt,
    title: "Real-Time Processing",
    desc: "Instant attendance tracking with edge computing",
  },
  {
    icon: FaChartLine,
    title: "Smart Analytics",
    desc: "AI-driven insights and attendance predictions",
  },
  {
    icon: FaShieldAlt,
    title: "Privacy First",
    desc: "Edge processing ensures data stays secure",
  },
];

function HomeContent() {
  return (
    <>
      <main className="text-white flex flex-col items-center font-michroma pt-20 md:pt-0 md:px-12">
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-[-10rem] left-[-5rem] w-[30rem] h-[30rem] bg-[#7F57F9]/30 rounded-full blur-3xl animate-blob"></div>

          <div className="absolute bottom-[-10rem] right-[-5rem] w-[30rem] h-[30rem] bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>

          <div className="absolute top-[40%] left-[40%] w-[25rem] h-[25rem] bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full max-w-6xl mx-auto px-6 md:px-10">
            <section className="font-michroma space-y-6 text-center md:text-left">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.3em] font-bold leading-tight">
                  VISIONID
                </h1>

                <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-400 text-sm sm:text-base tracking-widest">
                  <span className="hidden md:inline-block h-px w-6 bg-gray-500"></span>

                  <span>
                    by{" "}
                    <span className="text-white font-medium">
                      NeuroBridge Technologies
                    </span>
                  </span>
                </div>
              </div>

              <p className="border-l-4 border-[#7F57F9] pl-4 text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0 text-sm sm:text-base">
                Transform attendance tracking with AI-powered facial
                recognition. Real-time monitoring, smart analytics, and seamless
                integration for schools, businesses and residential buildings.
              </p>

              <div className="flex justify-center md:justify-start gap-4 pt-2">
                <button className="px-5 py-2 bg-[#7F57F9] hover:bg-[#6a46e6] transition rounded-md text-sm">
                  Get Started
                </button>

                <button className="px-5 py-2 border border-white/20 hover:border-white/50 transition rounded-md text-sm">
                  Learn More
                </button>
              </div>
            </section>

            <section className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[420px] md:max-w-[500px]">
                <Image
                  src="/images/product.png"
                  alt="VisionID Product"
                  width={600}
                  height={600}
                  priority
                  className="object-contain drop-shadow-2xl w-full h-auto"
                />
              </div>
            </section>
          </div>
        </div>

        <div className="h-screen w-full max-w-7xl mx-auto mt-16 md:mt-24 text-center space-y-10 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-michroma font-bold wrap-break-word">
              Powered by Innovation
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed px-2">
              An advanced feature management for modern attendance tracking and
              more.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {aboutCards.map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 text-center hover:bg-white/10 transition w-full"
              >
                <item.icon className="text-[#7F57F9] text-2xl sm:text-3xl mx-auto mb-3" />

                <h3 className="font-semibold text-base sm:text-lg wrap-break-word">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed wrap-break-word">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="w-full border-t border-white/10 bg-black text-white font-michroma">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 space-y-10">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
            <div className="space-y-2">
              <h2 className="text-xl tracking-[0.3em] font-bold">VISIONID</h2>
              <p className="text-gray-400 text-sm">
                Powered by{" "}
                <span className="text-white">NeuroBridge Technologies</span>
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-400">
              <span className="hover:text-white transition">
                AI Facial Recognition
              </span>
              <span className="hover:text-white transition">
                Real-Time Processing
              </span>
              <span className="hover:text-white transition">
                Smart Analytics
              </span>
              <span className="hover:text-white transition">Privacy First</span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between items-center gap-4 text-xs text-gray-500 border-t border-white/10 pt-6">
            <p>© {new Date().getFullYear()} VisionID. All rights reserved.</p>

            <p>
              Designed & developed by{" "}
              <span className="text-white">NeuroBridge Technologies</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomeContent;
