import { useTranslation } from "react-i18next";
import { EMAIL, sectionLinks, socialLinks } from "@/contants/links";
import { cn, wrap } from "@/lib/utils";

const footerLinks = sectionLinks.filter((link) => link.id !== "projects");

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={cn(wrap, "pb-12")}>
      <div className="flex flex-wrap justify-between gap-10 border-t border-line pt-10 pb-8">
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold">{t("footer.thanks")}</span>
          <span className="text-sm text-muted">{t("footer.tagline")}</span>
        </div>
        <div className="flex flex-wrap gap-16">
          <nav aria-label={t("footer.links")} className="flex flex-col gap-2.5 text-sm">
            <span className="font-semibold">{t("footer.links")}</span>
            {footerLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="text-muted hover:opacity-60">
                {t(link.label)}
              </a>
            ))}
          </nav>
          <nav aria-label={t("footer.social")} className="flex flex-col gap-2.5 text-sm">
            <span className="font-semibold">{t("footer.social")}</span>
            <a href={`mailto:${EMAIL}`} className="text-muted hover:opacity-60">
              Email
            </a>
            {socialLinks.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-muted hover:opacity-60">
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="border-t border-line pt-5 text-[13px] text-muted">{t("footer.copyright")}</div>
    </footer>
  );
}
