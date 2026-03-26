import { Routes, Route } from "react-router-dom";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// pages
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import PageNotFound from "../pages/PageNotFound";

// layout padrão
function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <RoutesWrapper />
      </main>
      <Footer />
    </>
  );
}

// separa rotas pra usar dentro do layout
function RoutesWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default Layout;