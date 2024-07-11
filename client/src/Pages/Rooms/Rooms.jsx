import roomImg from "../../assets/whyus1.jpeg";
import "./Rooms.css";
const rooms = [
  {
    id: 1,
    image: roomImg,
    title: "master suite",
    description:
      " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "book now",
  },
  {
    id: 2,
    image: roomImg,
    title: "master suite",
    description:
      " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "book now",
  },
  {
    id: 3,
    image: roomImg,
    title: "master suite",
    description:
      " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "book now",
  },
  {
    id: 4,
    image: roomImg,
    title: "master suite",
    description:
      " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "book now",
  },
  {
    id: 5,
    image: roomImg,
    title: "master suite",
    description:
      " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "book now",
  },
  {
    id: 6,
    image: roomImg,
    title: "master suite",
    description:
      " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    link: "book now",
  },
];
const Rooms = () => {
  return (
    <section>
      <div className="banner">
        <h1>accomodations</h1>
      </div>
      <div className="room-containers">
        {rooms.map((room) => (
          <div className="room-container" key={room.id}>
            <div className="room-image">
              <img src={room.image} alt="" />
            </div>
            <div className="room-content">
              <h3>{room.title}</h3>
              <p>{room.description}</p>
              <a href="/sign up" target="blank">
                {room.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Rooms;
