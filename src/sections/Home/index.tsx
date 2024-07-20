import { Button } from "@/components/ui/button";

export const Home = () => {
  return (
    <div className="flex h-[540px] w-full items-center justify-center mb-28">
      <div className="w-full flex flex-col gap-10">
        <h1 className="font-inter text-4xl font-extrabold">
          <span className="text-dark-gray">I'm</span>{" "}
          <span>Kelman Dias dos Santos</span>
        </h1>
        <h2 className="w-[50%] font-inter text-dark-gray font-medium  text-xl">
          A Full-Stack Engineer who loves turning ideas into reality. Whether on
          the front-end or back-end, I focus on seamless and beautiful
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
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
};
