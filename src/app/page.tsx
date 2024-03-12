import CoursesDetail from "@/components/CoursesDetail";
import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] ">
    <HeroSection />
    <FeaturedCourses />
    <CoursesDetail />
    </main>
    </>
  );
}
