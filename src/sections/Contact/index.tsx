import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PopupModal } from "react-calendly";
import { CalendarDays } from "lucide-react";
import { Section } from "@/components/Section";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { PulsatingButton } from "@/components/ui/pulsating-button";
import { CALENDLY_URL, EMAIL } from "@/contants/links";

export function Contact() {
  const { t } = useTranslation();
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  // Mount the Calendly iframe only once it is first requested
  const [calendlyRequested, setCalendlyRequested] = useState(false);

  const openCalendly = () => {
    setCalendlyRequested(true);
    setCalendlyOpen(true);
  };

  return (
    <Section id="contact" className="pt-28 pb-18">
      <div className="reveal cta-glow flex flex-col items-center gap-5 rounded-[28px] border border-line bg-surface px-8 py-18 text-center max-nav:px-4">
        <h2 className="m-0 text-[60px] leading-[1.02] font-extrabold tracking-[-0.045em] max-nav:text-5xl">
          {t("contact.title")}
        </h2>
        <p className="m-0 max-w-[520px] text-lg leading-[1.6] text-muted">{t("contact.subtitle")}</p>
        <div className="mt-2 flex flex-wrap justify-center gap-2.5">
          <PulsatingButton onClick={openCalendly}>
            <CalendarDays size={17} strokeWidth={1.8} aria-hidden="true" />
            {t("contact.schedule")}
          </PulsatingButton>
          <InteractiveHoverButton href={`mailto:${EMAIL}`} title={EMAIL} className="h-[52px] min-w-[172px] bg-bg">
            {t("contact.email")}
          </InteractiveHoverButton>
        </div>
      </div>
      {calendlyRequested && (
        <PopupModal
          url={CALENDLY_URL}
          open={calendlyOpen}
          onModalClose={() => setCalendlyOpen(false)}
          // #root always exists in index.html
          rootElement={document.getElementById("root")!}
        />
      )}
    </Section>
  );
}
