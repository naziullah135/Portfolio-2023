import Image from "next/image";
import React from "react";
import imgPro1 from "../../assets/images/projects/scrnli_7_15_2023_10-33-33 PM.png";
import imgPro2 from "../../assets/images/projects/scrnli_7_15_2023_10-34-36 PM.png";
import imgPro3 from "../../assets/images/projects/scrnli_7_15_2023_10-35-22 PM.png";
import imgPro4 from "../../assets/images/projects/scrnli_7_15_2023_10-38-54 PM.png";

const Projects = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex gap-4">
          <div className="md:w-1/2 relative">
            <div className="w-full absolute ">
              <Image src={imgPro1} alt="project-image" />
            </div>
            <div className="relative flex justify-end">
              <button className="bg-white rounded-full p-2">click</button>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src={imgPro2} alt="imgProject" />
          </div>
        </div>
        <div className="flex gap-4 py-10">
          <div className="md:w-1/2">
            <Image src={imgPro3} alt="imgProject" />
          </div>
          <div className="md:w-1/2">
            <Image src={imgPro4} alt="imgProject" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
