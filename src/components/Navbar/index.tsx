import {
  AboutSVG,
  DiscordSVG,
  ExperienceSVG,
  GetInTouchSVG,
  GitHubSVG,
  LinkedInSVG,
  // SunSVG,
  TechStackSVG,
} from "@/assets";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

import useTablet from "@/hooks/useTablet";

export const Navbar = () => {
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
      <div className="mx-auto flex items-center justify-center w-full h-full z-20">
        <NavigationMenu className="fixed w-[85%] flex  h-16 bg-onyx/25 backdrop-blur-3xl   rounded-xl border-white/30 bottom-5 border">
          <NavigationMenuList className=" flex justify-between px-9 gap-10">
            <NavigationMenuItem className="cursor-pointer ">
              <a href="#about" onClick={() => handleScroll}>
                <img src={AboutSVG} alt="" />
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem className="cursor-pointer  ">
              <a href="#experiences" onClick={() => handleScroll}>
                <img src={ExperienceSVG} alt="" />
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem className="cursor-pointer  ">
              <a href="#techStack" onClick={() => handleScroll}>
                <img src={TechStackSVG} alt="" />
              </a>
            </NavigationMenuItem>

            <NavigationMenuItem className="cursor-pointer  ">
              <a href="#getInTouch" onClick={() => handleScroll}>
                <img src={GetInTouchSVG} alt="" />
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  ) : (
    <div className="mx-auto flex items-center justify-center w-[90%] h-full">
      <NavigationMenu className="fixed w-[80%] flex  justify-between h-16 bg-white/30 backdrop-blur-3xl   rounded-xl border-white/30 top-5 border">
        <NavigationMenuList className="px-4 flex gap-10 ">
          <NavigationMenuItem className="cursor-pointer">
            <a href="#about" onClick={() => handleScroll}>
              About
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <a href="#experiences" onClick={() => handleScroll}>
              Timeline
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <a href="#techStack" onClick={() => handleScroll}>
              Tech Stack
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <a href="#getInTouch" onClick={() => handleScroll}>
              Get in Touch
            </a>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="flex gap-6 px-5">
          <NavigationMenuItem
            className="cursor-pointer"
            onClick={() => window.open("https://github.com/k3lm4n", "_blank")}
          >
            <img src={GitHubSVG} alt="GitHub" className="fill-dark-gray/25" />
          </NavigationMenuItem>
          <NavigationMenuItem
            className="cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/kelman-dias-dos-santos-812693185/",
                "_blank"
              )
            }
          >
            <img src={LinkedInSVG} alt="LinkedIn" />
          </NavigationMenuItem>
          <NavigationMenuItem
            className="cursor-pointer"
            onClick={() =>
              window.open(
                "https://discord.com/users/826107786643243038",
                "_blank"
              )
            }
          >
            <img src={DiscordSVG} alt="Discord" />
          </NavigationMenuItem>
          {/* <span className="h-6 border border-dark-gray/25" />
          <NavigationMenuItem className="cursor-pointer">
            <a href="">
              <img src={SunSVG} alt="Sun" />
            </a>
          </NavigationMenuItem> */}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
