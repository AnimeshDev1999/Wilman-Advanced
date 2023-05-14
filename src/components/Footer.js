import logo from "../images/logoAlpha.png";
import facebook from "../images/logo-facebook.svg";
import linkedin from "../images/logo-linkedin.svg";
import twitter from "../images/logo-twitter.svg";
import pinterest from "../images/logo-pinterest.svg";

const Footer = () => {
  return (
    <div className="footer-container-base">
      <div className="footer-container">
        <img
          src={logo}
          className="h-8 bg-[rgba(255,255,255,0.75)] rounded-md"
          alt="company logo"
        />
      </div>
      <div className="footer-container">
        <p className="text-slate-100">
          <span className="font-semibold text-slate-100">Phone:</span> +91
          9621151871
        </p>
        <p className="text-slate-100">
          <span className="font-semibold text-slate-100">Email:</span>{" "}
          info@bimaper.com
        </p>
        <p className="text-slate-100">
          <span className="font-semibold text-slate-100">Address:</span> Ground
          Floor, Super Shopping Center, Near Kukrail Bridge, Faizabad Road,
          Lucknow, Uttar Pradesh, India - 226016
        </p>
      </div>
      <div className="flex gap-4 flex-col justify-center items-center">
        <div className="flex gap-4 justify-center items-end">
          <img src={facebook} className="footer-ico" alt="facebook icon" />
          <img src={twitter} className="footer-ico" alt="twitter icon" />
          <img src={linkedin} className="footer-ico" alt="linkedin icon" />
          <img src={pinterest} className="footer-ico" alt="pinterest icon" />
        </div>
        <p className="text-slate-100">Terms & Conditions | Privacy Policy</p>
      </div>
      <p className="text-slate-100">
        &#169;Bimaper Technologies & Solutions Private Limited - All Rights
        Reserved.
      </p>
    </div>
  );
};
export default Footer;
