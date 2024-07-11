import { Link } from "react-router-dom";

const Headertop = () => {
  return (
    <section className="header">
      <div className="logo">
        <p>Golden horizon luxury resort</p>
      </div>
      <div className="cta">
        <div>
          <Link to="/sign up">sign up</Link>
        </div>
        <div>
          <Link to="/log in">log in</Link>
        </div>
        <div>
          <Link to="/">log out</Link>
        </div>
      </div>
    </section>
  );
};
export default Headertop;
