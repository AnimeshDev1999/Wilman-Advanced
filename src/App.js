import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import GridBox from "./components/GridBox";
import Footer from "./components/Footer";
import ApplyForm from "./components/ApplyForm";
import Fran from "./components/Fran";
import Login from "./components/Login";
import Faq from "./components/FAQ";
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");
  const pageSwitch = (e) => {
    setPage(e.target.innerText);
  };
  return (
    <div className="relative">
      <NavBar func={pageSwitch}></NavBar>
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
