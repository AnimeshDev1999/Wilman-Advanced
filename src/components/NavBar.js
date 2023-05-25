import logo from "../images/logoAlpha.png";

const NavBar = (props) => {
  return (
    <div className="fixed mt-5 top-0 left-0 w-full flex justify-between items-center px-10 py-5">
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
