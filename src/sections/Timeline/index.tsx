import { useTranslation } from "react-i18next";
import { Chip } from "@/components/Chip";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

type TimelineItem = {
  id: "teamit" | "tsco" | "horizon" | "cbs" | "hestia" | "isptec";
  company: string;
  techs: string[];
  education?: boolean;
  // Current position, marked with the green dot
  current?: boolean;
};

const items: TimelineItem[] = [
  { id: "teamit", company: "TeamIt", techs: ["Next.js", "Node.js", "Django", "DevOps"], current: true },
  { id: "tsco", company: "TSCO", techs: ["React", "Node.js", ".NET", "PL/SQL"] },
  { id: "horizon", company: "Horizon", techs: ["React", "Node.js", "AWS", "Django REST"] },
  { id: "cbs", company: "CBS", techs: ["React", "Node.js", "Python"] },
  { id: "hestia", company: "Hestia", techs: ["React", "Node.js"] },
  { id: "isptec", company: "ISPTEC", techs: [], education: true },
];

export function Timeline() {
  const { t } = useTranslation();

  return (
    <Section id="timeline" title={t("timeline.title")} subtitle={t("timeline.subtitle")} className="pt-18 pb-10">
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div
            key={item.id}
            className="reveal grid grid-cols-[170px_24px_minmax(0,1fr)] gap-5 max-nav:grid-cols-[24px_minmax(0,1fr)] max-nav:gap-x-3.5 max-nav:gap-y-1"
          >
            <span className="pt-0.5 text-sm text-muted tabular-nums max-nav:order-first max-nav:col-start-2">
              {t(`timeline.items.${item.id}.date`)}
            </span>
            <div aria-hidden="true" className="flex flex-col items-center max-nav:row-span-2 max-nav:row-start-1">
              <span
                className={cn(
                  "mt-[5px] box-border size-[11px] shrink-0 rounded-full border-2",
                  item.current ? "ping border-[#22A06B] bg-[#22A06B]" : "border-faint bg-bg",
                )}
              />
              {i < items.length - 1 && <span className="mt-1.5 w-px grow bg-line" />}
            </div>
            <div className="flex flex-col gap-1.5 pb-9">
              <span className="text-[19px] font-semibold tracking-[-0.015em]">
                {t(`timeline.items.${item.id}.role`)}
              </span>
              <span className="text-[15px] text-muted">
                {item.company} · {t(`timeline.items.${item.id}.place`)}
              </span>
              <div className="mt-1.5 flex flex-wrap gap-1.5">
                {item.techs.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
                {item.education && <Chip>{t("timeline.education")}</Chip>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
