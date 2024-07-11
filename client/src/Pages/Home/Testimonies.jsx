import { FaStar } from "react-icons/fa6";
import profileImg from "../../assets/profile.jpeg";
import "./Home.css";
const Testimonies = () => {
  return (
    <section>
      <h1 className="test-title">Testimonies</h1>
      <div className="test-containers">
        <div className="test-container">
          <div className="stars">
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            iste molestiae perspiciatis praesentium, minima eveniet labore.
          </p>
          <div className="profile">
            <img src={profileImg} alt="" />
          </div>
        </div>

        <div className="test-container">
          <div className="stars">
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            iste molestiae perspiciatis praesentium, minima eveniet labore.
          </p>
          <div className="profile">
            <img src={profileImg} alt="" />
          </div>
        </div>

        <div className="test-container">
          <div className="stars">
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
            <p>
              <FaStar />
            </p>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            iste molestiae perspiciatis praesentium, minima eveniet labore.
          </p>
          <div className="profile">
            <img src={profileImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonies;
