import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Getnft from "./pages/GetNFT/GetNFT";
import Mycollection from "./pages/Mycollection";
import Yournft from "./pages/Yournft";
import Enterotp from "./pages/Enterotp";
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
