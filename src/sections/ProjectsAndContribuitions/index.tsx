import { MdMusicNote } from "react-icons/md";
import { RiPagesLine, RiRobot2Line, RiStickyNoteAddLine, RiWechatLine } from "react-icons/ri";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: RiStickyNoteAddLine,
    name: "Messier Notes",
    description: "We automatically save your files as you type.",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: RiPagesLine,
    name: "Kale-acquisition",
    description:
      "Worked on a landing page for a platform that helps recruiting companies eliminate manual prospecting and research, streamlining outreach through automation and efficiency.",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: MdMusicNote,
    name: "Smooth Player",
    description: "Supports 100+ languages and counting.",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: RiRobot2Line,
    name: "Venator",
    description: "Use the calendar to filter your files by date.",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: RiWechatLine,
    name: "Social Mate",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function ProjectsContrib() {

  return (
    <div id="projectContrib" className="flex flex-col gap-6 pb-8">
      <div className="w-full mb-6 flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-center">Projects</h1>
        <h3 className="text-base font-extralight text-center text-hard-gray dark:text-light-gray">
          Explore my projects and contributions, showcasing where I’ve worked
          and the impact I’ve made.
        </h3>
      </div>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature}/>
        ))}
      </BentoGrid>
    </div>
  );
}

export default ProjectsContrib;
