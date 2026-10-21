import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PopupModal } from "react-calendly";
import { CalendarDays, Mail } from "lucide-react";
import { Section } from "@/components/Section";
import { CALENDLY_URL, EMAIL } from "@/contants/links";

const ctaButton =
  "btn inline-flex h-[54px] cursor-pointer items-center gap-2.5 rounded-[14px] px-[22px] text-base font-semibold";

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
    <Section id="contact" className="pb-16">
      <div className="reveal flex flex-col items-start gap-6 rounded-[28px] bg-cta-bg px-14 py-18 text-cta-text max-nav:px-6 max-nav:py-12">
        <h2 className="m-0 text-[60px] leading-[1.04] font-extrabold tracking-[-0.035em] max-nav:text-[38px]">
          {t("contact.title")}
        </h2>
        <p className="m-0 max-w-[560px] text-lg leading-[1.6] text-cta-muted">{t("contact.subtitle")}</p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={openCalendly}
            className={`${ctaButton} border-0 bg-cta-btn-bg text-cta-btn-text`}
          >
            <CalendarDays size={18} strokeWidth={1.8} aria-hidden="true" />
            {t("contact.schedule")}
          </button>
          <a
            href={`mailto:${EMAIL}`}
            title={EMAIL}
            className={`${ctaButton} border border-cta-muted bg-transparent text-cta-text`}
          >
            <Mail size={18} strokeWidth={1.8} aria-hidden="true" />
            {t("contact.email")}
          </a>
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
