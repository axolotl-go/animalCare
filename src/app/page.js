import Hero from "@/app/_sections/Hero";
import History from "@/app/_sections/History";
import Navbar from "@/app/_sections/Navbar";
import AboutUs from "@/app/_sections/AboutUs";
import WhatIs from "@/app/_sections/WhatIs";
import Organizations from "@/app/_sections/Organizations";
import Footer from "./_sections/Footer";

export default function Home() {
  return (
    <main className="max-w-7xl flex flex-col items-center gap-12 mx-auto mb-10">
      <Navbar />
      <Hero />
      <WhatIs />
      <History />
      <Organizations />
      <AboutUs />
      <Footer />
    </main>
  );
}