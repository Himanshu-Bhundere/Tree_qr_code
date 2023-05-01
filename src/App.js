import Qrcode from "./components/Qrcode";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

let data = require("./tree-data.json");

function App() {
  return (
    <>
      <div className="App">
        <div className="toolbar">
          <h1>Hello</h1>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/qrcode" element={<Qrcode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
