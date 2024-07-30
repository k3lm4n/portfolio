import { Button } from "@/components/ui/button";
import useMobile from "@/hooks/useMobile";
import { PopupButton } from "react-calendly";

export const About = () => {
  const isMobile = useMobile();
  return (
    <div id="about" className="lg:mt-56 pt-80 lg:pt-0">
      <div className="flex  w-full items-center justify-center pb-28">
        <div className="w-[80%] 2xl:w-full flex flex-col gap-4 md:gap-10">
          <h1 className=" text-3xl md:text-4xl font-extrabold flex flex-col">
            {isMobile && <span className="text-dark-gray text-4xl">Hi 👋</span>}
            <div>
              <span className="text-dark-gray">I'm</span>{" "}
              <span>Kelman Santos</span>
            </div>
          </h1>
          <h2 className="md:w-[50%] w-full text-pretty   text-dark-gray font-medium  2xl:text-xl text-base">
            A Full-stack Developer who loves turning ideas into reality. Whether
            on the front-end or back-end, I focus on seamless and beautiful
            solutions. With a passion for continuous learning and creative
            problem-solving, I strive to make a meaningful impact through
            technology.
          </h2>
          <div className="md:w-[40%] md:h-10 h-28 w-full flex flex-col md:flex-row gap-4">
            <Button variant={"default"} size={"lg"} className="h-full">
              See my resume
            </Button>
            <Button
              variant={"outline"}
              size={"lg"}
              className="bg-gray-200 h-full"
            >
              <PopupButton
                url="https://calendly.com/kelmandossantos/30min?hide_event_type_details=1&hide_gdpr_banner=1"
                rootElement={document.getElementById("root") as HTMLElement}
                text="Get in touch"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
