import Image from "next/image";
import React from "react";
import imgArrow from '../../assets/icons/arrow-button.png';
// import imgPro1 from '/images/coffeShop.png'

import imgPro2 from "../../assets/images/projects/scrnli_7_15_2023_10-34-36 PM.png";
import imgPro3 from "../../assets/images/projects/scrnli_7_15_2023_10-35-22 PM.png";
import imgPro4 from "../../assets/images/projects/scrnli_7_15_2023_10-38-54 PM.png";

const Projects = () => {
  const url = '/images/coffeShop.png';

  const bgStyle = {
     backgroundImage: `url(${url})` 
  }
  return (
    <section className="py-12 bg-[#F5F5F5]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 h-screen w-full">
            <div  className="w-full h-full object-contain">
            {/* <button className="p-6"><Image width={40} height={40} src={imgArrow} /></button> */}
              <Image className="rounded-2xl" width={600} height={900}  src={url} alt="project-image" />
            </div>

          </div>
          {/* <div className="col-span-1">
            <Image className="rounded-2xl" src={imgPro1} alt="imgProject" />
          </div>
          <div className="col-span-1">
            <Image className="rounded-2xl" src={imgPro1} alt="imgProject" />
          </div>
          <div className="col-span-1">
            <Image className="rounded-2xl" src={imgPro1} alt="imgProject" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
