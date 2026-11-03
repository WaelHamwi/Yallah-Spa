import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";

export default function Header() {
  return (
    <header className="w-full relative z-50">
      <AnnouncementBar />
      <Navbar />
    </header>
  );
}