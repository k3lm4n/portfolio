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
    <figure className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
      <div className="flex flex-1 justify-center items-center ">
        <img src={logo} className="mt-6" alt="React" />
      </div>
      <div className="w-full px-6 pb-6 flex justify-between items-center">
        <div className="font-semibold text-onyx">
          <p>{name}</p>
        </div>
        <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
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
  const thirdRow = techData.slice(0, techData.length / 2);
  const fourthRow = techData.slice(techData.length / 2);

  return (
    <div className=" relative flex h-[40rem] w-full flex-row items-center justify-center gap-4 overflow-hidden [perspective:300px] ">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            "translateX(-100px) translateY(0px) translateZ(-100px) rotateX(10deg) rotateY(-10deg) rotateZ(15deg)",
        }}
      >
        <Marquee pauseOnHover vertical className="[--duration:30s]">
          {firstRow.map((techData, index) => (
            <TechCard key={index} {...techData} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:25s]" vertical>
          {secondRow.map((techData, index) => (
            <TechCard key={index} {...techData} />
          ))}
        </Marquee>
        <Marquee  pauseOnHover className="[--duration:35s]" vertical>
          {thirdRow.map((techData, index) => (
            <TechCard key={index} {...techData} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:40s]" vertical>
          {fourthRow.map((techData, index) => (
            <TechCard key={index} {...techData} />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#F1F4FC]"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#F1F4FC]"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#F1F4FC]"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#F1F4FC]"></div>
    </div>
  );
}

export default MarqueeTech;
