import paysage from "@/assets/image/paysage2.jpg";
import PageTransition from "@/components/common/PagesTransition";
import { email, phone } from "@/constant/generalInfo";
import { socialLinks } from "@/constant/icon";
import { redirectToFacebook } from "@/services/redirectToFacebook";
import { redirectToTikTok } from "@/services/redirectToTiktok";
import { redirectToWhatsapp } from "@/services/redirectToWhatsapp";
import emailjs from "emailjs-com";
import {
  ArrowRight,
  Clock9,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { useState } from "react";

const contact = () => {
  // const center = {lat:,lng:}
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      emailjs
        .send(
          "service_takcooling",
          "template_hd6xane",
          formData,
          "0VDxYnDZMBN5m5FC7"
        )
        .then((_) => {
          alert("Message sent!");
        });
    } catch (e) {
      alert("Error sending message");
    }
  };

  const handelIconClick = (icon: string) => {
    switch (true) {
      case icon == socialLinks[0].label:
        redirectToWhatsapp();
        break;
      case icon == socialLinks[1].label:
        redirectToTikTok();
        break;
      case icon == socialLinks[2].label:
        redirectToFacebook();
        break;
    }
  };

  return (
    <PageTransition>
      <div className="w-screen mt-20 flex flex-col items-center bg-white ">
        <div className="relative flex justify-center items-end w-full h-150">
          <img
            className="absolute w-full h-150 object-cover"
            src={paysage}
            alt=""
          />
          <div className="relative flex justify-end w-2/3 h-2/3">
            <div className="absolute flex flex-col py-10 px-8 top-0 left-0 w-full md:w-100 h-120 gap-8 rounded-xs bg-black">
              <p className="text-white font-bold text-4xl">Takcooling</p>
              <div className="">
                <p className="text-white text-2xl font-semibold">Available</p>
                <p className="font-semibold text-gray-500">
                  Mon - Sat from 9am
                </p>
              </div>
              <div className="flex justify-start items-center w-full gap-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    className=" hover:text-white text-gray-500"
                    aria-label={social.label}
                    onClick={() => handelIconClick(social.label)}
                  >
                    <social.icon className="invert-25" size={32} />
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-gray-500 flex gap-2">
                  <Phone className="w-5 h-5" /> {phone}
                </p>
                <p className="font-semibold text-gray-500 flex gap-2">
                  <MapPin className="w-5 h-5" />
                  {email}
                </p>
                <p className="font-semibold text-gray-500 flex gap-2">
                  <Clock9 className="w-5 h-5" />
                  London
                </p>
              </div>
            </div>
            <div className="flex mt-12 mr-4 md:flex-col gap-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-[rgba(0,0,0,0.8)] w-10 h-10 flex justify-center items-center rounded-xs hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="invert-25 w-8 h-8" size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="h-250 pt-20 md:h-300 w-full flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className=" flex justify-around flex-col w-4/5 md:w-1/2 -top-50 right-[15%] md:right-[25%] md:h-200 border-t-primary border-4 border-l-white border-r-white border-b-white bg-gray-50 rounded-xl p-15 gap-8"
          >
            <p className="text-2xl w-2/3 text-center md:text-5xl font-semibold text-black">
              Get in Touch
            </p>
            <p className=" font-semibold text-gray-300">
              The point of using Lorem Ipsum is that it has more-or-less
              packages normal make a type specimen book it has survived
            </p>
            <div className=" flex flex-col md:flex-row gap-4 justify-between">
              <input
                placeholder="Full Name"
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="px-4 w-full md:w-1/3 h-12 bg-white border-2 border-gray-300"
                type="text"
              />
              <input
                placeholder="Email Address"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="px-4 w-full md:w-1/3 h-12 bg-white border-2 border-gray-300"
                type="text"
              />
              <input
                placeholder="phone"
                className="px-4 w-full md:w-1/3 h-12 bg-white border-2 border-gray-300"
                type="text"
              />
            </div>
            <textarea
              placeholder="write here..."
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="px-4 w-full h-30 bg-white border-2 border-gray-300"
              name=""
              id=""
            ></textarea>
            <button
              type="submit"
              className="W-1/4 h-12 bg-primary flex gap-2 font-semibold justify-center items-center text-white"
            >
              Send Message <ArrowRight className="invert-0" />
            </button>
          </form>
        </div>
        {/* <div className="relative w-full h-100 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3971.0803258203696!2d10.3452030757382!3d5.5551109944253065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2scm!4v1762448386451!5m2!1sfr!2scm"
            className="w-full h-full"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <GoogleMap center={} >

          </GoogleMap> 
        </div> */}
      </div>
    </PageTransition>
  );
};

export default contact;
