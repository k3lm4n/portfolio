export default function Footer() {
  return (
    <div className="w-full h-[325px] flex justify-around items-center">
      <div className="h-full w-[80%] flex flex-col justify-between">
        <div className="flex items-center h-full text-sm  font-black">Thanks for stopping by!</div>
        <div className="flex items-center h-full text-sm font-light">
          © 2024 Kelman Dias dos Santos. All Rights Reserved.
        </div>
      </div>
      <div className="w-[20%] flex  justify-between">
        <div className="flex flex-col ">
          <span className="mb-8 font-bold">Links</span>
          <div className="flex flex-col gap-4 text-sm font-light">
            <a href="">About</a>
            <a href="">Experiences</a>
            <a href="">Tech Stack</a>
            <a href="">Book Interview</a>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="mb-8 font-bold">Elsewhere</span>
          <div className="flex flex-col gap-4 text-sm font-light">
            <a href="">Email</a>
            <a href="">LinkedIn</a>
            <a href="">Github</a>
            <a href="">Discord</a>
          </div>
        </div>
      </div>
    </div>
  );
}
