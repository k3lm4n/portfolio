export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    const { href } = e.currentTarget;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="w-full p-11 h-full flex flex-col-reverse md:flex-row md:justify-between lg:items-end gap-4 ">
      <div className="h-full w-full flex flex-col justify-between md:items-end max-sm:pb-10 md:gap-12 lg:gap-24">
        <div className="h-full w-full">
          <div className="w-24 h-24"></div>
          <div className="flex items-center h-full text-l  font-black">
            Thanks for stopping by!
          </div>
        </div>
        <div className="flex h-full w-full text-xs font-thin">
          ©2024 Kelman Dias dos Santos. All Rights Reserved.
        </div>
      </div>
      <div className="lg:w-[30%] w-full h-full flex flex-col gap-4 md:flex-row justify-between ">
        <div className="flex flex-col ">
          <span className="mb-8 font-bold">Links</span>
          <div className="flex flex-col gap-4 text-sm font-light w-full ">
            <a href="#about" onClick={() => handleScroll}>
              About
            </a>
            <a href="#experience" onClick={() => handleScroll}>
              Timeline
            </a>
            <a href="#techStack" onClick={() => handleScroll}>
              Tech Stack
            </a>
            <a href="#getInTouch" onClick={() => handleScroll}>
              Get in touch
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="mb-8 font-bold">Elsewhere</span>
          <div className="flex flex-col gap-4 justify-center text-sm font-light">
            <a href="mailto:kelmandossantos@gmail.com">Email</a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://www.linkedin.com/in/kelman-dias-dos-santos-812693185/",
                  "_blank"
                );
              }}
            >
              LinkedIn
            </a>
            <a
              href="#"
              onClick={(e: any) => {
                e.preventDefault();
                window.open("https://github.com/k3lm4n", "_blank");
              }}
            >
              Github
            </a>
            <a
              href="#"
              onClick={(e: any) => {
                e.preventDefault();
                window.open(
                  "https://discord.com/users/826107786643243038",
                  "_blank"
                );
              }}
            >
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
