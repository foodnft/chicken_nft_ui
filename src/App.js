import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home/Home";
import Getnft from "./pages/GetNFT/GetNFT";
import Mycollection from "./pages/MyCollection/Mycollection";
import Yournft from "./pages/YourNFT/Yournft";
import Enterotp from "./pages/EnterNFT/Enterotp";
import PrivateRoute from "./Route/PrivateRoute";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/getnft" element={<Getnft />} />
        <Route path="/mycollection" element={<PrivateRoute />}>
          <Route path="/mycollection" element={<Mycollection />} />
        </Route>
        <Route path="/yournft" element={<PrivateRoute />}>
          <Route path="/yournft" element={<Yournft />} />
        </Route>
        <Route path="/enterotp" element={<Enterotp />} />
      </Routes>
    </>
  );
}

export default App;
