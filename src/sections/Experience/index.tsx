import {
  CBSLogo,
  HestiaLogo,
  HorizonLogo,
  ISPTECLogo,
  TSCOLogo,
} from "@/assets";
import BlurFade from "@/components/magicui/blur-fade";
import { Briefcase, GraduationCap } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {useAppTheme} from "@/hooks/useDarkMode";

function Experience() {
  type TimelineItem = {
    date: string;
    title: string;
    subtitle: string;
    location: string;
    logo: string;
    width: number;
    type: "work" | "education";
    icon: JSX.Element;
  };

  const timelineItems: TimelineItem[] = [
    {
      date: "September 2023 - present",
      title: "Full-stack Developer",
      subtitle: "TSCO",
      location: "Luanda, AO",
      logo: TSCOLogo,
      width: 128,
      type: "work",
      icon: <Briefcase color="#fff" />,
    },
    {
      date: "January 2024 - June 2024",
      title: "Full-stack Developer",
      subtitle: "Horizon",
      location: "Sheridan, WY, USA",
      logo: HorizonLogo,
      width: 56,
      type: "work",
      icon: <Briefcase color="#fff" />,
    },
    {
      date: "September 2022 - September 2023",
      title: "Software Developer and Manager",
      subtitle: "CBS",
      location: "Luanda, AO",
      logo: CBSLogo,
      width: 56,
      type: "work",
      icon: <Briefcase color="#fff" />,
    },
    {
      date: "July 2021 - July 2022",
      title: "Full-stack Developer",
      subtitle: "Hestia",
      location: "Luanda, AO",
      logo: HestiaLogo,
      width: 56,
      type: "work",
      icon: <Briefcase color="#fff" />,
    },
    {
      date: "March 2018 - October 2023",
      title: "Bachelor of Science",
      subtitle: "Computer Engineering",
      location: "ISPTEC - Luanda, AO",
      logo: ISPTECLogo,
      width: 56,
      type: "education",
      icon: <GraduationCap color="#fff" />,
    },
  ];

  const { appTheme } = useAppTheme();


  return (
    <BlurFade delay={0.1 * 4} inView>
      <div id="experiences">
        <div className="w-full h-full my-16 flex flex-col gap-6 justify-center items-center">
          <div className="w-full mb-9 flex flex-col gap-3">
            <h1 className="text-4xl font-bold text-center">Timeline</h1>
            <h3 className="text-base font-extralight text-center text-medium-gray">
              A journey through my career highlights, showcasing key milestones,
              projects, and accomplishments.
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
                iconStyle={{ background: "#181818", color: "#fff" }}
                icon={item.icon}
              >
                <div className="flex gap-4 items-center dark:text-white">
                  <div className="flex">
                    <img
                      width={item.width}
                      src={item.logo}
                      alt={item.subtitle}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    {item.subtitle && (
                      <h4 className="text-sm font-medium">{item.subtitle}</h4>
                    )}
                    <h4 className="text-sm font-light">{item.location}</h4>
                  </div>
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
