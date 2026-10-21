import { useTranslation } from "react-i18next";
import { ArrowUpRight, Lock } from "lucide-react";
import { Chip } from "@/components/Chip";
import { cn } from "@/lib/utils";
import { publicSectorItems } from "./publicSectorItems";

export function PublicSector() {
  const { t, i18n } = useTranslation();

  if (publicSectorItems.length === 0) return null;

  const lang = i18n.language?.startsWith("pt") ? "pt" : "en";
  const items = publicSectorItems.map((item) => ({ ...item, ...item[lang] }));

  return (
    <div className="mt-22">
      <div className="reveal mb-7 flex flex-wrap items-end justify-between gap-4">
        <div className="flex max-w-[600px] flex-col gap-2">
          <h3 className="m-0 text-[28px] font-bold tracking-[-0.03em]">{t("publicSector.title")}</h3>
          <p className="m-0 text-base leading-[1.6] text-muted">{t("publicSector.subtitle")}</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-[7px] text-[13px] text-muted">
          <Lock size={13} strokeWidth={2} aria-hidden="true" />
          {t("publicSector.badge")}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-5 max-nav:grid-cols-1">
        {items.map((item) => {
          const isPublic = item.access === "public";

          return (
            <article
              key={item.id}
              className="card reveal flex flex-col gap-4 rounded-[22px] border border-line bg-surface p-7"
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={cn(
                    "inline-flex items-center gap-[7px] rounded-full px-[11px] py-[5px] text-xs font-medium",
                    isPublic ? "bg-ok-bg text-ok-text" : "bg-lock-bg text-lock-text",
                  )}
                >
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
                  {t(isPublic ? "publicSector.public" : "publicSector.restricted")}
                </span>
                <span className="text-[13px] text-muted tabular-nums">{item.year}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="m-0 text-xl leading-[1.3] font-bold tracking-[-0.02em]">{item.name}</h4>
                <span className="text-sm text-muted">
                  {item.institution} · {item.role}
                </span>
              </div>
              <p className="m-0 text-[15px] leading-[1.65] text-muted">{item.description}</p>
              <div className="flex flex-col gap-1 rounded-[14px] bg-bg px-4 py-3.5">
                <span className="text-[13px] font-semibold">{t("publicSector.result")}</span>
                <span className="text-sm leading-[1.6] text-muted">{item.result}</span>
              </div>
              <div className="mt-auto flex flex-wrap gap-1.5">
                {item.techs.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="more inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold"
                >
                  {t("projects.view")}
                  <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                </a>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
