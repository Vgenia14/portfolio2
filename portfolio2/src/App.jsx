import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/about/About";
import Contacts from "./pages/Contacts";
import { LanguageContextProvider } from "./context/LangContext";
import Project from "./pages/projects/Project";

function App() {
  return (
    <div className="App container">
      <LanguageContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Project />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contacts" element={<Contacts />} />
            <Route path="/Projects/:id" element={<Project />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </LanguageContextProvider>
    </div>
  );
}

export default App;
