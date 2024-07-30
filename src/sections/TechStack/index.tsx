import {
  ExpoLogo,
  ExpressLogo,
  NextLogo,
  NodeLogo,
  PrismaLogo,
  ReactHookFormLogo,
  ReactLogo,
  ReactQuery,
  SanityLogo,
  TailwindLogo,
  TSLogo,
  VercelLogo,
  ZOdLogo,
  ZustandLogo,
} from "@/assets";

function TechStack() {
  return (
    <div id="techStack" className="flex flex-col gap-6">
      <div className="mb-9">
        <h1 className="text-4xl font-bold text-center">Tech Stack</h1>
        <h3 className="text- font-medium text-center text-medium-gray">
          Explore the technologies and tools powering my projects.
        </h3>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[80%]">
          <div className="h-full grid grid-flow-row sm:grid-cols-4  lg:grid-cols-6 sm:grid-rows-7 grid-rows-12 lg:grid-rows-5  gap-4 auto-cols-auto ">
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center ">
                <img src={ReactLogo} className="mt-6" alt="React" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>React</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Web Framework</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={ExpressLogo} className="mt-6" alt="Express" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>Express</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Framework</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={TSLogo} className="mt-6" alt="Typescript" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>Typescript</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Language</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={TailwindLogo} className="mt-6" alt="Tailwind" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>Tailwind CSS</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>CSS Library</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={ExpoLogo} className="mt-6" alt="Expo" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>Expo</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Mobile Framework</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center ">
                <img src={ZOdLogo} className="mt-6" alt="ZOD" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>ZOD</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Validator</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={PrismaLogo} className="mt-6" alt="Prisma" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>Prisma</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>ORM</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center ">
                <img src={ZustandLogo} className="mt-6" alt="React" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>Zustand</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Global State</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={NextLogo} className="mt-6" alt="Next" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>Next</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Web Framework</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={ReactHookFormLogo} className="mt-6" alt="React" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>React Hook Form</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Library</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={VercelLogo} className="mt-6" alt="Vercel" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>Vercel</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Deployment</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={ReactQuery} className="mt-6" alt="React Query" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>React Query</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Server State</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={SanityLogo} className="mt-6" alt="Sanity" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>Sanity</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Headless CMS</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 h-64 rounded-3xl flex items-center flex-col justify-center bg-gray-200">
              <div className="flex flex-1 justify-center items-center">
                <img src={NodeLogo} className="mt-6" alt="Node" />
              </div>
              <div className="w-full px-6 pb-6 flex justify-between items-center">
                <div className="font-semibold text-onyx">
                  <p>Node</p>
                </div>
                <div className="px-3 py-1 bg-slate-100 rounded-3xl font-light text-dark-gray text-center">
                  <p>Interpreter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
