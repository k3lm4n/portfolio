import {
  AboutSVG,
  DiscordSVG,
  ExperienceSVG,
  GetInTouchSVG,
  GitHubSVG,
  LinkedInSVG,
  SunSVG,
  GitHubLightSVG,
  DiscordLightSVG,
  LinkedInLightSVG,
  MoonSVG,
  // SunSVG,
  TechStackSVG,
  TechStackDarkSVG,
  AboutDarkSVG,
  ExperienceDarkSVG,
  GetInTouchDarkSVG,
} from "@/assets";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import useTablet from "@/hooks/useTablet";
import useDarkMode, { useAppTheme } from "@/hooks/useDarkMode";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";

export const Navbar = () => {
  const { setDarkMode } = useDarkMode();
  const { appTheme } = useAppTheme();
  const { t, i18n: i18nInstance } = useTranslation();

  const currentLang = i18nInstance.language?.startsWith("pt") ? "pt" : "en";
  const toggleLang = () =>
    i18n.changeLanguage(currentLang === "en" ? "pt" : "en");

  const links = [
    { name: t("navbar.about"), href: "#about" },
    { name: t("navbar.timeline"), href: "#experiences" },
    { name: t("navbar.techStack"), href: "#techStack" },
    { name: t("navbar.collaborations"), href: "#collaborations" },
    { name: t("navbar.getInTouch"), href: "#getInTouch" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const { href } = e.currentTarget;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    var headerOffset = 100;
    var elementPosition = elem!.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    console.log("Element:", elem);
    elem?.scrollTo({
      behavior: "smooth",
      top: offsetPosition,
    });
  };

  const isTablet = useTablet();
  return isTablet ? (
    <>
      <div className="mx-auto  flex items-center justify-center w-full h-full z-20">
        <NavigationMenu className="fixed  w-[85%] flex h-16 dark:bg-[#18181D/25] bg-onyx/25 backdrop-blur-3xl items-center justify-center  rounded-xl border-white/30 bottom-5 border ">
          <NavigationMenuList className=" flex items-center ">
            <div className="flex w-full justify-center items-center gap-5">
              <NavigationMenuItem className="cursor-pointer w-7 h-7">
                <a href="#about" onClick={() => handleScroll}>
                  {appTheme ? (
                    <img src={AboutDarkSVG} alt="" />
                  ) : (
                    <img src={AboutSVG} alt="" />
                  )}
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem className="cursor-pointer w-7 h-7 ">
                <a href="#experiences" onClick={() => handleScroll}>
                  {appTheme ? (
                    <img src={ExperienceDarkSVG} alt="" />
                  ) : (
                    <img src={ExperienceSVG} alt="" />
                  )}
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem className="cursor-pointer w-7 h-7 ">
                <a href="#techStack" onClick={() => handleScroll}>
                  {appTheme ? (
                    <img src={TechStackDarkSVG} alt="" />
                  ) : (
                    <img src={TechStackSVG} alt="" />
                  )}
                </a>
              </NavigationMenuItem>

              <NavigationMenuItem className="cursor-pointer w-7 h-7 ">
                <a href="#getInTouch" onClick={() => handleScroll}>
                  {appTheme ? (
                    <img src={GetInTouchDarkSVG} alt="" />
                  ) : (
                    <img src={GetInTouchSVG} alt="" />
                  )}
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem
                className="cursor-pointer w-7 h-7"
                onClick={() => setDarkMode(!appTheme)}
              >
                {appTheme ? (
                  <img src={SunSVG} alt="Sun" />
                ) : (
                  <img src={MoonSVG} alt="Moon" />
                )}
              </NavigationMenuItem>
              <NavigationMenuItem
                className="cursor-pointer text-lg font-bold uppercase tracking-widest dark:text-white border border-dark-gray/25 px-2 rounded"
                onClick={toggleLang}
              >
                {currentLang === "en" ? "PT" : "EN"}
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  ) : (
    <div className="flex items-center justify-center  h-full">
      <NavigationMenu className="fixed w-[85%] flex  justify-between h-16 dark:bg-onyx/25 bg-white/30 backdrop-blur-3xl dark:text-light-gray  rounded-xl border-white/30 top-5 border">
        <div className="w-full flex items-center">
          <NavigationMenuList className="px-4 flex gap-4">
            {links.map((link, index) => (
              <NavigationMenuItem
                key={index}
                className="cursor-pointer text-nowrap"
              >
                <a href={link.href} onClick={() => handleScroll}>
                  {link.name}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </div>
        <div className="w-full flex items-center justify-end xl:px-8 px-4">
          <NavigationMenuList className="flex gap-4">
            <div className="hidden xl:flex gap-4">
              <NavigationMenuItem
                className="cursor-pointer"
                onClick={() =>
                  window.open("https://github.com/k3lm4n", "_blank")
                }
              >
                {appTheme ? (
                  <img src={GitHubLightSVG} className="h-7 w-7" alt="GitHub" />
                ) : (
                  <img src={GitHubSVG} className="h-7 w-7" alt="GitHub" />
                )}
              </NavigationMenuItem>
              <NavigationMenuItem
                className="cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/kelman-dias-dos-santos-812693185/",
                    "_blank",
                  )
                }
              >
                {appTheme ? (
                  <img
                    src={LinkedInLightSVG}
                    className="h-7 w-7"
                    alt="LinkedIn"
                  />
                ) : (
                  <img src={LinkedInSVG} className="h-7 w-7" alt="LinkedIn" />
                )}
              </NavigationMenuItem>
              <NavigationMenuItem
                className="cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://discord.com/users/826107786643243038",
                    "_blank",
                  )
                }
              >
                {appTheme ? (
                  <img
                    src={DiscordLightSVG}
                    className="h-7 w-7"
                    alt="Discord"
                  />
                ) : (
                  <img src={DiscordSVG} className="h-7 w-7" alt="Discord" />
                )}
              </NavigationMenuItem>
              <span className="h-6 border border-dark-gray/25" />
              <NavigationMenuItem
                className="cursor-pointer"
                onClick={() => setDarkMode(!appTheme)}
              >
                {appTheme ? (
                  <img src={SunSVG} className="h-7 w-7" alt="Sun" />
                ) : (
                  <img src={MoonSVG} className="h-7 w-7" alt="Moon" />
                )}
              </NavigationMenuItem>
            </div>
            <NavigationMenuItem
              className="cursor-pointer text-lg font-bold uppercase tracking-widest dark:text-white border border-dark-gray/25 px-2 rounded"
              onClick={toggleLang}
            >
              {currentLang === "en" ? "PT" : "EN"}
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  );
};
