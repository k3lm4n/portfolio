import {
  CBSLogo,
  HestiaLogo,
  HorizonLogo,
  ISPTECLogo,
  TSCOLogo,
  TeamItLogo,
} from "@/assets";
import BlurFade from "@/components/magicui/blur-fade";
import { Briefcase, GraduationCap } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useAppTheme } from "@/hooks/useDarkMode";
import { useTranslation } from "react-i18next";

function Experience() {
  const { appTheme } = useAppTheme();
  const { t } = useTranslation();

  type TimelineItem = {
    title: string;
    date: string;
    subtitle: string;
    location: string;
    techs?: string[];
    logo: string;
    width: number;
    type: "work" | "education";
    icon: JSX.Element;
  };

  const timelineItems: TimelineItem[] = [
    {
      title: "experience.items.teamit.title",
      date: t("experience.items.teamit.date"),
      subtitle: "TeamIt",
      techs: ["Next.js", "Node.js", "Django", "DevOps"],
      location: "Lisbon, PT",
      logo: TeamItLogo,
      width: 128,
      type: "work",
      icon: <Briefcase color="#fff" />,
    },
    {
      title: "experience.items.tsco.title",
      date: t("experience.items.tsco.date"),
      subtitle: "TSCO",
      location: "Luanda, AO",
      techs: ["React", "Node.js", ".Net", "PL/SQL"],
      logo: TSCOLogo,
      width: 128,
      type: "work",
      icon: <Briefcase color="#fff" />,
    },
    {
      title: "experience.items.horizon.title",
      date: t("experience.items.horizon.date"),
      subtitle: "Horizon",
      techs: ["React", "Node.js", "AWS", "Django REST Framework"],
      location: "Sheridan, WY, USA",
      logo: HorizonLogo,
      width: 56,
      type: "work",
      icon: <Briefcase color="#fff" />,
    },
    {
      title: "experience.items.cbs.title",
      date: t("experience.items.cbs.date"),
      subtitle: "CBS",
      location: "Luanda, AO",
      techs: ["React", "Node.js", "Python"],
      logo: CBSLogo,
      width: 56,
      type: "work",
      icon: <Briefcase color="#fff" />,
    },
    {
      title: "experience.items.hestia.title",
      date: t("experience.items.hestia.date"),
      subtitle: "Hestia",
      techs: ["React", "Node.js"],
      location: "Luanda, AO",
      logo: HestiaLogo,
      width: 56,
      type: "work",
      icon: <Briefcase color="#fff" />,
    },
    {
      title: "experience.items.isptec.title",
      subtitle: "experience.items.isptec.subtitle",
      date: t("experience.items.isptec.date"),
      location: "ISPTEC - Luanda, AO",
      logo: ISPTECLogo,
      width: 56,
      type: "education",
      icon: <GraduationCap color="#fff" />,
    },
  ];

  return (
    <BlurFade delay={0.1 * 4} inView>
      <div id="experiences">
        <div className="w-full h-full my-16 flex flex-col gap-6 justify-center items-center">
          <div className="w-full mb-9 flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-center">
              {t("experience.sectionTitle")}
            </h1>
            <h3 className="text-base font-extralight text-center text-hard-gray dark:text-light-gray">
              {t("experience.sectionSubtitle")}
            </h3>
          </div>
          <VerticalTimeline>
            {timelineItems.map((item, index) => (
              <VerticalTimelineElement
                key={index}
                className={`vertical-timeline-element--${item.type}  dark:text-light-gray `}
                contentStyle={{
                  background: appTheme ? "rgba(255, 255, 255, 0.1)" : "#fff",
                  color: appTheme ? "#fff" : "#181818",
                  backdropFilter: appTheme ? "blur(64px)" : "",
                  WebkitBackdropFilter: appTheme ? "blur(64px)" : "",
                }}
                contentArrowStyle={{
                  borderRight: appTheme
                    ? "7px solid rgba(255, 255, 255, 0.1)"
                    : "7px solid #fff",
                }}
                date={item.date}
                iconStyle={{
                  background: appTheme ? "#696969" : "#181818",
                  color: "#fff",
                }}
                icon={item.icon}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center">
                    <img
                      src={item.logo}
                      alt={item.subtitle}
                      style={{ width: item.width }}
                      className="object-contain opacity-80"
                    />
                  </div>
                  <div className="">
                    <span className="vertical-timeline-element-title font-bold ">
                      {t(item.title as any)}
                    </span>
                    <div className="flex flex-col gap-4">
                      <p className="vertical-timeline-element-subtitle !font-light !text-sm !-mt-1 ">
                        {item.subtitle} &mdash; {item.location}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  {item.techs && (
                    <div className="flex flex-wrap gap-2">
                      {item.techs.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </BlurFade>
  );
}

export default Experience;
