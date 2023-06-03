const Overlay = (props) => {
  return (
    <div
      onClick={props.func}
      className={
        props.act
          ? "h-screen w-screen bg-[#00000080] fixed top-0 left-0"
          : "hidden"
      }
    ></div>
  );
};
export default Overlay;
