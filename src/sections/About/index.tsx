import { Button } from "@/components/ui/button";
import { PopupButton } from "react-calendly";

export const About = () => {
  return (
    <div className="flex h-[540px] w-full items-center justify-center">
      <div className="w-full flex flex-col gap-10">
        <h1 className="  text-4xl font-extrabold">
          <span className="text-dark-gray">I'm</span>{" "}
          <span>Kelman Dias dos Santos</span>
        </h1>
        <h2 className="w-[50%]   text-dark-gray font-medium  text-xl">
          A Full-stack Developer who loves turning ideas into reality. Whether
          on the front-end or back-end, I focus on seamless and beautiful
          solutions. With a passion for continuous learning and creative
          problem-solving, I strive to make a meaningful impact through
          technology.
        </h2>
        <div className="w-[40%] h-10 flex gap-4">
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
  );
};
