import React, { useEffect } from "react";
import {
  createClient,
  configureChains,
  mainnet,
  connect,
  fetchEnsName,
} from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";
import { InjectedConnector } from "@wagmi/core/connectors/injected";
// import Header from "../Component/Header";
// import Footer from "../Component/Footer";
// interface {

// }
const Wagmi = () => {

  const [ensName, setEnsName] = React.useState<any>(null);
    useEffect(() => {
    GetENSName();
  } , []);
  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  });
  let ensName2: any = "";
  const GetENSName = async () => {
    console.log(111);
    try {
      const address = await connect({
        connector: new InjectedConnector(),
      });

      ensName2 = await fetchEnsName({ address: address.account });
      console.log(ensName2);
      setEnsName(ensName2);
    } catch (error) {
      console.log(123);
      console.log(error);
    }
    // return (
    //   <div>
    //     <>{ensName}</>
    //     <p>444</p>
    //   </div>
    // )
  };
  return (
    <div>
      
      <p>123</p>
      <button onClick={GetENSName}>GetENSName</button>
      {ensName}
      {/* <p>{ensName}</p> */}
    </div>
  );
};
export default Wagmi;
