import React from "react";
import HeroIMage from "/public/loge.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <main className="text-center mt-16">
      <Image className="h-auto w-screen" src={HeroIMage} alt="Image" />
      <div className="container mx-auto px-4">
        <p className="text-5xl font-black">Animal Awareness</p>
        <p className="text-2xl font-extrabold">
          ¡Porque su vida también importa! ¡Únete y protege a nuestros amigos de
          cuatro patas!
        </p>
      </div>
    </main>
  );
}
