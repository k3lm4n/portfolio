import { Marquee } from "@/components/magicui/marquee";

interface MarqueeTechProps {

  techData: { name: string; logo: string; description: string }[];

}

const TechCard = ({
  name,
  logo,
  description,
}: {
  name: string;
  description: string;
  logo: string;
}) => {
  return (
    <figure className="col-span-2 w-64 h-64 rounded-3xl flex items-center flex-col justify-center dark:bg-gray-200/30 bg-white">
      <div className="flex flex-1 justify-center items-center ">
        <img src={logo} className="mt-6" alt="React" />
      </div>
      <div className="w-full px-6 pb-6 flex justify-between items-center text-sm">
        <div className="font-semibold text-onyx">
          <p>{name}</p>
        </div>
        <div className="px-3 py-1 bg-slate-100 rounded-3xl font-medium text-dark-gray text-center ">
          <p>{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function MarqueeTech(
  { techData }: MarqueeTechProps
) {
  const firstRow = techData.slice(0, techData.length / 2);
  const secondRow = techData.slice(techData.length / 2);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((tech, index) => (
          <TechCard key={index} {...tech} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((tech, index) => (
          <TechCard key={index} {...tech} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F1F4FC] dark:from-onyx"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#F1F4FC] dark:from-onyx"></div>
    </div>
  );
}

export default MarqueeTech;
