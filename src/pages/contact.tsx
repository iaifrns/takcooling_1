import paysage from "@/assets/image/paysage2.jpg";
import { CustomizedInput } from "@/components/common/Input";
import PageTransition from "@/components/common/PagesTransition";
import { email, phone } from "@/constant/generalInfo";
import { socialLinks } from "@/constant/icon";
import { redirectToFacebook } from "@/services/redirectToFacebook";
import { redirectToTikTok } from "@/services/redirectToTiktok";
import { redirectToWhatsapp } from "@/services/redirectToWhatsapp";
import emailjs from "emailjs-com";
import { ArrowRight, Clock9, MapPin, Phone } from "lucide-react";
import React, { useState } from "react";

const contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      emailjs
        .send(
          "service_oy1yizj",
          "template_7s3pj8j",
          formData,
          "bU9_tX8uKkt4uhJUU"
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
      <div className="w-screen mt-20 flex flex-col items-center bg-white">
        <div className="relative flex justify-center items-end w-full md:h-150">
          <img
            className="absolute w-full md:h-150 h-full object-cover"
            src={paysage}
            alt=""
          />
          <div className="relative flex justify-center items-center w-[80%] max-[650px]:flex-col max-[850px]:w-full h-full border">
            <div className=" flex flex-col py-10 px-8 w-full md:w-100 md:h-120 gap-8 bg-black/80">
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
            <div className=" w-[75%] max-[850px]:w-full flex flex-col justify-center items-center">
              <form
                onSubmit={handleSubmit}
                className=" flex justify-around flex-col w-full border-t-primary bg-gray-50/80 p-12 gap-6"
              >
                <p className="text-xl md:text-3xl w-full text-start font-semibold text-black">
                  Contact Form
                </p>
                <div className=" flex flex-col  gap-4 justify-between">
                  <CustomizedInput
                    placeholder="Full Name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e })}
                  />
                  <div className="flex justify-center items-center gap-4">
                    <CustomizedInput
                      placeholder="Email Address"
                      onChange={(e) => setFormData({ ...formData, email: e })}
                      type="text"
                      value={formData.email}
                    />
                    <CustomizedInput
                      onChange={(e) => setFormData({ ...formData, phone: e })}
                      placeholder="phone"
                      type="text"
                      value={formData.phone}
                    />
                  </div>
                </div>
                <textarea
                  placeholder="write here..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="px-4 w-full h-20 bg-white border-2 border-gray-300"
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
          </div>
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
