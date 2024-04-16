import Card from "@/components/Card";

export default function Team() {
  return (
    <main className="container mx-auto px-4">
      <p className="text-4xl font-extrabold text-center mb-10">Equipo</p>

      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-6 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center">
       <Card />
       <Card />
       <Card />
       <Card />
       <Card />

      </div>

    </main>
  );
}
