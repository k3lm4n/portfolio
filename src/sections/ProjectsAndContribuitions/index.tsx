import { MdMusicNote } from "react-icons/md";
import { RiPagesLine, RiRobot2Line, RiStickyNoteAddLine, RiWechatLine } from "react-icons/ri";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const features = [
  {
    Icon: RiStickyNoteAddLine,
    name: "Messier Notes",
    description: "Messier Notes is a productivity tool, offering task management, note-taking, and collaboration in one seamless platform.",
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
    description: "Smooth Player is a sleek Spotify clone with playlist management, song search, and a responsive design for seamless music streaming.",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: RiRobot2Line,
    name: "Venator",
    description: "Worked in Venator is an AI-powered inbox integrated with LinkedIn and Email, designed to identify and engage potential clients, streamlining prospecting and outreach.",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: RiWechatLine,
    name: "Social Mate",
    description:
      "Social Mate is a web platform designed to help students share information, collaborate, and communicate effectively to achieve better results in tests.",
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
