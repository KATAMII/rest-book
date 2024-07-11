import spaImg from "../../assets/spa.jpeg";
import "./Services.css";
const Services = () => {
  const services = [
    {
      id: 1,
      title: "spa",
      price: 200,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: spaImg,
    },
    {
      id: 2,
      title: "spa",
      price: 200,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: spaImg,
    },
    {
      id: 3,
      title: "spa",
      price: 200,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: spaImg,
    },
    {
      id: 4,
      title: "spa",
      price: 200,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: spaImg,
    },
    {
      id: 5,
      title: "spa",
      price: 200,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: spaImg,
    },
    {
      id: 6,
      title: "spa",
      price: 200,
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: spaImg,
    },
  ];
  return (
    <section>
      <div className="banner">
        <h1>our services</h1>
      </div>
      <div className="containers">
        {services.map((service) => (
          <div className="container" key={service.id}>
            <div className="services-image">
              <img src={service.image} alt="" />
            </div>
            <div className="content">
              <h3>{service.title}</h3>
              <h4>prices: ${service.price}</h4>
            </div>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
