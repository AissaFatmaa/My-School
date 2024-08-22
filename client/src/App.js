import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Profil from "./components/Profil";
import Register from "./components/Register";
import { getuser, userCurrent } from "./JS/userSlice/userSlice";

import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Clubs from "./components/Clubs";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Dashbord from "./components/Dashbord";
import Footer from "./components/Footer";
import Navbarr from "./components/Navbarr";
import { getclub } from "./JS/clubSlice";
import { getevent } from "./JS/eventSlice";
import Dashbord_teacher from "./components/Dashbord_teacher";
import Dashbord_inspector from "./components/Dashbord_inspector";
import Espace_eleve from "./components/Espace_eleve";

function App() {
  const isAuth = localStorage.getItem("token");
  const [ping, setping] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userCurrent());
    dispatch(getuser());
    dispatch(getclub());
    dispatch(getevent());
  }, [ping]);
  return (
    <div className="container-xxl bg-white p-0">
      <Navbarr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/register" element={<Register ping={ping} setping={setping} />} />
        <Route
          path="/dashbord"
          element={<Dashbord ping={ping} setping={setping} />}
        />
        <Route
          path="/dashTeacher"
          element={<Dashbord_teacher ping={ping} setping={setping} />}
        />
           <Route
          path="/dashInspector"
          element={<Dashbord_inspector ping={ping} setping={setping} />}
        />
  <Route
          path="/espace_eleve"
          element={<Espace_eleve ping={ping} setping={setping} />}
        />
        <Route
          path="/profil"
          element={<Profil ping={ping} setping={setping} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
