import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="routes-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} /> 
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
