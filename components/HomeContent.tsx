import Image from "next/image";

function HomeContent() {
  return (
    <main className="min-h-screen text-white flex items-center px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 w-full">
        <section className="font-michroma space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-widest font-bold leading-tight">
            VISIONID
          </h1>

          <p className="border-l-4 border-[#7F57F9] pl-4 text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0 text-sm sm:text-base">
            Transform attendance tracking with AI-powered facial recognition.
            Real-time monitoring, smart analytics, and seamless integration for
            schools, businesses and residential buildings.
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
          <div className="relative w-full max-w-105 md:max-w-[500px]">
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
    </main>
  );
}

export default HomeContent;
