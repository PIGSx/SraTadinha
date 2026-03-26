import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery";
import You from "./pages/You/You";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/you" element={<You/>} /> 
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;