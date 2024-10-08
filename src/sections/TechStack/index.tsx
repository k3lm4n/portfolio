import {
  ExpoLogo,
  ExpressLogo,
  NextLogo,
  NodeLogo,
  PrismaLogo,
  ReactHookFormLogo,
  ReactLogo,
  ReactQuery,
  SanityLogo,
  TailwindLogo,
  TSLogo,
  VercelLogo,
  ZOdLogo,
  ZustandLogo,
} from "@/assets";
import BlurFade from "@/components/magicui/blur-fade";

function TechStack() {
  const TechStackArray = [
    {
      name: "React",
      logo: ReactLogo,
      description: "Web Framework",
    },
    {
      name: "Express",
      logo: ExpressLogo,
      description: "Framework",
    },
    {
      name: "Typescript",
      logo: TSLogo,
      description: "Language",
    },
    {
      name: "Tailwind CSS",
      logo: TailwindLogo,
      description: "CSS Library",
    },
    {
      name: "Expo",
      logo: ExpoLogo,
      description: "Mobile Framework",
    },
    {
      name: "ZOD",
      logo: ZOdLogo,
      description: "Validator",
    },
    {
      name: "Prisma",
      logo: PrismaLogo,
      description: "ORM",
    },
    {
      name: "Zustand",
      logo: ZustandLogo,
      description: "Global State",
    },
    {
      name: "Next",
      logo: NextLogo,
      description: "Web Framework",
    },
    {
      name: "React Hook Form",
      logo: ReactHookFormLogo,
      description: "Library",
    },
    {
      name: "Vercel",
      logo: VercelLogo,
      description: "Deployment",
    },
    {
      name: "React Query",
      logo: ReactQuery,
      description: "Server State",
    },
    {
      name: "Sanity",
      logo: SanityLogo,
      description: "Headless CMS",
    },
    {
      name: "Node",
      logo: NodeLogo,
      description: "Interpreter",
    },
  ];

  return (
    <div id="techStack" className="flex flex-col gap-6">
      <div className="w-full mb-9 flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-center">Tech Stack</h1>
        <h3 className="text-base font-extralight text-center text-medium-gray">
          Explore the technologies and tools powering my projects.
        </h3>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%]">
          <div className="h-full grid grid-flow-row sm:grid-cols-4  lg:grid-cols-6 sm:grid-rows-7 grid-rows-12 lg:grid-rows-5  gap-4 auto-cols-auto ">
            {TechStackArray.map((tech, index) => (
              <BlurFade
                className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200"
                key={index}
                delay={0.25 + index * 0.05}
                inView
              >
                <div className="flex flex-1 justify-center items-center ">
                  <img src={tech.logo} className="mt-6" alt="React" />
                </div>
                <div className="w-full px-6 pb-6 flex justify-between items-center">
                  <div className="font-semibold text-onyx">
                    <p>{tech.name}</p>
                  </div>
                  <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                    <p>{tech.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
