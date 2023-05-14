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
      <p className="w-1/2 mr-20 mb-20 italic text-slate-800 rounded-md bg-[rgba(255,255,255,0.50)] text-3xl p-5">
        We promise to give every Indian, their rightful access to a wide range
        products and services, that are fairly priced and of high quality.
      </p>
    </div>
  );
};
export default Hero;
