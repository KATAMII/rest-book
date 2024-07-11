import "./Home.css";
import whyus1 from "../../assets/whyus1.jpeg";
const Whyus = () => {
  return (
    <section>
      <h1 className="whyus">why to choose us?</h1>
      <p className="whyus-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dolores
        quasi dolorem fugiat ea neque eveniet similique provident ex.
        Asperiores.
      </p>
      <div className="images">
        <div className="image1">
          <img src={whyus1} alt="" />
        </div>
        <div className="image1">
          <img src={whyus1} alt="" />
        </div>
        <div className="image1">
          <img src={whyus1} alt="" />
        </div>
        <div className="image1">
          <img src={whyus1} alt="" />
        </div>
        <div className="image1">
          <img src={whyus1} alt="" />
        </div>
        <div className="image1">
          <img src={whyus1} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Whyus;
