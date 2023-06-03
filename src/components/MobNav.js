import logo from "../images/logoAlpha.png";

const MobNav = (props) => {
  return (
    <div
      className={
        props.act
          ? "fixed top-0 right-0 duration-500 ease-in-out h-[100svh] w-1/2 flex flex-col gap-10 justify-center items-center bg-white z-10"
          : "fixed top-0 right-[-100%] duration-500 ease-in-out h-[100svh] w-1/2 flex flex-col gap-10 justify-center items-center bg-white z-10"
      }
    >
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
  );
};
export default MobNav;
