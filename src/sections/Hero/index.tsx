import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const facts = ["years", "companies", "countries"] as const;

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section id="about" className="pt-32 pb-22">
      <div className="hero-in flex max-w-[860px] flex-col gap-7">
        <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-line bg-surface px-3.5 py-2 text-[13px] text-muted">
          <span aria-hidden="true" className="pulse-dot size-2 rounded-full bg-[#22A06B]" />
          {t("hero.badge")}
        </div>
        <h1 className="m-0 text-[72px] leading-[1.02] font-extrabold tracking-[-0.035em] max-nav:text-[44px]">
          <span className="text-faint">{t("hero.intro")}</span> Kelman Santos
        </h1>
        <p className="m-0 max-w-[640px] text-[19px] leading-[1.65] text-muted">
          {t("hero.description")}
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="btn inline-flex h-[50px] items-center rounded-xl bg-btn-bg px-[22px] text-[15px] font-semibold text-btn-text"
          >
            {t("hero.contact")}
          </a>
          <a
            href="#projects"
            className="btn inline-flex h-[50px] items-center gap-2 rounded-xl bg-btn2-bg px-[22px] text-[15px] font-medium text-fg"
          >
            {t("hero.projects")}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="reveal mt-20 grid grid-cols-3 overflow-hidden rounded-[18px] border border-line bg-surface max-nav:grid-cols-1">
        {facts.map((fact, i) => (
          <div
            key={fact}
            className={cn(
              "flex flex-col gap-1 px-7 py-[26px]",
              i > 0 && "border-l border-line max-nav:border-t max-nav:border-l-0",
            )}
          >
            <span className="text-4xl font-bold tracking-[-0.03em]">
              {t(`hero.facts.${fact}.value`)}
            </span>
            <span className="text-sm text-muted">{t(`hero.facts.${fact}.label`)}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
