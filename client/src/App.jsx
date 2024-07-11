import Header from "./components/Header/Header.jsx";
import Home from "./Pages/Home/Home.jsx";
import Services from "./Pages/Services/Services.jsx";
import Rooms from "./Pages/Rooms/Rooms.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Book from "./Pages/bookform/Book.jsx";
import SignUp from "./Pages/Authentification/SignUp.jsx";
import LogIn from "./Pages/Authentification/LogIn.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/contact us" element={<Contact />} />
          <Route path="/sign up" element={<SignUp />} />
          <Route path="/log in" element={<LogIn />} />
          <Route path="/book now" element={<Book />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
