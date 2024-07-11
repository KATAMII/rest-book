import "./Footer.css";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
const Footer = () => {
  return (
    <section>
      <div className="footer">
        <div className="icons">
          <a href="">
            <FaTwitter />
          </a>
          <a href="">
            <AiFillInstagram />
          </a>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <AiFillTikTok />
          </a>
        </div>
        <div className="footer-text">
          <p>All rights reserved &copy; diana mutinda 2024</p>
        </div>
      </div>
    </section>
  );
};
export default Footer;
