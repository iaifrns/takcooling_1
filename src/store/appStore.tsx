import type { BackgroundHome , Tabs, CarouselHome, Parteneer } from "@/type/service"
import fond from "@/assets/image/fond.jpg";
import fond2 from "@/assets/image/fond_hom.jpg";
import blog2 from '@/assets/image/ing2.jpeg'
import blog3 from '@/assets/image/ing3.jpeg'
import blog4 from '@/assets/image/ing4.jpeg'
import blog5 from '@/assets/image/ing5.jpeg'
import blog6 from '@/assets/image/ing6.png'
import villeImg from "@/assets/image/villeHome.jpg";
import { Divide } from "lucide-react";
import { AnimatePresence ,motion } from "framer-motion";


interface appState {

    backgroundHome: BackgroundHome[];
    tabs: Tabs[];
    carouselHome: CarouselHome[]
    parteneer: Parteneer[];

}

export const backgroundHome: BackgroundHome[]  = [
    {
      id: 0,
      title: "Your Trusted Cooling Experts in London",
      content:
        "Based in the heart of London, Takcooling provides fast, reliable, and engineered cooling solutions for homes, offices, and businesses across the city.",
      image() {
        return (
            <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="w-full absolute z-1 left-0 top-0 "
            >
              <motion.img
                src={fond}
                className="relative object-cover z-2 h-[800px] w-full "
                alt=""
                />
            </motion.div>
          </AnimatePresence>
        )
      }
    },
    {
      id: 1,
      title: "Experience the Comfort of Perfect Cooling",
      content:
        "We install high-efficiency air conditioners that keep your spaces cool, quiet, and energy-efficient — designed for your comfort all year round.",
      image() {
        return (
            <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="w-full absolute z-1 left-0 top-0 "
            >
              <motion.img
                src={villeImg}
                className="relative object-cover z-2 h-[800px] w-full "
                alt=""
                />
            </motion.div>
          </AnimatePresence>
        )
      }
    },
    {
      id: 2,
      title: "Engineered Installations, Built to Last",
      content:
        "Our certified engineers deliver precise and durable installations — because at Takcooling, every detail matters for performance and reliability.",
      image() {
        return (
            <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="w-full absolute z-1 left-0 top-0 "
            >
              <motion.img
                src={fond2}
                className="relative object-cover z-2 h-[800px] w-full "
                alt=""
                />
            </motion.div>
          </AnimatePresence>
        )
      }
    },
  ];

export const tabs = [
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

export const carouselHome = [
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

export const parteneer = [
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
