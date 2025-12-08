import headerImg from "@/assets/image/hearderImg.png";
import serviceimg from "@/assets/image/service.jpeg";
import ExtraService from "@/components/common/ExtraService";
import PageTransition from "@/components/common/PagesTransition";
import { services, serviceTabs } from "@/constant/services";
import { useState } from "react";

const Servise = () => {
  const [isHover, setIsHover] = useState(-1);

  return (
    <PageTransition>
      <div className="w-screen mt-20 flex flex-col items-center bg-white ">
        <div className="relative flex w-full h-100">
          <img className="w-full h-full" src={headerImg} alt="" />
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-[80%] max-[500px]:w-full min-[500px]:px-10 px-2 md:px-0  flex flex-col lg:p-8 gap-8 items-center py-25">
            {serviceTabs.map((serv, ind) => {
              return (
                <div
                  className="group w-full h-[330px] cursor-default flex max-[950px]:flex-col max-[950px]:h-fit shadow-2xl border border-gray-200"
                  key={serv.label + ind}
                >
                  <div className="w-[40%] max-[950px]:w-full max-[950px]:h-[300px] h-full">
                    <img
                      className="w-full h-full object-cover"
                      src={serv.image}
                      alt=""
                    />
                  </div>
                  <div className="w-[60%] max-[950px]:w-full h-full min-[500px]:p-10 p-3 bg-gray-100">
                    <p className="px-4 py-3 font-bold group-hover:text-primary max-[1400px]:text-xl text-2xl">
                      {serv.title}{" "}
                    </p>
                    <p></p>
                    <div className="flex w-full items-center gap-4">
                      <p className="text-4xl text-gray-400 group-hover:text-primary font-bold">
                        {serv.id}{" "}
                      </p>
                      <hr className="w-full border-2 border-gray-300" />
                    </div>
                    <p className="px-4 py-3 max-[1400px]:text-sm">
                      {serv.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full relative flex flex-col items-center">
          <div className="w-full flex h-400 sm:h-360 lg:h-240 xl:h-200">
            <div className="w-3/5 h-full bg-primary"></div>
            <img
              className="w-2/5 h-full  object-cover"
              src={serviceimg}
              alt=""
            />
          </div>
          <div className="absolute flex flex-col items-center top-0 py-20">
            <div>
              {" "}
              <button className="text-white text-xl flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11"
                  height="15"
                  viewBox="0 0 11 15"
                  fill="none"
                >
                  <path
                    d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z"
                    fill="#EA5501"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                    fill="#EA5501"
                  ></path>
                </svg>{" "}
                About industrie
              </button>
            </div>
            <div className="flex  items-center">
              <div className="text-2xl w-2/3 md:text-5xl font-semibold text-white">
                Always powering your business for over{" "}
                <b className="text-black">30 years</b>{" "}
              </div>
            </div>
            <div className="w-2/3 grid  lg:grid-cols-2  gap-8 pt-20">
              {services.map((serv, ind) => {
                return (
                  <div
                    className=" group w-full p-5 bg-white flex rounded-xs gap-8 cursor-default"
                    onMouseEnter={() => setIsHover(ind)}
                    onMouseLeave={() => setIsHover(-1)}
                  >
                    <div className="flex flex-col gap-8">
                      <div className="bg-gray-50 flex justify-center items-center rounded-xs w-15 h-15 ">
                        <serv.logo />
                      </div>
                      <div
                        className={`rotate-90 text-2xl font-bold text-gray-300 ${
                          isHover == ind && "text-gray-400"
                        }`}
                      >
                        0{ind + 1}{" "}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="font-semibold text-xl">{serv.title}</p>
                      <p className="text-gray-500 text-sm ">{serv.desc} </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="py-16 w-full">
          <ExtraService />
        </div>
      </div>
    </PageTransition>
  );
};

export default Servise;
