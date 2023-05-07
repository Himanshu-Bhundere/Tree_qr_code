import Qrcode from "./components/Qrcode";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plant from "./components/Plant";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <div className="App">
        <div className="toolbar">
          <div className="toolbarGoto">
            <a href="https://nsscrce.org">
              <img src={require("./nss-logo.png")} alt="" width={70} />
            </a>
            <a
              href="http://frcrce.ac.in/"
              style={{ position: "relative", left: "2rem", bottom: "0.8rem" }}
            >
              <img src={require("./crce_logo.png")} alt="" width={150} />
            </a>
          </div>
          <div id="toolbarHead">
            <h1 className="navHead text-flicker-in-glow">Tree - Tag</h1>
          </div>
          <div id="toolbarLogo">
            <a style={{ textDecoration: "none" }} href="/">
              <span
                class="material-symbols-outlined"
                style={{ top: "1.3rem", left: 0, fontSize : "2.5rem" }}
              >
                home
              </span>
            </a>
          </div>
        </div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <Routes>
            <Route path="/qrcode" element={<Qrcode />} />
          </Routes>
          <Routes>
            <Route path="/plant/:id" element={<Plant />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
