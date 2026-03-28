import { MdMusicNote } from "react-icons/md";
import { RiPagesLine, RiRobot2Line, RiStickyNoteAddLine, RiWechatLine } from "react-icons/ri";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { useTranslation } from "react-i18next";

function ProjectsContrib() {
  const { t } = useTranslation();

  const features = [
    {
      Icon: RiStickyNoteAddLine,
      name: t("projects.messierNotes.name"),
      description: t("projects.messierNotes.description"),
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: RiPagesLine,
      name: t("projects.kaleAcquisition.name"),
      description: t("projects.kaleAcquisition.description"),
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: MdMusicNote,
      name: t("projects.smoothPlayer.name"),
      description: t("projects.smoothPlayer.description"),
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: RiRobot2Line,
      name: t("projects.venator.name"),
      description: t("projects.venator.description"),
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: RiWechatLine,
      name: t("projects.socialMate.name"),
      description: t("projects.socialMate.description"),
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <div id="projectContrib" className="flex flex-col gap-6 pb-8">
      <div className="w-full mb-6 flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-center">{t("projects.sectionTitle")}</h1>
        <h3 className="text-base font-extralight text-center text-hard-gray dark:text-light-gray">
          {t("projects.sectionSubtitle")}
        </h3>
      </div>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export default ProjectsContrib;
