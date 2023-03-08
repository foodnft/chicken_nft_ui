import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Getnft from "./pages/GetNFT/GetNFT";
import Mycollection from "./pages/Mycollection";
import Yournft from "./pages/Yournft";
import Enterotp from "./pages/Enterotp";
import Wagmi from "./Wagmi/Config";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/getnft" element={<Getnft />} />
        <Route path="/mycollection" element={<Mycollection />} />
        <Route path="/enterotp" element={<Enterotp />} />
        <Route path="/yournft" element={<Yournft />} />
        <Route path="/wagmi" element={<Wagmi />} />
      </Routes>
    </>
  );
}

export default App;
