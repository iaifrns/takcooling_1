import fond from "@/assets/image/fond.jpg";
import fond2 from "@/assets/image/fond_hom.jpg";
import serviceImg from "@/assets/other/imgM16.jpg";
import villeImg from "@/assets/image/villeHome.jpg";
import blog2 from '@/assets/image/ing2.jpeg'
import blog3 from '@/assets/image/ing3.jpeg'
import blog4 from '@/assets/image/ing4.jpeg'
import blog5 from '@/assets/image/ing5.jpeg'
import blog6 from '@/assets/image/ing6.png'
import Counter from "@/components/common/Counter";
import PageTransition from "@/components/common/PagesTransition";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { email, phone } from "@/constant/generalInfo";
import { extraServ, services, serviceTabs } from "@/constant/services";
import { redirectToWhatsapp } from "@/services/redirectToWhatsapp";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { backgroundHome } from "@/store/appStore";
import { tabs , carouselHome ,parteneer } from "@/store/appStore";


const Home = () => {
  const [fondH, setFondH] = useState(0);
  const [tab, setTab] = useState(1);
  const [curr, setCurr] = useState(0);
  const autoSlide = false;
  const autoSlideIntervale = 10000;

  /* const employer = [
        { Name: 'Peter Hase', poste: 'Sr. ingineer', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/02/tem_6-414x500.jpg' },
        { Name: 'Lawrence Pater', poste: 'Four Man', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/01/team_img_4-414x500.jpg' },
        { Name: 'Braley Raws', poste: 'Sr. ingineer', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/01/team_img_5-414x500.jpg' }
    ] */
 

  const prev = () => setCurr(curr == 0 ? 1 : 0);
  const next = () => setCurr(curr == 1 ? 0 : 1);

  const handlenext = () => {
    setFondH(fondH === backgroundHome.length ? 0 : fondH + 1);
  };

  const handleprev = () => {
    setFondH(fondH === 0 ? backgroundHome.length - 1 : fondH - 1);
  };

  useEffect(() => {
    const SlideIntervale = setInterval(() => {
      setFondH((prev) => (prev === backgroundHome.length - 1 ? 1 : prev + 1));
    }, 10000);

    return () => clearInterval(SlideIntervale);
  }, []);

  useEffect(() => {
    const SlideIntervale = setInterval(() => {
      setCurr((prev) => (prev === 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(SlideIntervale);
  }, []);

  return (
    <PageTransition>
      <div>
        {/* image D'acceuil---------------------------------------- */}
        <div className="w-full h-[800px] mt-20">
          <div className="hidden h-25  relative text-gray-600 bg-white md:flex pl-80 items-center z-10 -left-[48%] -rotate-90">
            <p className="text-sm font-semibold">
              Email. {email} | Call. {phone}{" "}
            </p>
          </div>
          <div className="w-full h-[800px] absolute z-4 left-0 top-0 bg-[rgba(0,0,0,0.6)] "></div>
          {backgroundHome.map((back, index) => {
            return (
              <div className={`${back.id !== fondH && "hidden"}`}>
                <back.image />
              </div>
              
            )
          })}
          <motion.div
            key={fondH}
            className="absolute z-5 w-full top-0 h-[800px] flex justify-evenly items-end "
          >
            <div className="w-4/5 md:w-2/5 h-4/5 flex flex-col justify-center gap-15">
              <motion.p
                initial={{ opacity: [0, 0.5, 0], translateX: 20 }}
                animate={{ opacity: 1, translateX: -20 }}
                transition={{ duration: 1.5, ease: "linear" }}
                className="font-serif text-2xl md:text-3xl lg:text-7xl text-white "
              >
                {backgroundHome[fondH].title}
              </motion.p>
              <motion.p
                initial={{ opacity: [0, 0.5, 0], translateY: 20 }}
                animate={{ opacity: 1, translateY: -20 }}
                transition={{ duration: 1.5, ease: "linear" }}
                className="text-gray-300 lg:text-xl"
              >
                {backgroundHome[fondH].content}
              </motion.p>
              <div className="flex items-center gap-10">
                <button
                  className="w-45 bg-green-600 h-12 text-white flex justify-evenly items-center font-semibold rounded-sm"
                  onClick={redirectToWhatsapp}
                >
                  Contact Us <FaWhatsapp size={20} />
                </button>
              </div>
            </div>
            <div className="hidden md:flex h-4/5 flex-col justify-center  gap-10">
              <button
                onClick={() => handlenext()}
                className="bg-primary flex p-3 rounded-sm hover:hover:bg-[rgba(0,115,255,0.7)] items-center justify-center"
              >
                <ArrowRight className="invert-100" />
              </button>
              <button
                onClick={() => handleprev()}
                className="bg-primary flex p-3 rounded-sm hover:hover:bg-[rgba(0,115,255,0.7)] items-center justify-center"
              >
                <ArrowLeft className="invert-100" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* div contenaire de la page Home */}
        <div className="bg-white relative z-10 -top-20 w-full flex flex-col items-center">
          {/* Atout de l'entreprise------------------------------------------------ */}
          <ScrollAnimation>
            <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-between  py-25 gap-8">
              {services.map((serv, ind) => (
                <Card className="group relative w-full lg:w-full h-fit hover:bg-[rgba(0,115,255,0.7)] flex-wrap  bg-gray-50 gap-4 p-10">
                  <div className="relative z-20 flex flex-col gap-4">
                    <serv.logo />
                    <p className="text-black group-hover:text-white font-semibold text-xl">
                      {serv.title}
                    </p>
                    <p className="text-gray-500 group-hover:text-white">
                      {serv.desc}
                    </p>
                  </div>
                  <div className="absolute top-14 -right-1 z-15 ">
                    <span className="text-[200px] text-gray-200 font-extrabold">
                      0{ind + 1}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollAnimation>

          {/* Historique de l'entreprise------------------------------------------ */}
          <ScrollAnimation>
            <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col md:flex-row justify-between py-5 gap-4">
              <div className="w-full md:w-3/5 ">
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
                      clipRule="evenodd"
                      d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                      fill="#EA5501"
                    ></path>
                  </svg>{" "}
                  About Us
                </button>
                <p className="text-black text-2xl md:text-[40px] font-semibold">
                  Your London Partner for Reliable Cooling, Comfort and{" "}
                  <span className="text-primary">Technical Maintenance</span>{" "}
                </p>
              </div>
              <div className="w-full md:w-2/5 font-semibold flex flex-col gap-3">
                <p className="text-black">
                  Operating since 2023, we specialise in delivering dependable
                  cooling solutions — from AC installations and cold-room setups
                  to routine servicing and emergency repairs.
                </p>
                <p className="text-gray-500">
                  Our approach blends engineering know-how with friendly,
                  responsive service to keep your space comfortable, efficient,
                  and worry-free throughout the year.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <Card className="relative w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 h-100 md:h-130 py-5 ">
              <img
                src={serviceImg}
                className="w-full h-full object-cover bg-center"
                alt=""
              />
              <Link
                to="/about"
                className="absolute z-10 bottom-115 left-[70%] px-1 bg-primary lg:w-1/6 h-15 flex items-center justify-center text-white cursor-pointer"
              >
                Discover More <ArrowRight className="invert-0" />
              </Link>
            </Card>
          </ScrollAnimation>

          {/* chiffre sur l'entreprise---------------------------------------------- */}
          <ScrollAnimation>
            <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex justify-between md:py-40 gap-4">
              <div>
                <Counter target={251} text={"+"} />
                <p className="pt-4 text-gray-400 md:font-semibold">Projects</p>
              </div>
              <div>
                <Counter target={98} text={"%"} />
                <p className="pt-4 text-gray-400 md:font-semibold">
                  Cases Solved
                </p>
              </div>
              <div>
                <Counter target={99} text={"%"} />
                <p className="pt-4 text-gray-400 md:font-semibold">
                  Happy Clients
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

          {/* Div Service de l'entreprise----------------------------------------- */}
          <ScrollAnimation>
            <div className="w-full bg-gray-50  flex flex-col items-center">
              <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col pt-20">
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
                        clipRule="evenodd"
                        d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                        fill="#EA5501"
                      ></path>
                    </svg>
                    Our Services
                  </button>
                </div>
                <div className="flex flex-col md:flex-row  justify-between">
                  <div className="w-full md:w-1/2 text-2xl md:text-5xl font-semibold text-black">
                    Creative features from climatisation
                  </div>
                  <Link
                    to="/blog"
                    className="border rounded-md border-gray-500 h-15 m-8 md:mx-4 flex justify-center items-center gap-2 px-4 cursor-pointer"
                  >
                    Views All Solutions <ArrowRight />
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row justify-between py-10">
                  <div className="w-full md:w-1/3 flex flex-wrap md:flex-col justify-evenly items-center h-100">
                    {serviceTabs.map((taber, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => setTab(taber.id)}
                          className={`w-2/3 border-2 border-gray-500 font-bold rounded-sm bg-gray-100 ${tab === taber.id && "bg-primary border-0"
                            } h-12 hover:bg-primary`}
                        >
                          {taber.label}
                        </button>
                      );
                    })}
                  </div>
                  <div className="w-full md:w-2/3 flex flex-col md:flex-row py-4 gap-4">
                    <Card className="w-full md:w-1/2 h-100">
                      <motion.img
                        className="h-full w-full object-cover"
                        key={tab}
                        initial={{ opacity: [0, 0.5, 0], translateY: 20 }}
                        animate={{ opacity: 1, translateY: -20 }}
                        transition={{ duration: 0.4, ease: "linear" }}
                        src={serviceTabs[tab].image}
                        alt=""
                      />
                    </Card>
                    <motion.div
                      key={tab}
                      initial={{ opacity: [0, 0.5, 0], translateX: 20 }}
                      animate={{ opacity: 1, translateX: -20 }}
                      transition={{ duration: 0.4, ease: "linear" }}
                      className="w-full md:w-1/2 pl-12 flex flex-col justify-around "
                    >
                      <p className="text-3xl font-semibold">
                        {serviceTabs[tab].title}{" "}
                      </p>
                      <p className="font-semibold text-gray-600 text-sm">
                        {serviceTabs[tab].content}
                      </p>
                      <div className="flex flex-col gap-2">
                        <p>
                          <i className="ri-check-line ">
                            24/7 Customer Support
                          </i>
                        </p>
                        <p>
                          <i className="ri-check-line ">
                            Certified & Experienced Engineers
                          </i>
                        </p>
                        <p>
                          <i className="ri-check-line ">
                            Fast & Guaranteed Service
                          </i>
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
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
                        <p className="font-semibold text-gray-400 text-[15px] text-justify">
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
            </div>
          </ScrollAnimation>

          <div className="w-full flex justify-center ">
            {/* Historique des travaux------------------------------------  */}
            <ScrollAnimation>
              <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 relative py-20 ">
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
                        clipRule="evenodd"
                        d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                        fill="#EA5501"
                      ></path>
                    </svg>
                    Recent Work
                  </button>
                </div>
                <div className="flex flex-col md:flex-row justify-between md:items-center">
                  <div className="w-full md:w-1/2 text-2xl md:text-5xl font-semibold text-black">
                    Discover our latest project
                  </div>
                  <div className="hidden md:flex justify-between md:justify-evenly gap-4">
                    <button
                      onClick={prev}
                      className="border-2 border-gray-500 p-2 h-10 flex gap-2 items-center"
                    >
                      <ArrowLeft />
                    </button>
                    <button
                      onClick={next}
                      className="border-2 border-gray-500 p-2 h-10 flex gap-2 items-center"
                    >
                      <ArrowRight />
                    </button>
                  </div>
                </div>
                <div className="overflow-hidden relative w-full p-10">
                  <motion.div
                    transition={{ duration: 1.5, ease: "linear" }}
                    className="hidden w-full md:flex relative z-20  gap-10 duration-700 transition-all "
                    style={{ transform: `translateX(-${curr * 105}%) ` }}
                  >
                    {carouselHome.map((carousel, index) => {
                      return (
                        <motion.div
                          key={index}
                          className="flex flex-row w-full  gap-10"
                        >
                          <Card className="group w-80 md:w-90 2xl:w-100 relative  ">
                            <img src={carousel.image} className="h-70 w-full" alt="" />
                            <div className="absolute z-20 top-80 left-10 flex flex-col gap-4 group-hover:-translate-y-20 ease-in ease-initial duration-500">
                              <button className="bg-primary w-30 text-white text-xl rounded-2xl font-semibold">
                                Company
                              </button>
                              <p className="text-4xl font-semibold text-white">
                                {carousel.title}
                              </p>
                              <button className="g-5 w-6 rounded-full bg-primary group-hover:ease-initial ">
                                <ArrowRight className="invert-100" />
                              </button>
                            </div>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                  <div className="w-full relative p-5 md:px-20 z-10 -top-0  md:-top-15 bg-primary md:h-80 flex flex-col md:flex-row justify-evenly items-center gap-8">
                    <div className="w-full md:w-1/4">
                      <p className="text-6xl text-white font-semibold">2.52</p>
                      <p className="text-white font-semibold">
                        Success Projects
                      </p>
                    </div>
                    <div className="w-full lg:w-2/4 text-white font-semibold">
                      We carry out our projects with a single objective: the satisfaction of our clients.

                    </div>
                    <Link
                      to="/service"
                      className="w-full md:w-1/4 bg-white font-semibold flex justify-evenly px-2 py-3"
                    >
                      {" "}
                      consultation & Quote <ArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          {/* Div colaborateur------------------------------------------------ */}

          {/* Div partneer--------------------------------------------- */}

          <div className="w-full flex flex-col items-center bg-gray-50">
            <ScrollAnimation>
              <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col py-20">
                <div>
                  {" "}
                  <button className="text-primary text-xl flex items-center h-12 font-semibold w-1/4">
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
                        clipRule="evenodd"
                        d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                        fill="#EA5501"
                      ></path>
                    </svg>
                    Testimonials
                  </button>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-4 justify-between">
                  <div className="w-full md:w-1/3 text-4xl font-semibold text-black">
                    What people say about Industrie company
                  </div>
                  <div className="flex gap-4 justify-center">
                    <Link
                      to="/blog"
                      className="bg-primary text-white font-semibold p-2 h-10 mx-4 flex gap-2 items-center"
                    >
                      {" "}
                      More Reviews
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="w-full grid grid-cols-1 pl-5  md:grid-cols-2 lg:grid-cols-3 gap-8  py-10 justify-center">
                  {parteneer.map((emplo) => {
                    return (
                      <div className="group relative w-full">
                        <Card className="group  w-full h-70 relative ">
                          <div className="w-full flex  h-full  items-center justify-between flex-col  font-semibold p-10">
                            <div className="flex w-full gap-4">
                              <img
                                className="w-10 h-10 rounded-full"
                                src={emplo.image}
                                alt=""
                              />
                              <div className="">
                                <p className="font-semibold">Bm Askey Toren</p>
                                <p className="text-gray-300 flex justify-between w-full">
                                  {emplo.poste}
                                  {" "}
                                  <img
                                    className="w-15"
                                    src={emplo.entreprise}
                                    alt=""
                                  />
                                </p>
                              </div>
                            </div>
                            <p>
                              {" "}
                              At the heart of the global landscape, the industry
                              stands as a multidimensional force of progress
                              driving.
                            </p>
                            <div className="border-t-2 w-full border-gray-400 flex justify-between">
                              <div className="flex items-center text-primary ">
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-fill"></i>
                                <i class="ri-star-half-line"></i>
                              </div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="60"
                                height="43"
                                viewBox="0 0 60 43"
                                fill="none"
                              >
                                <path
                                  d="M57.3913 0H33.913C32.4746 0 31.3043 1.14482 31.3043 2.55199V24.2439C31.3043 25.6511 32.4746 26.7959 33.913 26.7959H45V42.1077C45 42.7082 45.805 42.9717 46.1739 42.4907L59.8696 24.6267C59.9542 24.5163 60 24.382 60 24.2439V2.55199C60 1.14482 58.8299 0 57.3913 0ZM58.6957 24.0312L46.3043 40.1939V26.1579C46.3043 25.8055 46.0124 25.5199 45.6522 25.5199H33.913C33.1938 25.5199 32.6087 24.9475 32.6087 24.2439V2.55199C32.6087 1.84841 33.1938 1.276 33.913 1.276H57.3913C58.1105 1.276 58.6957 1.84841 58.6957 2.55199V24.0312ZM26.087 0H2.6087C1.17026 0 0 1.14482 0 2.55199V24.2439C0 25.6511 1.17026 26.7959 2.6087 26.7959H13.6957V42.1079C13.6957 42.7049 14.5004 42.9721 14.8696 42.4907L28.5652 24.6267C28.6499 24.5163 28.6957 24.382 28.6957 24.2439V2.55199C28.6957 1.14482 27.5254 0 26.087 0ZM27.3913 24.0312L15 40.1939V26.1579C15 25.8055 14.708 25.5199 14.3478 25.5199H2.6087C1.88948 25.5199 1.30435 24.9475 1.30435 24.2439V2.55199C1.30435 1.84841 1.88948 1.276 2.6087 1.276H26.087C26.8062 1.276 27.3913 1.84841 27.3913 2.55199V24.0312Z"
                                  fill="#1F1F1F"
                                ></path>
                              </svg>
                            </div>
                          </div>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollAnimation>

            {/* <div className='w-full lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex flex-col py-20'>
                            <div className='flex justify-center'> <button className='text-primary text-xl flex items-center font-semibold'><svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none"><path d="M3.14286 10L0 15L8.78104e-07 0L3.14286 5V10Z" fill="#EA5501"></path><path fill-rule="evenodd" clipRule="evenodd" d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z" fill="#EA5501"></path></svg>Partners</button></div>
                            <div className='flex justify-center items-center'>
                                <div className=' text-5xl font-semibold text-black'>Explore Large-Scale Projects</div>
                            </div>
                            <div className='w-full flex py-10 justify-between'>
                                {parteneer.map((emplo) => {
                                    return (
                                        <div className='group relative'>
                                            <Card className='group md:w-90 h-70 relative '>
                                                <div className='w-full flex  shadow-2xl  items-center justify-center flex-col bg-white absolute top-100 right-20 overflow-hidden font-semibold py-4'>
                                                    <div className='flex w-full'>
                                                        <img src='https://industrie.rstheme.com/main/wp-content/uploads/2024/02/t_h_2.jpg' className='w-10 h-10 rounded-full' alt="" />
                                                        <div>
                                                            <p className='font-semibold'>Bm Askey Toren</p>
                                                            <p className='text-gray-300'> Ceo</p>
                                                        </div>
                                                    </div>
                                                    <p>{emplo.Name}</p>
                                                    <p>{emplo.poste}</p>
                                                </div>
                                            </Card>
                                        </div>
                                    )
                                })}
                            </div>
                        </div> */}
          </div>
          {/* blog et articles de l'entreprise--------------------------------- */}
          <ScrollAnimation>
            <div className="w-full  flex flex-col items-center">
              <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex h-full flex-col py-20">
                <div>
                  {" "}
                  <button className="text-primary text-xl flex items-center h-12 font-semibold w-1/4">
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
                        clipRule="evenodd"
                        d="M6.28571 10L3.14286 15L3.14286 10L4.71428 7.5L3.14286 5L3.14286 0L6.28571 5L6.28571 10ZM6.28571 10L7.85714 7.5L6.28571 5V0L11 7.5L6.28571 15V10Z"
                        fill="#EA5501"
                      ></path>
                    </svg>
                    Article 
                  </button>
                </div>
                <div className="flex flex-col md:flew-row w-full justify-between gap-4">
                  <div className="w-full md:w-2/3 text-4xl font-semibold text-black">
                    Articles & blog posts with useful information
                  </div>
                  <div className="flex gap-4">
                    <Link
                      to="/blog"
                      className="bg-primary text-white font-semibold p-2  h-10 mx-4 flex gap-2 items-center"
                    >
                      {" "}
                      More Reviews
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
                <div className="w-full h-200 xl:h-160 gap-8 py-10 flex flex-col md:flex-row">
                  <Card className="group hidden md:flex cursor-pointer w-full md:w-1/2 h-full relative">
                    <div className="w-full h-full absolute z-10 group-hover:scale-105">
                      <img className="h-full object-cover" src={blog4} alt="" />
                    </div>
                    <div className="w-full h-full absolute z-15 bg-[rgba(0,0,0,0.4)] "></div>
                    <Link to="/blog#containe6" className="w-2/3 flex flex-col gap-8 h-full absolute z-20 top-30 lg:top-50 left-8 cursor-pointer">
                      <p className="text-gray-300 font-semibold">
                        By Sagar . Feb 8 ,2024
                      </p>
                      <p className="text-xl lg:text-2xl text-white font-semibold">
                        VRF Air Conditioning: Your Complete Guide
                      </p>
                      <p className=" text-gray-400 hidden sm:flex text-sm  2xl:font-semibold">
                        VRF Air Conditioning: Your Complete Guide Enhance
                        Climate Control with Advanced VRF Air Conditioning
                        Variable Refrigerant Flow (VRF) air conditioning offers
                        precise, multi-zone climate control by expertly
                        adjusting refrigerant flow to meet the exact thermal
                        needs of each space.
                      </p>
                      <button className="bg-primary text-white text-sm 2xl:text-xl flex justify-center items-center h-10 w-1/2 p-4 rounded-sm">
                        Installation
                      </button>
                    </Link>
                  </Card>
                  <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
                    <Card className="group grid grid-cols-2 cursor-pointer h-1/2 w-full bg-gray-50">
                      <Link to="blog#containe5" className="flex flex-col justify-between p-5">
                        <p className="text-gray-300 font-semibold">
                          By Sagar . Feb 8 ,2024
                        </p>
                        <p className="text-sm lg:text-xl  font-semibold">
                          How Much Does a Blast Chiller Cost?
                        </p>
                        <p className=" text-gray-400 hidden sm:flex text-sm xl:font-semibold">
                          How Much Does a Blast Chiller Cost? How Much Does a
                          Blast Chiller Cost? UK 2025 Price Guide & Buyer Tips
                          Ever opened the walk-in.
                        </p>
                        <button className="flex justify-center w-full sm:text-sm xl:text-xl items-center bg-primary text-white h-10 sm:w-2/3  p-4 rounded-sm ">
                          Maintenance
                        </button>
                      </Link>
                      <img
                        className="h-full object-cover group-hover:scale-105"
                        src={blog5}
                        alt=""
                      />
                    </Card>
                    <Card className="group grid grid-cols-2 h-1/2 w-full cursor-pointer bg-gray-50">
                      <Link to="/blog#containe6" className="flex flex-col h-full justify-around  p-5">
                        <p className="text-gray-300 font-semibold">
                          By Sagar . Feb 8 ,2025
                        </p>
                        <p className="text-sm lg:text-xl font-semibold">
                          Inverter vs Non Inverter AC
                        </p>
                        <p className=" text-gray-400 hidden sm:flex text-sm  xl:font-semibold">
                          Inverter vs Non-Inverter AC: Your Friendly Guide to
                          Smarter Cooling Choosing the right air conditioner
                          goes beyond just brand and BTU rating.
                        </p>
                        <button className="flex justify-center w-full sm:text-sm xl:text-xl items-center bg-primary text-white h-10 sm:w-2/3  p-4 rounded-sm">
                          Repair
                        </button>
                      </Link>
                      <img
                        className="h-70 w-full object-cover group-hover:scale-105"
                        src={blog6}
                        alt=""
                      />
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
