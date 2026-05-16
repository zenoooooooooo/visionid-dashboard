import HomeContent from "@/components/HomeContent";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-r from-black via-black to-[#7F57F9] text-white px-50">
      <Nav />
      <HomeContent />
    </div>
  );
}
