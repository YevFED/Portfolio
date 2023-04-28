import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MyProjects from "./pages/myProjects/myProjects";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/contacts/" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
