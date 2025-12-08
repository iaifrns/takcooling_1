import { extraServ } from "@/constant/services";
import { Card } from "../ui/card";
import ScrollAnimation from "./ScrollAnimation";

const ExtraService = () => {
  return (
    <ScrollAnimation>
      <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 py-5 ">
        {extraServ.map((serv, ind) => (
          <Card
            key={serv.title + ind}
            className="group relative w-full  flex flex-col h-80 p-10 pt-12  gap-4 hover:border-b-2 hover:mt-3 border-primary "
          >
            <div className="relative z-20 flex flex-col gap-4">
              <p className="text-xl font-semibold">{serv.title}</p>
              <serv.logo />
              <p className="font-semibold text-gray-500 text-[15px] text-justify">
                {serv.desc}
              </p>
            </div>
            <div className="absolute top-18 right-8 z-15 ">
              <span className="text-[70px]  text-gray-300 font-extrabold">
                {ind + 1}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </ScrollAnimation>
  );
};

export default ExtraService;
