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
import useMobile from "@/hooks/useMobile";
import MarqueeTech from "@/components/Marquee";
import { useTranslation } from "react-i18next";
import type en from "@/i18n/locales/en.json";

type DescriptionKey = keyof typeof en["techStack"]["descriptions"];

function TechStack() {
  const { t } = useTranslation();

  const TechStackArray: { name: string; logo: string; descriptionKey: DescriptionKey }[] = [
    { name: "React", logo: ReactLogo, descriptionKey: "Framework" },
    { name: "Express", logo: ExpressLogo, descriptionKey: "Framework" },
    { name: "Typescript", logo: TSLogo, descriptionKey: "Language" },
    { name: "Tailwind", logo: TailwindLogo, descriptionKey: "CSSLibrary" },
    { name: "Expo", logo: ExpoLogo, descriptionKey: "Framework" },
    { name: "ZOD", logo: ZOdLogo, descriptionKey: "Validator" },
    { name: "Prisma", logo: PrismaLogo, descriptionKey: "ORM" },
    { name: "Zustand", logo: ZustandLogo, descriptionKey: "GlobalState" },
    { name: "Next", logo: NextLogo, descriptionKey: "Framework" },
    { name: "ReactHookForm", logo: ReactHookFormLogo, descriptionKey: "Library" },
    { name: "Vercel", logo: VercelLogo, descriptionKey: "Deployment" },
    { name: "TanStack", logo: ReactQuery, descriptionKey: "ServerState" },
    { name: "Sanity", logo: SanityLogo, descriptionKey: "HeadlessCMS" },
    { name: "NodeJs", logo: NodeLogo, descriptionKey: "Enviroment" },
  ];
  const isMobile = useMobile();

  return (
    <div id="techStack" className="flex flex-col gap-6">
      <div className="w-full mb-9 flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-center">{t("techStack.sectionTitle")}</h1>
        <h3 className="text-base font-extralight text-center text-hard-gray dark:text-light-gray">
          {t("techStack.sectionSubtitle")}
        </h3>
      </div>
      {isMobile ? (
        <div className="w-full flex justify-center">
          <div className="w-[80%]">
            <div className="h-full grid grid-flow-row sm:grid-cols-4  lg:grid-cols-6 sm:grid-rows-7 grid-rows-12 lg:grid-rows-5  gap-4 auto-cols-auto ">
              {TechStackArray.map((tech, index) => (
                <BlurFade
                  className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200 dark:bg-gray-200/30"
                  key={index}
                  delay={0.25 + index * 0.05}
                  inView
                >
                  <div className="flex flex-1 justify-center items-center ">
                    <img src={tech.logo} className="mt-6" alt={tech.name} />
                  </div>
                  <div className="w-full px-6 pb-6 flex justify-between items-center">
                    <div className="font-semibold text-onyx">
                      <p>{tech.name}</p>
                    </div>
                    <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                      <p>{t(`techStack.descriptions.${tech.descriptionKey}`)}</p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <MarqueeTech techData={TechStackArray.map(tech => ({
            ...tech,
            description: t(`techStack.descriptions.${tech.descriptionKey}`),
          }))} />
        </>
      )}
    </div>
  );
}

export default TechStack;
