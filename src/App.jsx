import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Explore from "./pages/Explore";
import Author from "./pages/Author";
import ItemDetails from "./pages/ItemDetails";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "aos/dist/aos.css";


function App() {
   useEffect(() => {
    const AOS = require("aos");
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, [])
;

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/author/:authorId" element={<Author />} />
        <Route path="/item-details/:nftId" element={<ItemDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
