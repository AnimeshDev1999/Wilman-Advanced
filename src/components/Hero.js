import one from "../images/1.jpg";
import two from "../images/2.jpg";
import three from "../images/3.jpg";

const Hero = () => {
  const imgs = [one, two, three];

  return (
    <div
      style={{ backgroundImage: `url(${imgs[2]})` }}
      className="w-[full] h-screen bg-cover bg-center duration-500 flex justify-end items-end"
    >
      <p className="xs:w-2/3 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 2xl:w-1/2 xs:mr-5 sm:mr-10 md:mr-20 lg:mr-20 xl:mr-20 2xl:mr-20 xs:mb-5 sm:mb-10 md:mb-20 lg:mb-20 xl:mb-20 2xl:mb-20 italic text-slate-800 rounded-md bg-[rgba(255,255,255,0.50)] xs:text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl p-5">
        We promise to give every Indian, their rightful access to a wide range
        products and services, that are fairly priced and of high quality.
      </p>
    </div>
  );
};
export default Hero;
