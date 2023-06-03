import logo from "../images/logoAlpha.png";

const NavBar = (props) => {
  return (
    <div className="fixed mt-5 top-0 left-0 w-full xs:hidden sm:flex md:flex lg:flex xl:flex 2xl:flex justify-between items-center sm:px-5 md:px-10 lg:px-10 xl:px-10 2xl:px-10 sm:py-0 md:py-5 lg:py-5 xl:py-5 2xl:py-5 ">
      <img
        src={logo}
        className="h-14 bg-[rgba(255,255,255,0.75)] rounded-md"
        alt=""
      />
      <div className="bg-[rgba(255,255,255,0.75)] rounded-md flex gap-5 justify-center items-center px-5 py-3">
        <button onClick={props.func} className="nav-btn">
          Home
        </button>
        <button onClick={props.func} className="nav-btn">
          Franchisees
        </button>
        <button onClick={props.func} className="nav-btn">
          FAQ
        </button>
        <button
          onClick={props.func}
          className="bg-WPurple hover:bg-WGold duration-500 text-white px-3 py-1 rounded-md"
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default NavBar;
