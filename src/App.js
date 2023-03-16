import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Getnft from "./pages/GetNFT/GetNFT";
import Mycollection from "./pages/Mycollection";
import Yournft from "./pages/Yournft";
import Enterotp from "./pages/Enterotp";
import Wagmi from "./Wagmi/Config";
import Hooks from "./Wagmi/Hooks";
// import GetAddr from './Wagmi/Config';


import { useAccount } from 'wagmi';

import Account from "./Wagmi/Config";
import "./App.css";

function App() {
  
  const { isConnected } = useAccount()

  return (
    
    <>
     {/* <WagmiConfig client={WagmiClient}> */}
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/getnft" element={<Getnft />} />
        <Route path="/mycollection" element={<Mycollection />} />
        <Route path="/enterotp" element={<Enterotp />} />
        <Route path="/yournft" element={<Yournft />} />
        <Route path="/addr" element={<Account />} />
        
        <Route path="/hooks" element={<Hooks />} />
        
      </Routes>
      {/* </WagmiConfig> */}
    </>
  );
}

export default App;
