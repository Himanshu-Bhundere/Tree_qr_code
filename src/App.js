import Qrcode from "./components/Qrcode";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <div className="toolbar">
          <h1>Hello Edit</h1>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/qrcode" element={<Qrcode />} />
        </Routes>
        <Routes>
          <Route path="/plant/:id" element={<Plant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
