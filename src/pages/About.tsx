import climat from "@/assets/image/climatisateur2.jpeg";
import headerImg from "@/assets/image/hearderImg.png";
import imageM13 from "@/assets/other/imgM13.jpeg";
import imageM16 from "@/assets/other/imgM16.jpg";
import imageM21 from "@/assets/other/imgM21.jpg";
import imageM3 from "@/assets/other/imgM3.jpg";
import Counter from "@/components/common/Counter";
import PageTransition from "@/components/common/PagesTransition";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { images } from "@/constant/images";
import { serviceTabs } from "@/constant/services";
import { parteneer } from "@/store/appStore";
import { useEffect, useState } from "react";

const About = () => {
  const [date, setDate] = useState(0);
  const [curr, setcurr] = useState(0);

  const dateHistory = [
    {
      id: 0,
      date: "In 2020",
      image: imageM3,
      title: "Company Foundation",
      content:
        "TakCooling was established as a small refrigeration and air-conditioning service provider, focused on residential cooling solutions and fast customer support",
    },
    {
      id: 1,
      date: "In 2022",
      image: imageM21,
      title: "Expansion and Professionalization",
      content:
        "The company expanded its operations into commercial refrigeration, introduced preventive maintenance services, and strengthened its technical team with certified HVAC specialists.",
    },
    {
      id: 2,
      date: "In 2025",
      image: imageM13,
      title: "Innovation and Digitalization",
      content:
        "TakCooling launched its modernized service platform, integrated smart diagnostic tools, and adopted eco-friendly cooling technologies to enhance efficiency and sustainability.",
    },
  ];

  const [ishovered, setIshovered] = useState(-1);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setcurr((prev) => (prev <= 2 ? prev + 1.02 : 0));
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [serviceTabs.length]);
  return (
    <PageTransition>
      <div className="w-screen mt-20 flex flex-col items-center bg-white ">
        <div className="relative flex w-full h-100">
          <img className="w-full h-full" src={headerImg} alt="" />
        </div>
        {/* corp du About */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col items-center py-25">
            <div>
              {" "}
              <button className="text-primary text-xl flex items-center">
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
                About Takcooling
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-xl w-[80%] text-center md:text-5xl font-semibold text-black">
                Powered by Innovation And Committed to Cooling Excellence.
              </div>
            </div>
            <div className="flex gap-60 h-300 sm:h-250 md:gap-30 lg:gap-2 w-full flex-col justify-around px-10  lg:flex-row  md:h-200  xl:h-100 pt-10">
              <div className="w-full lg:w-1/2 h-full flex relative">
                <img
                  className="h-[80%] max-[600px]:hidden w-2/4 sm:w-[300px] object-cover"
                  src={images.MISSIONIMG}
                  alt=""
                />
                <div className="min-[600]:absolute w-4/5 max-[600px]:w-full sm:w-2/3 shadow-2xl  border-b-2 border-primary min-[600px]:top-40 min-[600px]:left-20 sm:left-35 bg-gray-50 p-10">
                  <p className="font-semibold text-[22px]">Our Mission</p>
                  <p className="text-gray-500 text-sm pt-5">
                    Provide perfectly executed air-conditioning and
                    refrigeration solutions, backed by dedicated follow-up and
                    free support whenever issues arise. We work with precision,
                    integrity, and an open, friendly approach
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 h-full max-[600px]:w-full flex relative">
                <img
                  className="h-[80%] w-2/4 sm:w-[350px] object-cover max-[600px]:hidden"
                  src={imageM16}
                  alt=""
                />
                {/* <div className="h-2/3 w-20 sm:w-1/2 pl-4 flex justify-center">
                  <img
                    src="https://industrie.rstheme.com/main/wp-content/uploads/2024/02/icon1.png"
                    alt=""
                  />
                </div> */}
                <div className="min-[600]:absolute w-4/5 sm:w-2/3 shadow-2xl max-[600px]:w-full border-b-2 border-primary top-40 left-20 sm:left-35 bg-gray-50 p-10">
                  <p className="font-semibold text-[22px] ">Our Vision</p>
                  <p className="text-gray-500 text-sm pt-5">
                    To be London’s most trusted cooling partner by delivering
                    flawless installations, long-lasting performance, and a
                    customer experience built on honesty, reliability, and
                    genuine care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center bg-gray-50">
          <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col items-center py-25">
            <div>
              {" "}
              <button className="text-primary text-xl flex items-center">
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
                </svg>
                Our History
              </button>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-2xl  text-center md:text-5xl font-medium text-black">
                Company Journey
              </div>
            </div>
            <div className="w-full lg:h-80 flex flex-col items-center gap-8">
              <div className="w-full h-10 bg-white flex justify-center mt-10">
                {dateHistory.map((dater) => {
                  return (
                    <button
                      className={`text-gray-500 text-center shadow-2xl border border-gray-200 w-1/${
                        dateHistory.length
                      } ${date === dater.id && "bg-primary border-0 text-white"}`}
                      onClick={() => setDate(dater.id)}
                    >
                      {dater.date}
                    </button>
                  );
                })}
              </div>
              <div className="w-full  flex flex-col  md:flex-row md:h-100 gap-8 ">
                <img
                  className="w-full md:w-1/2 rounded-xs object-cover"
                  src={dateHistory[date].image}
                  alt=""
                />
                <div className="w-full md:w-1/2 p-10 flex flex-col justify-center gap-4 items-center">
                  <p className="text-xl font-semibold">
                    {dateHistory[date].title}
                  </p>
                  <p className="font-semibold text-gray-500">
                    {dateHistory[date].content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="relative w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 bg-gray-50 flex flex-col items-center py-16">
            <div>
              {" "}
              <button className="text-primary text-xl flex items-center">
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
            <div className="flex justify-center items-center">
              <div className="text-2xl  text-center md:text-5xl font-semibold text-black">
                Company Achievement
              </div>
            </div>
            {/* chiffre sur l'entreprise---------------------------------------------- */}
            <ScrollAnimation>
              <div className="w-full p-8 max-[600px]:flex-col flex justify-between md:py-20 gap-4">
                <div>
                  <Counter target={40} text={"+"} />
                  <p className="pt-4 text-gray-400 md:font-semibold">
                    Drilling Fields
                  </p>
                </div>
                <div>
                  <Counter target={49} text={"%"} />
                  <p className="pt-4 text-gray-400 md:font-semibold">
                    Crane Equipment
                  </p>
                </div>
                <div>
                  <Counter target={200} text={"m"} />
                  <p className="pt-4 text-gray-400 md:font-semibold">
                    Metal Factory
                  </p>
                </div>
                <div>
                  <Counter target={25} text={"K"} />
                  <p className="pt-4 text-gray-400 md:font-semibold">
                    Special Machinery
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="relative bg-black w-full h-150 md:h-120  flex items-center max-[600px]:hidden">
            <img className="w-1/2 h-full" src={climat} alt="" />
            <div className=" w-1/2 text-white p-20 flex flex-col gap-8">
              <div>
                {" "}
                <button className="text-primary text-xl flex items-center">
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
              <p className="text-3xl font-bold">What Client Say</p>
              <div className="flex flex-col md:flex-row  gap-8">
                <div className="flex flex-row justify-around  md:flex-col mx-4 items-center gap-4">
                  <img
                    className="w-15 h-15 rounded-full"
                    src={parteneer[0].image}
                    alt={parteneer[0].avis}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="29"
                    viewBox="0 0 40 29"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M2.85714 29H11.4286L17.1429 17.4V0H0V17.4H8.57143L2.85714 29ZM25.7143 29H34.2857L40 17.4V0H22.8571V17.4H31.4286L25.7143 29Z"
                      fill="white"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col w-full md:w-1/2 gap-4">
                  <p className="text-2xl font-semibold">{parteneer[0].Name}</p>
                  <p className="hidden sm:flex font-semibold text-sm lg:text-xl text-gray-300">
                    {parteneer[0].avis}
                  </p>
                  <hr />
                  <div className="flex justify-between">
                    <p className="text-2xl font-bold">Brist Tomson</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center bg-gray-50 ">
            <div className="relative w-full h-200 p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col gap-8 items-center py-25 overflow-hidden">
              <div>
                {" "}
                <button className="text-primary text-xl flex items-center">
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
              <div className="flex justify-center items-center">
                <div className="text-2xl  text-center md:text-5xl font-semibold text-black">
                  Discover the articles and projects of our company
                </div>
              </div>
              <div
                className={`relative left-155 h-full flex gap-8 overflow-hidden`}
                style={{ transform: `translateX(-${curr * 428}px)` }}
              >
                {serviceTabs.map((taber, ind) => (
                  <div
                    className="relative  w-[420px] bg-gray-200  h-full flex flex-col overflow-hidden"
                    key={ind + taber.id + taber.title}
                  >
                    <img
                      className={`w-full h-full object-cover ${
                        ishovered == ind && "scale-125"
                      }`}
                      src={taber.image}
                      alt=""
                    />
                    <div
                      onMouseEnter={() => setIshovered(ind)}
                      onMouseLeave={() => setIshovered(-1)}
                      className={`flex flex-col p-10 gap-4 absolute top-0 h-full w-full bg-black/45 justify-end`}
                    >
                      <p className="font-semibold text-xl text-gray-300">
                        {taber.label}{" "}
                      </p>
                      <hr className=" text-gray-400" />
                      <div className="flex justify-between">
                        <p className="font-semibold text-white text-2xl">
                          {taber.title}{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
