import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MyProjects from "./pages/myProjects/myProjects";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<About />} />
        <Route path="/my-projects" element={<MyProjects />} />
      </Routes>
    </>
  );
}

export default App;
