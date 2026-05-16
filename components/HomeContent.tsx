import Image from "next/image";

function HomeContent() {
  return (
    <main className="min-h-screen text-white flex items-center px-3">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 w-full">
        <section className="font-michroma space-y-6">
          <h1 className="text-6xl tracking-widest">VISIONID</h1>

          <p className="border-l-4 border-gray-400 pl-4 text-gray-200 leading-relaxed max-w-md rounded-md">
            Transform attendance tracking with AI-powered facial recognition.
            Real-time monitoring, smart analytics, and seamless integration for
            schools, businesses and residential buildings.
          </p>
        </section>

        <section className="flex justify-center md:justify-end">
          <Image
            src="/images/product.png"
            alt="VisionID Product"
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
          />
        </section>
      </div>
    </main>
  );
}

export default HomeContent;
