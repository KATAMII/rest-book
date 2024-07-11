import "./Header.css";
import { Link } from "react-router-dom";

const Headerbottom = () => {
  return (
    <section>
      <div className="nav">
        <ol className="list-items">
          <li className="item">
            <Link to="/">home</Link>
          </li>
          <li className="item">
            <Link to="/services">services</Link>
          </li>
          <li className="item">
            <Link to="/rooms">rooms</Link>
          </li>
          <li className="item">
            <Link to="/contact us">contact us</Link>
          </li>
        </ol>
      </div>
    </section>
  );
};
export default Headerbottom;
