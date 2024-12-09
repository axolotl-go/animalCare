import OrganizationsCard from "@/components/OrganizationsCard";
import organizations from "../../data.json";
export default function Organizations() {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 text-lg md:text-xl lg:text-2xl xl:text-2xl text-center">
    {organizations.map((org, index) => (
      <div
        key={index}
        className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg max-w-sm"
      >
        <img src={org.Image} alt={org.Title} className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-xl font-bold mb-2">{org.Title}</h2>
        <p className="text-gray-600">{org.Information}</p>
      </div>
    ))}
  </div>
  );
}
