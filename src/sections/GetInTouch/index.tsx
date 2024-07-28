import { Button } from "@/components/ui/button";
import { SendHorizontal } from "lucide-react";
import { PopupButton } from "react-calendly";

function GetInTouch() {
  return (
    <div className="w-full h-[114px] my-[114px] flex justify-between items-center">
      <div className="w-[45%] flex flex-col gap-4">
        <h1 className="text-5xl   font-extrabold">Let’s work together</h1>
        <h3 className="text-dark-gray   text-2xl">
          Want to discuss an opportunity to create something great? I’m ready
          when you are.
        </h3>
      </div>
      <div className="">
        <Button
          variant={"default"}
          size={"icon"}
          className="h-16 w-56 rounded-lg flex gap-4 text-xl"
        >
          <SendHorizontal /> 
          <PopupButton
          url="https://calendly.com/kelmandossantos/30min?hide_event_type_details=1&hide_gdpr_banner=1"
          rootElement={document.getElementById("root") as HTMLElement}
          text="Get in touch"
        />
        </Button>
      </div>
    </div>
  );
}

export default GetInTouch;
