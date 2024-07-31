import {
  CBSLogo,
  HestiaLogo,
  HorizonLogo,
  ISPTECLogo,
  TSCOLogo,
} from "@/assets";
import { Briefcase, GraduationCap } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <div id="experiences">
      <div className="w-full h-full my-16 flex flex-col gap-6 justify-center items-center">
      <div className="w-full mb-9 flex flex-col gap-3">
          <h1 className="text-4xl font-bold text-center">Timeline</h1>
          <h3 className="text-base font-extralight text-center text-medium-gray">
          A journey through my career highlights, showcasing key milestones, projects, and accomplishments.
        </h3>
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "#181818" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="September 2023 - present"
            iconStyle={{ background: "#181818" }}
            icon={<Briefcase color="#fff" />}
          >
            <div className="flex gap-4 items-center">
              <div className="flex">
                <img width={128} src={TSCOLogo} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">Full-stack Developer</h3>
                <h4 className="text-sm font-light">TSCO - Luanda, AO</h4>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="January 2024 - June 2024"
            iconStyle={{ background: "#181818" }}
            icon={<Briefcase color="#fff" />}
          >
            <div className="flex gap-4 items-center">
              <div>
                <img className="" width={56} src={HorizonLogo} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">Full-stack Developer</h3>
                <h4 className="text-sm font-light">
                  Horizon - Sheridan, WY, USA
                </h4>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2022 - September 2023"
            iconStyle={{ background: "#181818", color: "#fff" }}
            icon={<Briefcase color="#fff" />}
          >
            <div className="flex gap-4 items-center">
              <div className="flex">
                <img width={56} src={CBSLogo} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">
                  Software Developer and Manager
                </h3>
                <h4 className="text-sm font-light">CBS - Luanda, AO</h4>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2021 - July 2022"
            iconStyle={{ background: "#181818", color: "#fff" }}
            icon={<Briefcase color="#fff" />}
          >
            <div className="flex gap-4 items-center">
              <div className="flex">
                <img width={56} src={HestiaLogo} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">Full-stack Developer</h3>
                <h4 className="text-sm font-light">Hestia - Luanda, AO</h4>
              </div>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="March 2018 - October 2023"
            iconStyle={{ background: "#181818" }}
            icon={<GraduationCap color="#fff" />}
          >
            <div className="flex gap-4 items-center">
              <div className="flex">
                <img width={56} src={ISPTECLogo} alt="" />
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-lg">Bachelor of Science </h3>
                <h4 className="text-sm font-medium"> Computer Engineering</h4>
                <h4 className="text-sm font-light">ISPTEC - Luanda, AO</h4>
              </div>
            </div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Experience;
