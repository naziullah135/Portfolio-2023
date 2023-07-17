import Image from "next/image";
import React from "react";
import iconFacebook from "../../assets/icons/facebook-fill.svg";
const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="container mx-auto py-16">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div className="col-span-1">
            <div>
              <h1 className="text-white text-2xl font-bold">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
            </div>
            <div>
              <Image src={iconFacebook} alt="Facebook" />
            </div>
          </div>
          <div className="col-span-1">
            <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl text-xl font-bold text-white px-6 py-3 ">
              Book a Meeting?
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
