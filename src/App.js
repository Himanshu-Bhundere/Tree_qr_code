import Qrcode from "./components/Qrcode";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Plant from "./components/Plant";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
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
