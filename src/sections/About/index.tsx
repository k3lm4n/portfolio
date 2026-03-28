import { HeroImage } from "@/assets";
import BlurFade from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import useMobile from "@/hooks/useMobile";
import { PopupButton } from "react-calendly";
import { useTranslation } from "react-i18next";

export const About = () => {
  const isMobile = useMobile();
  const { t } = useTranslation();
  return (
    <div
      id="about"
      className="container lg:mt-56 pt-10 lg:pt-0 z-30 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 w-full"
    >
      <div className="flex w-full items-center justify-center pb-28">
        <div className="w-full 2xl:w-full flex flex-col gap-4 md:gap-10">
          <BlurFade delay={0.1} inView>
            <h1 className=" text-3xl md:text-4xl font-extrabold flex flex-col dark:text-white gap-2">
              {isMobile && (
                <span className="text-dark-gray dark:text-white text-4xl">
                  {t("about.greeting")}
                </span>
              )}
              <div>
                <span className="text-dark-gray">{t("about.intro")}</span>{" "}
                <span>Kelman Santos</span>
              </div>
            </h1>
          </BlurFade>
          <BlurFade delay={0.1 * 2} inView>
            <h2 className="md:w-[80%] w-full text-pretty  dark:text-light-gray text-dark-gray font-medium  2xl:text-xl text-base">
              {t("about.description")}
            </h2>
          </BlurFade>
          <BlurFade delay={0.1 * 3} inView>
            <div className="md:w-[40%] md:h-10 h-10 w-full flex flex-col md:flex-row gap-4">
              {/* <Button variant={"default"} size={"lg"} className="h-full dark:bg-light-gray  dark:border-white">
                {t("about.resume")}
              </Button> */}
              <Button
                variant={"outline"}
                size={"lg"}
                className="bg-gray-200 dark:bg-onyx dark:text-gray-200 h-full"
              >
                <PopupButton
                  className=""
                  url="https://calendly.com/kelmandossantos/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                  rootElement={document.getElementById("root") as HTMLElement}
                  text={t("about.getInTouch")}
                />
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>
      <div className="w-full">
        <BlurFade
          delay={0.1 * 4}
          className=" flex items-center justify-center"
          inView
        >
          <img
            src={HeroImage}
            alt="Hero"
            className="w-[90%] h-auto rounded-xl object-cover opacity-90"
          />
        </BlurFade>
      </div>
    </div>
  );
};
