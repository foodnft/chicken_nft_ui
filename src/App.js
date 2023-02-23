import { Route, Routes, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Getnft from "./pages/GetNFT/GetNFT";
import Mycollection from "./pages/Mycollection";
import Yournft from "./pages/Yournft";
import HeaderComponent from "./Components/Header";
import FooterComponent from "./Components/Footer";

import "./App.css";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/getnft" element={<Getnft />} />
        <Route path="/mycollection" element={<Mycollection />} />
        <Route path="/yournft" element={<Yournft />} />
      </Routes>
      {pathname === "/" && <FooterComponent />}
    </>
  );
}

export default App;
