import { useTranslation } from "react-i18next";
import { Chip } from "@/components/Chip";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

type TimelineItem = {
  id: "teamit" | "tsco" | "horizon" | "cbs" | "hestia" | "isptec";
  company: string;
  techs: string[];
  education?: boolean;
};

const items: TimelineItem[] = [
  { id: "teamit", company: "TeamIt", techs: ["Next.js", "Node.js", "Django", "DevOps"] },
  { id: "tsco", company: "TSCO", techs: ["React", "Node.js", ".NET", "PL/SQL"] },
  { id: "horizon", company: "Horizon", techs: ["React", "Node.js", "AWS", "Django REST"] },
  { id: "cbs", company: "CBS", techs: ["React", "Node.js", "Python"] },
  { id: "hestia", company: "Hestia", techs: ["React", "Node.js"] },
  { id: "isptec", company: "ISPTEC", techs: [], education: true },
];

export function Timeline() {
  const { t } = useTranslation();

  return (
    <Section id="timeline" title={t("timeline.title")} subtitle={t("timeline.subtitle")} className="pb-28">
      <div className="flex flex-col rounded-[18px] border border-line bg-surface px-7">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={cn(
              "xp-row reveal grid grid-cols-[200px_minmax(0,1fr)_minmax(0,300px)] items-start gap-8 py-[26px] max-nav:grid-cols-1 max-nav:gap-2.5",
              i < items.length - 1 && "border-b border-line",
            )}
          >
            <span className="pt-1 text-[13px] font-medium text-muted tabular-nums">
              {t(`timeline.items.${item.id}.date`)}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[19px] font-semibold tracking-[-0.01em]">
                {t(`timeline.items.${item.id}.role`)}
              </span>
              <span className="text-[15px] text-muted">
                {item.company} · {t(`timeline.items.${item.id}.place`)}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.techs.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
              {item.education && <Chip>{t("timeline.education")}</Chip>}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
