import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import useMobile from "@/hooks/useMobile";
import { PopupButton } from "react-calendly";

export const About = () => {
  const isMobile = useMobile();
  return (
    <div id="about" className="lg:mt-56 pt-80 lg:pt-0 z-30">
      <div className="flex  w-full items-center justify-center pb-28">
        <div className="w-[80%] 2xl:w-full flex flex-col gap-4 md:gap-10">
          <BlurFade delay={0.10} inView>
            <h1 className=" text-3xl md:text-4xl font-extrabold flex flex-col dark:text-white">
              {isMobile && (
                <span className="text-dark-gray dark:text-white text-4xl">Hello World 👋</span>
              )}
              <div>
                <span className="text-dark-gray">I'm</span>{" "}
                <span>Kelman Santos</span>
              </div>
            </h1>
          </BlurFade>
          <BlurFade delay={0.10 * 2} inView>
            <h2 className="md:w-[50%] w-full text-pretty  dark:text-light-gray text-dark-gray font-medium  2xl:text-xl text-base">
              A Full-stack Developer who loves turning ideas into reality.
              Whether on the front-end or back-end, I focus on seamless and
              beautiful solutions. With a passion for continuous learning and
              creative problem-solving, I strive to make a meaningful impact
              through technology.
            </h2>
          </BlurFade>
          <BlurFade delay={0.10 * 3} inView>
            <div className="md:w-[40%] md:h-10 h-28 w-full flex flex-col md:flex-row gap-4">
              <Button variant={"default"} size={"lg"} className="h-full dark:bg-light-gray  dark:border-white">
                See my resume
              </Button>
              <Button
                variant={"outline"}
                size={"lg"}
                className="bg-gray-200 dark:bg-onyx dark:text-gray-200 h-full"
              >
                <PopupButton
                  className=""
                  url="https://calendly.com/kelmandossantos/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                  rootElement={document.getElementById("root") as HTMLElement}
                  text="Get in touch"
                />
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};
