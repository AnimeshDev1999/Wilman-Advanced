import About from "./About";
import Stats from "./Stats";
import Features from "./Features";
import Purpose from "./Purpose";

const GridBox = () => {
  return (
    <div className="grid m-5 gap-5 grid-cols-2">
      <About></About>
      <Stats></Stats>
      <Features></Features>
      <Purpose></Purpose>
    </div>
  );
};
export default GridBox;
