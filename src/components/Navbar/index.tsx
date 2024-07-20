import { DiscordSVG, GitHubSVG, LinkedInSVG, SunSVG } from "@/assets";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";

export const Navbar = () => {
  return (
    <div className="relative h-full ">
      <NavigationMenu className="w-full flex  justify-between h-16 bg-white/30 backdrop-blur-3xl   rounded-xl border-white/30 top-5 border">
        <NavigationMenuList className="px-4 flex gap-10 ">
          <NavigationMenuItem className="cursor-pointer">
            About
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            Experience
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            Tech Stack
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            Book Interview
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList className="flex gap-6 px-5">
          <NavigationMenuItem className="cursor-pointer">
            <img src={GitHubSVG} alt="GitHub" className="fill-dark-gray/25" />
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <img src={LinkedInSVG} alt="LinkedIn" />
          </NavigationMenuItem>
          <NavigationMenuItem className="cursor-pointer">
            <img src={DiscordSVG} alt="Discord" />
          </NavigationMenuItem>
          <span className="h-6 border border-dark-gray/25" />
          <NavigationMenuItem className="cursor-pointer">
            <img src={SunSVG} alt="Sun" />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
