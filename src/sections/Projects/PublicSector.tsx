import { useTranslation } from "react-i18next";
import { ArrowUpRight, Globe, Landmark, Lock } from "lucide-react";
import { Chip } from "@/components/Chip";
import { cn } from "@/lib/utils";
import { publicSectorItems } from "./publicSectorItems";

export function PublicSector() {
  const { t, i18n } = useTranslation();

  if (publicSectorItems.length === 0) return null;

  const lang = i18n.language?.startsWith("pt") ? "pt" : "en";
  const items = publicSectorItems.map((item) => ({ ...item, ...item[lang] }));

  return (
    <div className="mt-14 flex flex-col gap-5">
      <div className="reveal flex flex-wrap items-end justify-between gap-3">
        <div className="flex max-w-[640px] flex-col gap-1.5">
          <h3 className="m-0 text-2xl font-bold tracking-[-0.02em]">{t("publicSector.title")}</h3>
          <p className="m-0 text-[15px] leading-[1.6] text-muted">{t("publicSector.subtitle")}</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-chip-bg px-3 py-[7px] text-[13px] text-chip">
          <Lock size={14} aria-hidden="true" />
          {t("publicSector.badge")}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-5 max-nav:grid-cols-1">
        {items.map((item) => {
          const isPublic = item.access === "public";
          const Icon = isPublic ? Globe : Landmark;

          return (
            <article
              key={item.id}
              className={cn(
                "card reveal flex flex-col gap-4 rounded-[20px] border border-line bg-surface p-7",
                !isPublic && "border-dashed",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-chip-bg text-chip">
                  <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="text-xs font-medium text-muted tabular-nums">
                  {item.year} · {t(isPublic ? "publicSector.public" : "publicSector.restricted")}
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <h4 className="m-0 text-xl font-bold tracking-[-0.02em]">{item.name}</h4>
                <span className="text-sm text-muted">
                  {item.institution} · {item.role}
                </span>
              </div>
              <p className="m-0 text-[15px] leading-[1.6] text-muted">{item.description}</p>
              <div className="flex flex-col gap-2 rounded-xl bg-bg px-4 py-3.5 text-sm">
                <span className="font-semibold">{t("publicSector.result")}</span>
                <span className="text-muted">{item.result}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-semibold"
                >
                  {t("projects.view")}
                  <ArrowUpRight size={16} className="card-arrow" aria-hidden="true" />
                </a>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
