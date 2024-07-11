import "./Home.css";
import aboutImg from "../../assets/about-img.jpeg";
const About = () => {
  return (
    <section>
      <h1 className="about-title">about us</h1>
      <div className="about">
        <div className="about-text">
          <p>
            These cases are perfectly simple and easy to distinguish. In a free
            hour, when our power of choice is untrammeled and when nothing
            prevents our being able to do what we like best, every pleasure is
            to be welcomed and every pain avoided. But in certain circumstances
            and owing to the claims of duty or the obligations of business it
            will frequently occur that pleasures have to be repudiated and
            annoyances accepted. The wise man therefore always holds in these
            matters to this principle of selection: he rejects pleasures to
            secure other greater pleasures, or else he endures pains to avoid
            worse pains.
          </p>
        </div>
        <div className="image">
          <img src={aboutImg} alt="" />
        </div>
      </div>
    </section>
  );
};
export default About;
