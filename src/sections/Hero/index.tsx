import { useTranslation } from "react-i18next";
import { Section } from "@/components/Section";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { cn } from "@/lib/utils";

const facts = ["years", "companies", "countries"] as const;

export function Hero() {
  const { t } = useTranslation();

  return (
    <Section id="about" className="pt-30 pb-16">
      <div className="hero-in flex max-w-[780px] flex-col gap-7">
        <div className="inline-flex items-center gap-2.5 self-start rounded-full border border-line bg-surface px-3.5 py-[7px] text-[13px] text-muted">
          <span aria-hidden="true" className="ping size-[7px] rounded-full bg-[#22A06B]" />
          {t("hero.badge")}
        </div>
        <h1 className="m-0 text-[80px] leading-none font-extrabold tracking-[-0.045em] max-nav:text-5xl">
          <span className="font-bold text-faint">{t("hero.intro")}</span> Kelman Santos
        </h1>
        <p className="m-0 max-w-[600px] text-[19px] leading-[1.7] text-muted">
          {t("hero.description")}
        </p>
        <div className="flex flex-wrap gap-2.5">
          <ShimmerButton href="#contact">{t("hero.contact")}</ShimmerButton>
          <InteractiveHoverButton href="#projects" className="bg-surface">
            {t("hero.projects")}
          </InteractiveHoverButton>
        </div>
      </div>

      <div className="reveal mt-22 grid grid-cols-3 rounded-[22px] border border-line bg-surface max-nav:grid-cols-1">
        {facts.map((fact, i) => (
          <div
            key={fact}
            className={cn(
              "flex flex-col gap-1.5 px-[30px] py-7",
              i > 0 && "border-l border-line max-nav:border-t max-nav:border-l-0",
            )}
          >
            <span className="text-[38px] font-bold tracking-[-0.03em]">
              {t(`hero.facts.${fact}.value`)}
            </span>
            <span className="text-sm text-muted">{t(`hero.facts.${fact}.label`)}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
