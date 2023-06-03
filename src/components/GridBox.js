import About from "./About";
import Stats from "./Stats";
import Features from "./Features";
import Purpose from "./Purpose";

const GridBox = () => {
  return (
    <div className="grid m-5 gap-5 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
      <About></About>
      <Stats></Stats>
      <Features></Features>
      <Purpose></Purpose>
    </div>
  );
};
export default GridBox;
