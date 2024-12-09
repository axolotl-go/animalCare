import React from "react";
import We from "/public/AMPJU3RJWFHDDCMPOQIAGZLSTQ.jpg";
import Image from "next/image";

export default function WhatIs() {
  return (
    <div className="container mx-auto px-4" id="WhatIs">
      <p className="text-4xl font-extrabold text-center mb-10">¿Que es?</p>

      <div className="grid lg:grid-cols-2 lg:gap-4 lg:mt-4 mt-10 items-center text-center">
        <Image
          className=" w-full rounded-lg aspect-square float-left"
          src={We}
          alt="Dog"
        />

        <p className="text-lg md:text-xl lg:text-2xl xl:text-2xl font-extrabold">
          El maltrato animal es cualquier acción que cause daño, sufrimiento o
          muerte innecesarios a los animales, como abandono, violencia física,
          confinamiento en condiciones inadecuadas, privación de alimentos y
          agua, uso en peleas o espectáculos crueles. Puede ser causado por
          falta de educación, crueldad intencional, explotación comercial, y
          falta de leyes efectivas. Sus consecuencias incluyen lesiones,
          enfermedades, trauma, y problemas sociales y ambientales. Se
          manifiesta en formas como abandono, caza furtiva, experimentación,
          entre otros. Es crucial prevenirlo con educación, adopción
          responsable, leyes y respeto hacia los animales.
        </p>
      </div>
    </div>
  );
}
