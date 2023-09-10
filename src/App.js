import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route, HashRouter } from "react-router-dom";
import Testi from "./components/Testi/Testi";
// import Navbar from "./components/navbar/Navbar";
function App() {
  return (
    <>
      <div className="par">
        <HashRouter>
          <Routes>
            <Route path="/Testi" element={<Testi />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
