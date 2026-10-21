import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, Moon, Sun, X } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";
import { sectionLinks, socialLinks } from "@/contants/links";
import { wrap } from "@/lib/utils";

const iconButton =
  "inline-flex size-11 cursor-pointer items-center justify-center rounded-xl border-0";

export function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);

  const isPt = i18n.language?.startsWith("pt");
  const toggleLanguage = () => i18n.changeLanguage(isPt ? "en" : "pt");
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      burgerRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="header-drop sticky top-0 z-10 pt-4">
      <div className={wrap}>
        <div className="flex min-h-14 items-center justify-between gap-4 rounded-[18px] border border-nav-line bg-nav py-1.5 pr-2 pl-[22px] backdrop-blur-[16px]">
          <a
            href="#about"
            className="inline-flex min-h-11 items-center text-base font-bold tracking-[-0.01em]"
          >
            Kelman<span className="text-accent">.</span>
          </a>
          <nav aria-label={t("nav.primary")} className="flex gap-[26px] text-sm text-muted max-nav:hidden">
            {sectionLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="hover:opacity-60">
                {t(link.label)}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-0.5">
            <div className="flex items-center gap-0.5 max-nav:hidden">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-xl hover:opacity-60"
                >
                  <Icon size={19} strokeWidth={1.7} />
                </a>
              ))}
              <span aria-hidden="true" className="mx-1.5 h-[22px] w-px bg-line" />
            </div>

            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={t(darkMode ? "nav.themeToLight" : "nav.themeToDark")}
              className={`${iconButton} bg-transparent text-inherit`}
            >
              {darkMode ? (
                <Sun size={20} strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <Moon size={20} strokeWidth={1.8} aria-hidden="true" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={t("nav.switchLanguage")}
              className="ml-1 h-9 min-w-11 cursor-pointer rounded-[10px] border border-line bg-surface px-2.5 text-sm font-semibold text-inherit"
            >
              {isPt ? "EN" : "PT"}
            </button>
            <button
              ref={burgerRef}
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t(menuOpen ? "nav.closeMenu" : "nav.openMenu")}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`${iconButton} ml-1 bg-btn-bg text-btn-text nav:hidden`}
            >
              {menuOpen ? (
                <X size={20} aria-hidden="true" />
              ) : (
                <Menu size={20} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="mobile-menu"
            className="menu-in mt-2 flex flex-col gap-1 rounded-[18px] border border-line bg-surface p-2 nav:hidden"
          >
            <nav aria-label={t("nav.mobile")} className="flex flex-col">
              {sectionLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className="flex min-h-[50px] items-center rounded-xl px-3.5 text-[17px] font-medium"
                >
                  {t(link.label)}
                </a>
              ))}
            </nav>
            <div className="mt-1 flex gap-2 border-t border-line px-3 pt-3 pb-1">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-xl bg-chip-bg"
                >
                  <Icon size={20} strokeWidth={1.8} />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
