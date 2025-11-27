import fond from "@/assets/image/fond.jpg";
import fond2 from "@/assets/image/fond_hom.jpg";
import blog2 from "@/assets/image/ing2.jpeg";
import blog3 from "@/assets/image/ing3.jpeg";
import blog4 from "@/assets/image/ing4.jpeg";
import blog5 from "@/assets/image/ing5.jpeg";
import blog6 from "@/assets/image/ing6.png";
import serviceImg from "@/assets/other/imgM16.jpg";
import villeImg from "@/assets/image/villeHome.jpg";
import Counter from "@/components/common/Counter";
import PageTransition from "@/components/common/PagesTransition";
import ScrollAnimation from "@/components/common/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { email, phone } from "@/constant/generalInfo";
import { services } from "@/constant/services";
import { redirectToWhatsapp } from "@/services/redirectToWhatsapp";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [fondH, setFondH] = useState(0);
  const [tab, setTab] = useState(1);
  const [curr, setCurr] = useState(0);
  const autoSlide = false;
  const autoSlideIntervale = 10000;

  const backgroundHome = [
    {
      id: 1,
      title: "Your Trusted Cooling Experts in London",
      content:
        "Based in the heart of London, Takcooling provides fast, reliable, and engineered cooling solutions for homes, offices, and businesses across the city.",
      image: fond,
    },
    {
      id: 2,
      title: "Experience the Comfort of Perfect Cooling",
      content:
        "We install high-efficiency air conditioners that keep your spaces cool, quiet, and energy-efficient — designed for your comfort all year round.",
      image: villeImg,
    },
    {
      id: 3,
      title: "Engineered Installations, Built to Last",
      content:
        "Our certified engineers deliver precise and durable installations — because at Takcooling, every detail matters for performance and reliability.",
      image: fond2,
    },
  ];

  const tabs = [
    {
      id: 1,
      label: "Air conditioning installation",
      image: fond2,
      title:
        "Professional Air Conditioning Installation for Perfect Home Comfort",
      content:
        "Upgrade your home or business with a modern, energy-efficient AC system installed by certified experts. We deliver fast, clean, and reliable installation services tailored to your space, ensuring powerful cooling and maximum comfort all year round. Stay cool the smart way!",
    },
    {
      id: 2,
      label: "Air conditioning Repair",
      image: blog2,
      title:
        "Fast & Reliable Air Conditioning Repair — Stay Cool Again in No Time",
      content:
        "Is your AC making noise, blowing warm air, or not starting at all? Our skilled technicians diagnose and repair all AC issues with precision and speed. We restore your cooling system quickly so you can enjoy fresh, comfortable air without interruption",
    },
    {
      id: 3,
      label: "Air conditioning Maintenance",
      image: blog3,
      title: "Bridge construction is a complex engineering",
      content:
        "The industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
    {
      id: 4,
      label: "Refrigeration install",
      image: blog4,
      title: "Bridge construction is a complex engineering",
      content:
        "The industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
    {
      id: 5,
      label: "refrigeraition Repair",
      image: blog5,
      title: "Bridge construction is a complex engineering",
      content:
        "The industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
    {
      id: 6,
      label: "refrigeraition Maintenance",
      image: blog6,
      title: "Bridge construction is a complex engineering",
      content:
        "The industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley.",
    },
  ];

  const carouselHome = [
    {
      carousel1: {
        title: "Metal Industry",
        image:
          "https://industrie.rstheme.com/main/wp-content/uploads/2024/01/p_company_img_4.jpg",
      },
      carousel2: {
        title: "Metal Industry",
        image:
          "https://industrie.rstheme.com/main/wp-content/uploads/2024/01/p_company_img_3.jpg",
      },
      carousel3: {
        title: "Metal Industry",
        image:
          "https://industrie.rstheme.com/main/wp-content/uploads/2024/01/p_company_img_2.jpg",
      },
    },
    {
      carousel1: {
        title: "Metal Industry",
        image:
          "https://industrie.rstheme.com/main/wp-content/uploads/2024/01/p_slider_img_1.jpg",
      },
      carousel2: {
        title: "Metal Industry",
        image:
          "https://industrie.rstheme.com/main/wp-content/uploads/2024/01/p_company_img_2.jpg",
      },
      carousel3: {
        title: "Metal Industry",
        image:
          "https://industrie.rstheme.com/main/wp-content/uploads/2024/01/p_company_img_3.jpg",
      },
    },
  ];
  /* const employer = [
        { Name: 'Peter Hase', poste: 'Sr. ingineer', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/02/tem_6-414x500.jpg' },
        { Name: 'Lawrence Pater', poste: 'Four Man', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/01/team_img_4-414x500.jpg' },
        { Name: 'Braley Raws', poste: 'Sr. ingineer', image: 'https://industrie.rstheme.com/main/wp-content/uploads/2024/01/team_img_5-414x500.jpg' }
    ] */
  const parteneer = [
    {
      Name: "Peter Hase",
      poste: "Sr. ingineer",
      image:
        "https://industrie.rstheme.com/main/wp-content/uploads/2024/02/t_h_1.jpg",
      avis: "Excellent service! Quick installation and very professional team. My AC works perfectly.",
    },
    {
      Name: "Lawrence Pater",
      poste: "Four Man",
      image:
        "https://industrie.rstheme.com/main/wp-content/uploads/2024/02/t_h_2.jpg",
      avis: "Fast repair and great customer support. They saved my day! Highly recommended.",
    },
    {
      Name: "Braley Raws",
      poste: "Sr. ingineer",
      image:
        "https://industrie.rstheme.com/main/wp-content/uploads/2024/01/team_img_5-414x500.jpg",
      avis: "Reliable, efficient, and affordable. My refrigeration system has never worked better.",
    },
  ];

  const prev = () => setCurr(curr == 0 ? 1 : 0);
  const next = () => setCurr(curr == 1 ? 0 : 1);

  const handlenext = () => {
    setFondH(fondH === backgroundHome.length - 1 ? 0 : fondH + 1);
  };

  const handleprev = () => {
    setFondH(fondH === 0 ? backgroundHome.length - 1 : fondH - 1);
  };

  useEffect(() => {
    const SlideIntervale = setInterval(() => {
      setFondH((prev) => (prev === backgroundHome.length - 1 ? 0 : prev + 1));
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
          <AnimatePresence>
            <motion.div
              key={fondH}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="w-full absolute z-1 left-0 top-0 "
            >
              <motion.img
                src={backgroundHome[fondH].image}
                className="relative object-cover z-2 h-[800px] w-full "
                alt=""
              />
            </motion.div>
          </AnimatePresence>
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
            <Card className="relative w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 h-100 py-5 ">
              <img
                src={serviceImg}
                className="w-full h-full object-cover bg-center"
                alt=""
              />
              <Link
                to="/about"
                className="absolute z-10 bottom-85 left-[70%] px-1 bg-primary lg:w-1/6 h-15 flex items-center justify-center text-white cursor-pointer"
              >
                Discover More <ArrowRight className="invert-0" />
              </Link>
            </Card>
          </ScrollAnimation>

          {/* chiffre sur l'entreprise---------------------------------------------- */}
          <ScrollAnimation>
            <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 flex justify-between md:py-40 gap-4">
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
                    className="border-2 border-gray-500 h-12 m-8 md:mx-4 flex justify-center items-center gap-2 px-2 cursor-pointer"
                  >
                    Views All Solutions <ArrowRight />
                  </Link>
                </div>
                <div className="flex flex-col md:flex-row justify-between py-10">
                  <div className="w-full md:w-1/3 flex flex-wrap md:flex-col justify-evenly items-center h-100">
                    {tabs.map((taber, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => setTab(taber.id)}
                          className={`w-2/3 border-2 border-gray-500 font-bold rounded-sm bg-gray-100 ${
                            tab === taber.id && "bg-primary border-0"
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
                        src={tabs[tab].image}
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
                        {tabs[tab].title}{" "}
                      </p>
                      <p className="font-semibold text-gray-400 text-sm">
                        {tabs[tab].content}
                      </p>
                      <div className="flex flex-col gap-2">
                        <p>
                          <i className="ri-check-line ">
                            Manufacturing Solutions
                          </i>
                        </p>
                        <p>
                          <i className="ri-check-line ">
                            Research and Development
                          </i>
                        </p>
                        <p>
                          <i className="ri-check-line ">
                            Vehicle manufacturing
                          </i>
                        </p>
                      </div>
                      <button className="font-semibold w-1/3 ">
                        Read More
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
              <ScrollAnimation>
                <div className="w-full p-8 lg:w-5/6 xl:w-4/5 2xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-4 py-5 ">
                  <Card className="group relative w-full  flex flex-col h-80 p-10 pt-12  gap-4 hover:border-b-2 hover:mt-3 border-primary ">
                    <div className="relative z-20 flex flex-col gap-4">
                      <p className="text-xl font-semibold">
                        Planning & Execution
                      </p>
                      <svg
                        className="text-primary w-10 h-10 group-hover:invert-75 group-hover:rotate-y-180"
                        xmlns="http://www.w3.org/2000/svg"
                        height="512"
                        viewBox="0 0 512 512"
                        width="512"
                      >
                        <path d="m246.222 279.354v-210.019c0-4.418-3.582-8-8-8-59.12 0-114.701 23.022-156.505 64.827s-64.827 97.386-64.827 156.506 23.023 114.701 64.827 156.505 97.385 64.827 156.505 64.827 114.702-23.023 156.505-64.827c3.124-3.124 3.124-8.189 0-11.313zm-8 208.646c-113.221 0-205.333-92.112-205.333-205.333 0-110.54 87.808-200.958 197.333-205.179v205.179c0 2.122.843 4.157 2.343 5.657l145.084 145.084c-38.055 35.266-87.255 54.592-139.427 54.592zm248.889-231.111h-213.333c-3.236 0-6.153 1.949-7.391 4.938s-.554 6.43 1.734 8.718l150.849 150.85c1.562 1.562 3.609 2.343 5.657 2.343s4.095-.781 5.657-2.343c41.804-41.804 64.827-97.385 64.827-156.505 0-4.419-3.582-8.001-8-8.001zm-62.591 147.428-131.428-131.428h185.867c-1.872 49.188-20.982 95.324-54.439 131.428zm-150.742-166.984h213.333c4.418 0 8-3.582 8-8 0-59.12-23.022-114.702-64.827-156.506s-97.386-64.827-156.506-64.827c-4.418 0-8 3.582-8 8v213.333c0 4.418 3.582 8 8 8zm8-213.179c106.868 4.118 193.061 90.311 197.179 197.179h-197.179z"></path>
                      </svg>
                      <p className="font-semibold text-gray-500">
                        This is the starting point for achieving optimal
                        cooling. Our professional installation ensures your air
                        conditioning and refrigeration systems are set up
                        efficiently
                      </p>
                    </div>
                    <div className="absolute top-18 right-8 z-15 ">
                      <span className="text-[70px]  text-gray-200 font-extrabold">
                        01
                      </span>
                    </div>
                  </Card>
                  <Card className="relative group w-full  flex flex-col h-80 p-10 gap-4 hover:border-b-2 hover:mt-3 border-primary">
                    <div className="relative z-20 flex flex-col gap-4">
                      <p className="text-xl font-semibold">
                        Troubleshooting & Restoration
                      </p>
                      <svg
                        className="w-10 h-10 group-hover:invert-75 group-hover:rotate-y-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          clipRule="evenodd"
                          d="m193.99 213.76c17.27 0 31.32-14.05 31.32-31.32s-14.05-31.32-31.32-31.32-31.32 14.05-31.32 31.32 14.05 31.32 31.32 31.32zm0-52.64c11.75 0 21.32 9.56 21.32 21.32 0 11.75-9.56 21.32-21.32 21.32s-21.32-9.56-21.32-21.32c.01-11.75 9.57-21.32 21.32-21.32zm-49.53 2.36-9.43.88c-5.82.54-10.3 4.98-10.9 10.79-.52 5.03-.5 10.12.06 15.15.65 5.81 5.17 10.21 10.99 10.71l9.44.8c.69.06 1.02.49 1.16.84s.23.88-.22 1.42l-6.05 7.28c-3.73 4.5-3.76 10.8-.08 15.34 3.19 3.93 6.81 7.52 10.77 10.68 4.56 3.64 10.87 3.56 15.33-.21l7.24-6.1c.53-.45 1.06-.37 1.41-.23s.78.46.85 1.16l.88 9.43c.54 5.82 4.98 10.3 10.79 10.9 2.42.25 4.86.38 7.3.38 2.62 0 5.24-.15 7.85-.43 5.81-.65 10.21-5.17 10.71-10.99l.8-9.44c.06-.7.49-1.02.84-1.16s.88-.23 1.42.22l7.29 6.05c4.5 3.73 10.8 3.77 15.34.08 3.93-3.19 7.52-6.81 10.68-10.77 3.64-4.56 3.56-10.87-.21-15.33l-6.1-7.24c-.45-.53-.37-1.06-.23-1.41s.46-.78 1.16-.85l9.43-.88c5.82-.54 10.3-4.98 10.9-10.79.52-5.03.5-10.12-.06-15.15-.65-5.81-5.17-10.21-10.99-10.71l-9.44-.8c-.7-.06-1.02-.49-1.16-.84-.15-.35-.23-.88.22-1.42l6.05-7.29c3.73-4.5 3.77-10.8.08-15.34-3.19-3.93-6.81-7.52-10.77-10.68-4.56-3.64-10.87-3.56-15.33.21l-7.24 6.1c-.53.45-1.06.38-1.41.23-.35-.14-.78-.46-.85-1.16l-.88-9.43c-.54-5.82-4.98-10.3-10.79-10.9-5.03-.52-10.12-.5-15.15.06-5.81.65-10.21 5.17-10.7 10.99l-.8 9.44c-.06.7-.49 1.02-.84 1.16-.35.15-.88.23-1.42-.22l-7.29-6.05c-4.5-3.73-10.8-3.76-15.34-.08-3.93 3.19-7.52 6.81-10.68 10.77-3.64 4.57-3.56 10.87.21 15.33l6.1 7.24c.45.53.37 1.06.23 1.41-.15.35-.47.78-1.17.85zm8.57-8.71-6.1-7.24c-.66-.78-.67-1.85-.04-2.65 2.71-3.39 5.79-6.5 9.17-9.24.8-.65 1.86-.64 2.65.01l7.29 6.05c3.28 2.72 7.75 3.39 11.67 1.75s6.58-5.3 6.94-9.54l.8-9.44c.09-1.02.83-1.78 1.85-1.9 4.32-.48 8.7-.5 13.01-.05 1.02.11 1.77.86 1.86 1.88l.88 9.43c.39 4.24 3.08 7.87 7.01 9.48s8.4.9 11.65-1.84l7.23-6.1c.78-.66 1.85-.68 2.65-.04 3.4 2.71 6.5 5.79 9.24 9.17.65.79.64 1.86-.02 2.65l-6.05 7.29c-2.72 3.28-3.39 7.75-1.75 11.67s5.3 6.58 9.54 6.94l9.44.8c1.02.09 1.78.83 1.9 1.85.48 4.32.5 8.7.05 13.01-.11 1.02-.86 1.77-1.88 1.86l-9.43.88c-4.24.39-7.87 3.08-9.48 7.01s-.91 8.4 1.84 11.65l6.1 7.24c.66.78.67 1.85.04 2.65-2.71 3.4-5.79 6.5-9.17 9.24-.8.65-1.86.64-2.65-.01l-7.29-6.05c-3.28-2.72-7.75-3.39-11.67-1.75s-6.58 5.3-6.94 9.54l-.8 9.44c-.09 1.02-.83 1.78-1.85 1.9-4.32.48-8.7.5-13.01.05-1.02-.11-1.77-.86-1.86-1.88l-.88-9.43c-.39-4.24-3.08-7.87-7.01-9.48-1.4-.57-2.86-.85-4.31-.85-2.64 0-5.24.92-7.34 2.69l-7.23 6.1c-.78.66-1.85.68-2.65.04-3.4-2.71-6.5-5.79-9.24-9.17-.65-.8-.64-1.86.01-2.65l6.05-7.29c2.72-3.28 3.39-7.75 1.75-11.67s-5.3-6.58-9.54-6.94l-9.44-.8c-1.02-.09-1.78-.83-1.9-1.85-.48-4.32-.5-8.7-.05-13.01.11-1.02.86-1.77 1.88-1.86l9.43-.88c4.24-.39 7.87-3.08 9.48-7.02 1.62-3.92.92-8.39-1.83-11.64zm336.24 306.92-41.1-41.1c-2.71-2.71-6.33-4.21-10.18-4.21-1.04 0-2.06.12-3.05.33l-26.5-26.5c9.81-14.3 15.56-31.6 15.56-50.22 0-35.88-21.35-66.87-52.01-80.94v-156.48c0-27.92-22.71-50.63-50.63-50.63h-61.83c-3.22-6.9-10.2-11.7-18.3-11.7h-13.36c-2.43-16.52-16.7-29.24-33.88-29.24s-31.45 12.72-33.88 29.24h-13.36c-8.1 0-15.08 4.8-18.3 11.7h-61.82c-27.92 0-50.63 22.71-50.63 50.63v347.8c0 27.92 22.71 50.63 50.63 50.63h254.73c27.92 0 50.63-22.71 50.63-50.63v-29.43c4.64-2.13 9.06-4.64 13.23-7.5l26.51 26.51c-1 4.62.29 9.64 3.87 13.23l41.1 41.1c4.49 4.49 10.39 6.74 16.29 6.74s11.8-2.25 16.29-6.74c4.34-4.34 6.73-10.12 6.73-16.29s-2.4-11.96-6.74-16.3zm-75.27-121.7c0 43.56-35.44 79-79 79s-79-35.44-79-79 35.44-79 79-79 79 35.44 79 79zm-52.02-237.42v152.62c-4.62-1.47-9.41-2.58-14.32-3.28v-149.34c0-14.51-11.8-26.31-26.31-26.31h-59.93v-14.32h59.93c22.41 0 40.63 18.22 40.63 40.63zm-225.43-42.13c0-5.62 4.58-10.2 10.2-10.2h17.99c2.76 0 5-2.24 5-5 0-13.37 10.88-24.24 24.24-24.24 13.37 0 24.24 10.88 24.24 24.24 0 2.76 2.24 5 5 5h17.99c5.62 0 10.2 4.58 10.2 10.2v17.32c0 5.62-4.58 10.2-10.2 10.2h-94.47c-5.62 0-10.2-4.58-10.2-10.2v-17.32zm10.2 37.52h94.47c8.1 0 15.08-4.8 18.3-11.7h61.83c8.99 0 16.31 7.32 16.31 16.31v148.47c-.89-.03-1.77-.04-2.67-.04-49.07 0-89 39.92-89 89s39.92 89 89 89c.89 0 1.78-.02 2.67-.04v21.42c0 8.99-7.32 16.31-16.31 16.31h-254.72c-8.99 0-16.31-7.32-16.31-16.31v-347.8c0-8.99 7.32-16.31 16.31-16.31h61.83c3.21 6.89 10.19 11.69 18.29 11.69zm215.23 352.41c0 22.4-18.23 40.63-40.63 40.63h-254.72c-22.4 0-40.63-18.23-40.63-40.63v-347.8c0-22.4 18.23-40.63 40.63-40.63h59.93v14.32h-59.93c-14.51 0-26.31 11.8-26.31 26.31v347.8c0 14.51 11.8 26.31 26.31 26.31h254.73c14.51 0 26.31-11.8 26.31-26.31v-22.28c4.91-.7 9.7-1.81 14.32-3.28v25.56zm40.3-52.18 23.97 23.97-9.08 9.08-23.97-23.97c3.24-2.8 6.27-5.84 9.08-9.08zm79.92 89.01c-5.08 5.08-13.35 5.08-18.43 0l-41.1-41.1c-1.71-1.71-1.71-4.5 0-6.22l12.22-12.22c.86-.86 1.98-1.29 3.11-1.29s2.25.43 3.11 1.29l41.1 41.1c2.45 2.45 3.8 5.72 3.8 9.22-.01 3.5-1.36 6.77-3.81 9.22zm-215.29-147.21c0 37.54 30.54 68.09 68.09 68.09s68.09-30.54 68.09-68.09c0-37.54-30.54-68.09-68.09-68.09s-68.09 30.55-68.09 68.09zm126.18 0c0 32.03-26.06 58.09-58.09 58.09s-58.09-26.06-58.09-58.09 26.06-58.09 58.09-58.09 58.09 26.06 58.09 58.09zm-83.3-11.61c-2.34-3.08-5.74-5.07-9.57-5.59s-7.64.47-10.72 2.81-5.07 5.74-5.59 9.57c-.53 3.83.47 7.64 2.81 10.72l21.19 27.9c2.51 3.3 6.31 5.38 10.45 5.69.37.03.73.04 1.1.04 3.75 0 7.38-1.46 10.09-4.09l46.5-45.1c2.78-2.7 4.33-6.32 4.39-10.19.05-3.87-1.4-7.53-4.1-10.31s-6.32-4.33-10.19-4.39c-3.85-.03-7.53 1.4-10.3 4.1l-34.75 33.7zm53.01-11.67c.86-.84 2.02-1.31 3.2-1.27 1.2.02 2.32.5 3.16 1.36s1.29 2 1.27 3.2-.5 2.32-1.36 3.16l-46.49 45.09c-.94.91-2.18 1.35-3.47 1.25-1.3-.1-2.45-.73-3.24-1.77l-21.19-27.9c-.72-.95-1.03-2.13-.87-3.31.16-1.19.78-2.24 1.73-2.96s2.13-1.04 3.32-.87c1.19.16 2.24.78 2.96 1.73l14.71 19.36c.87 1.14 2.18 1.85 3.6 1.96s2.83-.4 3.86-1.4zm-280.3-18.54c0-2.76 2.24-5 5-5h141.42c2.76 0 5 2.24 5 5s-2.24 5-5 5h-141.42c-2.77 0-5-2.24-5-5zm88.16 127.85c0 2.76-2.24 5-5 5h-78.16c-2.76 0-5-2.24-5-5s2.24-5 5-5h78.16c2.76 0 5 2.23 5 5zm68.16-31.97c0 2.76-2.24 5-5 5h-146.32c-2.76 0-5-2.24-5-5s2.24-5 5-5h146.32c2.76 0 5 2.24 5 5zm-156.32-31.96c0-2.76 2.24-5 5-5h135.66c2.76 0 5 2.24 5 5s-2.24 5-5 5h-135.66c-2.77 0-5-2.23-5-5zm0-31.96c0-2.76 2.24-5 5-5h133.94c2.76 0 5 2.24 5 5s-2.24 5-5 5h-133.94c-2.77 0-5-2.24-5-5zm371.68 42.39c1.63 3.65 5.13 5.92 9.13 5.92s7.49-2.27 9.13-5.92l19.37-43.29c.29-.64.44-1.34.44-2.04v-246.32c0-15.95-12.98-28.93-28.93-28.93s-28.93 12.98-28.93 28.93v246.32c0 .7.15 1.4.44 2.04zm9.13-4.09-16.22-36.25h32.44zm-18.93-46.24v-207.46h37.87v207.46zm18.93-260.25c10.44 0 18.93 8.49 18.93 18.93v23.86h-37.87v-23.86c.01-10.44 8.5-18.93 18.94-18.93zm-277.42-19.08c0-4.48 3.63-8.11 8.11-8.11s8.11 3.63 8.11 8.11-3.63 8.11-8.11 8.11c-4.49 0-8.11-3.63-8.11-8.11z"
                          fill-rule="evenodd"
                        ></path>
                      </svg>
                      <p className="font-semibold text-gray-500">
                        Even the best systems can face issues. Our fast and
                        reliable repair services quickly diagnose.
                      </p>
                    </div>
                    <div className="absolute top-18 right-8 z-15 ">
                      <span className="text-[70px]  text-gray-200 font-extrabold">
                        02
                      </span>
                    </div>
                  </Card>
                  <Card className="relative group w-full  flex flex-col h-80 p-10 pt-12  gap-4 hover:border-b-2 hover:mt-3 border-primary">
                    <div className="relative z-20 flex flex-col gap-4 ">
                      <p className="text-xl font-semibold">
                        Optimization & Prevention
                      </p>
                      <svg
                        className="w-10 h-10 group-hover:invert-75 group-hover:rotate-y-180"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64 64"
                      >
                        <g
                          data-name="23 Computer repair"
                          id="_23_Computer_repair"
                        >
                          <g>
                            <path d="M25,23a1,1,0,0,0-1,1V46H2V36H21a1,1,0,0,0,0-2H2V24H12a1,1,0,0,0,0-2H2V13a1,1,0,0,1,1-1h8a1,1,0,0,0,0-2H3a3,3,0,0,0-3,3V55a1,1,0,0,0,2,0V48H24V61a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V59a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3H23a3,3,0,0,0,3-3V24A1,1,0,0,0,25,23Z"></path>
                            <path d="M61,21H29a1,1,0,0,0,0,2H61a1,1,0,0,1,1,1V47H29a1,1,0,0,0,0,2H62v3a1,1,0,0,1-1,1H29a1,1,0,0,0,0,2H40.613l-1.561,4.684A1,1,0,0,0,40,61h8a1,1,0,0,0,.948-1.316L47.387,55H61a3,3,0,0,0,3-3V24A3,3,0,0,0,61,21ZM46.612,59H41.388l1.332-4h2.56Z"></path>
                            <circle cx="5" cy="19" r="1"></circle>
                            <circle cx="9" cy="19" r="1"></circle>
                            <path d="M17,55a4,4,0,1,0-4,4A4,4,0,0,0,17,55Zm-6,0a2,2,0,1,1,2,2A2,2,0,0,1,11,55Z"></path>
                            <path d="M10.5,8h5a1,1,0,0,0,0-2H12.183a8.988,8.988,0,0,1,15.265.5,1,1,0,0,0,.865.5H53.5a1,1,0,0,0,0-2H28.872A10.989,10.989,0,0,0,9.584,6.6,1,1,0,0,0,10.5,8Z"></path>
                            <path d="M41.5,17a1,1,0,0,0,0-2H28.313a1,1,0,0,0-.865.5,8.989,8.989,0,0,1-15.266.5h7.48a1,1,0,0,0,.895-.553l2-4a1,1,0,0,0,0-.894l-2-4a1,1,0,1,0-1.789.894L20.544,11l-1.5,3H10.5a1,1,0,0,0-.917,1.4A10.99,10.99,0,0,0,28.872,17Z"></path>
                            <path d="M53.5,15h-8a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"></path>
                            <path d="M42,39a1,1,0,0,0,.707-.293l7-7a1,1,0,0,0-1.414-1.414L42,36.586l-2.293-2.293a1,1,0,0,0-1.414,1.414l3,3A1,1,0,0,0,42,39Z"></path>
                          </g>
                        </g>
                      </svg>
                      <p className="font-semibold text-gray-500">
                        Routine maintenance keeps your systems running smoothly
                        and prevents costly breakdowns.
                      </p>
                    </div>
                    <div className="absolute top-18 right-8 z-15 ">
                      <span className="text-[70px]  text-gray-200 font-extrabold">
                        03
                      </span>
                    </div>
                  </Card>
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
                    Explore Large-Scale Projects
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
                    style={{ transform: `translateX(-${curr * 100}%) ` }}
                  >
                    {carouselHome.map((carousel, index) => {
                      return (
                        <motion.div
                          key={index}
                          className="flex flex-row w-full  gap-10"
                        >
                          <Card className="group w-80 md:w-90 2xl:w-105 relative  ">
                            <img src={carousel.carousel1.image} alt="" />
                            <div className="absolute z-20 top-80 left-10 flex flex-col gap-4 group-hover:-translate-y-20 ease-in ease-initial duration-500">
                              <button className="bg-primary w-30 text-white text-xl rounded-2xl font-semibold">
                                Company
                              </button>
                              <p className="text-4xl font-semibold text-white">
                                {carousel.carousel2.title}
                              </p>
                              <button className="g-5 w-6 rounded-full bg-primary group-hover:ease-initial ">
                                <ArrowRight className="invert-100" />
                              </button>
                            </div>
                          </Card>
                          <Card className="group w-80 md:w-90 2xl:w-105 relative ">
                            <img src={carousel.carousel2.image} alt="" />
                            <div className="absolute z-20 top-80 left-10 flex flex-col gap-4 group-hover:-translate-y-20 ease-in ease-initial">
                              <button className="bg-primary w-30 text-white text-xl rounded-2xl font-semibold">
                                Company
                              </button>
                              <p className="text-4xl font-semibold text-white">
                                {carousel.carousel2.title}
                              </p>
                              <button className="g-5 w-6 rounded-full bg-primary group-hover:ease-initial ">
                                <ArrowRight className="invert-100" />
                              </button>
                            </div>
                          </Card>
                          <Card className="group w-80 md:w-90 2xl:w-105 relative ">
                            <img src={carousel.carousel2.image} alt="" />
                            <div className="absolute z-20 top-80 left-10 flex flex-col gap-4 group-hover:-translate-y-20 ease-in ease-initial">
                              <button className="bg-primary w-30 text-white text-xl rounded-2xl font-semibold">
                                Company
                              </button>
                              <p className="text-4xl font-semibold text-white">
                                {carousel.carousel2.title}
                              </p>
                              <button className="g-5 w-6 rounded-full bg-primary group-hover:ease-initial">
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
                      <p className="text-6xl text-white font-semibold">3,050</p>
                      <p className="text-white font-semibold">
                        Success Projects
                      </p>
                    </div>
                    <div className="w-full lg:w-2/4 text-white font-semibold">
                      There are many variations of passages lorem ipsum
                      available, but the majority have suffered alteration in
                      some form.
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
                                <p className="text-gray-300 flex justify-between">
                                  {" "}
                                  Ceo{" "}
                                  <img
                                    className="w-15"
                                    src="https://industrie.rstheme.com/main/wp-content/uploads/2024/02/testimonial_clogo.png"
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
                    Testimonials
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
                  <Card className="group hidden md:flex w-full md:w-1/2 h-full relative">
                    <div className="w-full h-full absolute z-10 group-hover:scale-105">
                      <img className="h-full object-cover" src={blog4} alt="" />
                    </div>
                    <div className="w-full h-full absolute z-15 bg-[rgba(0,0,0,0.4)] "></div>
                    <div className="w-2/3 flex flex-col gap-8 h-full absolute z-20 top-30 lg:top-50 left-8">
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
                    </div>
                  </Card>
                  <div className="w-full md:w-1/2 h-full flex flex-col gap-4">
                    <Card className="group grid grid-cols-2 h-1/2 w-full bg-gray-50">
                      <div className="flex flex-col justify-between p-5">
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
                      </div>
                      <img
                        className="h-full object-cover group-hover:scale-105"
                        src={blog5}
                        alt=""
                      />
                    </Card>
                    <Card className="group grid grid-cols-2 h-1/2 w-full bg-gray-50">
                      <div className="flex flex-col h-full justify-around  p-5">
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
                      </div>
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
