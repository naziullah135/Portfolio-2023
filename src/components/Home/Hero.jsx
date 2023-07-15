import Image from "next/image";
import imgProfile from "../../assets/images/dev-naziullah-wave.png";

const Hero = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex">
          <div className="sm:w-full md:w-1/2 items-center">
            <h1 className="text-4xl font-extrabold pb-6 pt-8">
              I'm Naziullah Shawn
            </h1>
            <h3 className="text-xl font-bold">Frontend Developer</h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Lorem in sed eget
              pellentesque massa diam scelerisque mi a. Dui arcu tellus quam
              proin.
            </p>
            <div className="py-8">
              <button className="bg-[black] text-white font-bold text-xl px-8 py-3 rounded-xl">
                Book a Meeting?
              </button>
            </div>
          </div>

          <div className="sm:w-full md:w-1/2 flex justify-end">
            <div>
              <Image
                src={imgProfile}
                width={400}
                height={400}
                alt="hero-picture"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
