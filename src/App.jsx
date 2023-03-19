import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import Gallery from "./views/Gallery";
import Aftercare from "./views/Aftercare";
import Contact from "./views/Contact";
import Tricopigmentation from "./views/Tricopigmentation";

function App() {
  return (
    <div>
      <Header />
      <Routes basename="dreamerTattooSirmione">
        <Route path="/" element={<HomePage />} />
        <Route path="/tricopigmentation" element={<Tricopigmentation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/aftercare" element={<Aftercare />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
