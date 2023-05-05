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
            <h1 style={{ fontFamily: "Rubik", color: "purple" }}>
              <a style={{ textDecoration: "none" }} href="/">
                Home
              </a>
            </h1>
          </div>
          <div id="toolbarHead">
            <h1 className="navHead text-flicker-in-glow">Tree - Tag</h1>
          </div>
          <div id="toolbarLogo">
            <a href="https://nsscrce.org">
              <img src={require("./nss-logo.png")} alt="" width={70} />
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
