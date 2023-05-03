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
          <div id="toolbar">Tree - Tag</div> 
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
