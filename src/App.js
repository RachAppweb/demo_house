import "./App.css";
import Home from "./components/Home/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Testi from "./components/Testi/Testi";
// import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <div className="par">
        <BrowserRouter>
          <Routes>
            <Route path="/Testi" element={<Testi />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
