import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, Moon, Sun, X } from "lucide-react";
import useDarkMode from "@/hooks/useDarkMode";
import { sectionLinks, socialLinks } from "@/contants/links";
import { wrap } from "@/lib/utils";

const iconButton =
  "inline-flex size-11 cursor-pointer items-center justify-center rounded-[10px] border-0";

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
    <header className="header-drop sticky top-4 z-10 pt-4">
      <div className={wrap}>
        <div className="flex min-h-14 items-center justify-between gap-4 rounded-2xl border border-nav-line bg-nav py-1.5 pr-2 pl-5 shadow-[0_8px_30px_rgba(15,23,41,0.06)] backdrop-blur-[16px]">
          <a
            href="#about"
            className="hidden min-h-11 items-center text-base font-bold tracking-[-0.01em] max-nav:inline-flex"
          >
            Kelman Santos
          </a>
          <nav aria-label={t("nav.primary")} className="flex gap-6 text-[15px] max-nav:hidden">
            {sectionLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className="nav-link">
                {t(link.label)}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <div className="flex items-center gap-1 max-nav:hidden">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-11 items-center justify-center rounded-[10px]"
                >
                  <Icon size={20} strokeWidth={1.8} />
                </a>
              ))}
              <span aria-hidden="true" className="mx-1.5 h-6 w-px bg-line" />
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
            className="menu-in mt-2 flex flex-col gap-1 rounded-2xl border border-line bg-surface p-3 shadow-[0_16px_40px_rgba(15,23,41,0.12)] nav:hidden"
          >
            <nav aria-label={t("nav.mobile")} className="flex flex-col">
              {sectionLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={closeMenu}
                  className="flex min-h-12 items-center rounded-[10px] px-3 text-[17px] font-medium"
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
                  className="inline-flex size-11 items-center justify-center rounded-[10px] bg-chip-bg"
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
