import Image from "next/image";

export default function AboutUs() {
  return (
    <main className="container mx-auto px-4" id="AboutUs">
      <p className="text-4xl font-extrabold text-center mb-10">
        Sobre nosotros
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center">

        <p className="font-semibold text-slate-900 md:col-span-2">
          En Animal Care, creemos firmemente que los animales, al igual que los
          seres humanos, son entidades vitales que merecen respeto y compasión.
          Somos un grupo de estudiantes de preparatoria unidos por una causa
          común: sensibilizar a la sociedad sobre los derechos de los animales y
          el rechazo absoluto al maltrato hacia ellos. Los animales no son menos
          importantes por compartir el mundo con los humanos. El abuso hacia
          cualquier criatura viva y consciente es no solo aberrante sino un
          reflejo de la falta de empatía hacia la vida misma. A través de la
          educación y la conciencia, buscamos promover un cambio significativo
          en la forma en que los animales son tratados, no solo por el bien de
          ellos, sino por el de toda nuestra sociedad.
        </p>
        <p className="font-semibold text-slate-900">
          Los animales no son menos importantes por compartir el mundo con los
          humanos. El abuso hacia cualquier criatura viva y consciente es no
          solo aberrante sino un reflejo de la falta de empatía hacia la vida
          misma. A través de la educación y la conciencia, buscamos promover un
          cambio significativo en la forma en que los animales son tratados, no
          solo por el bien de ellos, sino por el de toda nuestra sociedad.
        </p>
        <p className="font-semibold text-slate-900 ">
          Cada especie animal es única y contribuye de manera invaluable a la
          diversidad y belleza de nuestro planeta. Si queremos que futuras
          generaciones también puedan disfrutar y aprender de estos seres
          maravillosos, es imprescindible tomar medidas ahora para protegerlos y
          preservar su existencia.
        </p>

        {/* <p className="font-semibold text-slate-900" >
            En Animal Care, tu voz es esencial. Tu opinión impulsa el cambio.
            Únete a nosotros para decir no a la violencia animal y sí a un
            futuro donde todos los seres vivos coexistan en armonía y respeto
            mutuo. Juntos, podemos hacer la diferencia.
          </p> */}
      </div>
    </main>
  );
}
