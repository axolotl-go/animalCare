import Hero from "@/app/_sections/Hero";
import History from "@/app/_sections/History";
import Navbar from "@/app/_sections/Navbar";
import Team from "@/app/_sections/Team";
import WhatIs from "@/app/_sections/WhatIs";

export default function Home() {
  return (
    <main className="max-w-7xl flex flex-col items-center gap-12 mx-auto mb-10">
      <Navbar />
      <Hero />
      <WhatIs />
      <History />
      <Team />

    </main>
  );
}
