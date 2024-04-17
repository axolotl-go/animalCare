export default function OrganizationsCard({ Image, Title, Information}) {
    return (
      <div className="max-w-md h-[100%] rounded overflow-hidden shadow-lg bg-[#0ea8f0] border-2 border-[#0ea8f0]">
        <img
          className="w-full"
          src={Image}
          alt={Title}
        />
        <div className="px-6 py-4">
          <div className="font-bold mb-2 text-[#fff]">{Title}</div>
          <p className="text-[#fff] ">
            {
              Information
            }
          </p>
        </div>
      </div>
    );
  }
  