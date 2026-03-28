import ShimmerButton from "@/components/magicui/shimmer-button";
import useMobile from "@/hooks/useMobile";
import { SendHorizontal } from "lucide-react";
import { PopupButton } from "react-calendly";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

function GetInTouch() {
  const isMobile = useMobile();
  const { t } = useTranslation();
  const CalendlyButtonRef = useRef<PopupButton>(null);
  const HandleCalendly = () => {
    if (CalendlyButtonRef.current) {
      CalendlyButtonRef.current.setState({ isOpen: true });
    }
  };
  return (
    <div
      id="getInTouch"
      className="w-full my-[114px] flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-4 lg:w-[90%] md:mx-auto"
    >
      <div className="w-[80%] lg:w-[45%]  flex flex-col gap-4">
        <h1 className="lg:text-5xl text-2xl font-extrabold">
          {t("getInTouch.title")}
        </h1>
        <h3 className="text-dark-gray font-thin text-sm w-full lg:text-2xl">
          {t("getInTouch.subtitle")}
        </h3>
      </div>
      <div className="w-[80%] lg:w-56">
        <ShimmerButton
          onClick={HandleCalendly}
          className="h-16 w-full lg:w-72 rounded-lg flex gap-4 text-xl px-8 dark:text-white dark:bg-onyx"
          borderRadius="20px"
        >
          {!isMobile && <SendHorizontal />}
          <PopupButton
            ref={CalendlyButtonRef}
            url="https://calendly.com/kelmandossantos/30min?hide_event_type_details=1&hide_gdpr_banner=1"
            rootElement={document.getElementById("root") as HTMLElement}
            text={t("getInTouch.button")}
          />
        </ShimmerButton>
      </div>
    </div>
  );
}

export default GetInTouch;
