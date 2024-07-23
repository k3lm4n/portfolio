import { Button } from "@/components/ui/button";
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";

function BookInterview() {
  return (
    <div className="w-full h-full">
      <Button variant={"default"} size={"lg"}>
        <PopupButton
          url="https://calendly.com/kelmandossantos/30min?hide_event_type_details=1&hide_gdpr_banner=1"
          rootElement={document.getElementById("root") as HTMLElement}
          text="Click here to schedule!"
        />
      </Button>
    </div>
  );
}

export default BookInterview;
