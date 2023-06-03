import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import GridBox from "./components/GridBox";
import Footer from "./components/Footer";
import ApplyForm from "./components/ApplyForm";
import Fran from "./components/Fran";
import Login from "./components/Login";
import Faq from "./components/FAQ";
import MobNav from "./components/MobNav";
import Overlay from "./components/Overlay";
import logo from "./images/logoAlpha.png";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");
  const [active, setActive] = useState(false);
  const pageSwitch = (e) => {
    setPage(e.target.innerText);
  };
  const navActive = () => {
    setActive(!active);
  };
  const mobNavAct = (e) => {
    setPage(e.target.innerText);
    setActive(!active);
  };
  return (
    <div className="relative">
      <img
        src={logo}
        className="fixed xs:block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden top-5 left-5 bg-[rgba(255,255,255,0.75)] w-1/2 rounded-md"
      ></img>
      <button
        onClick={navActive}
        className="fixed xs:block sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden top-5 right-5 bg-WPurple h-10 w-10 text-slate-100 rounded-md"
      >
        =
      </button>
      <NavBar func={pageSwitch}></NavBar>
      <MobNav func={mobNavAct} act={active}></MobNav>
      <Overlay func={navActive} act={active}></Overlay>
      {page === "Home" ? (
        <>
          <Hero></Hero>
          <GridBox></GridBox>
        </>
      ) : page === "Franchisees" ? (
        <Fran func={pageSwitch}></Fran>
      ) : page === "Apply Now" ? (
        <ApplyForm></ApplyForm>
      ) : page === "Login" ? (
        <Login></Login>
      ) : page === "FAQ" ? (
        <Faq></Faq>
      ) : (
        ""
      )}
      <Footer></Footer>
      {/* <Hero></Hero>
      <GridBox></GridBox>
      <Fran></Fran>
      <ApplyForm></ApplyForm> */}
    </div>
  );
}

export default App;
