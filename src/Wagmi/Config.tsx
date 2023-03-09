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
import { ConnectorWagmi } from "../Util/Connector";

const Wagmi = () => {
  const [ensName, setEnsName] = React.useState<any>("");
  const [address, setAddress] = React.useState<any>(null);
  const [showENSName, setShowENSName] = React.useState<any>(false);

  const test = () => {
    return (
      <>
      <p>This is get ENS NAme</p>
      </>
    )
  }
  
    useEffect(() => {
      
      if(!address){
        console.log("address111", address)
        GetENSName();
      }
  } , [address]);
  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [publicProvider()]
  );
  const client = createClient({
    autoConnect: true,
    provider,
    webSocketProvider,
  });
  const handleClick = () => {
    
    GetENSName();
  };
  const GetENSName = async () => {
    
    try {
  
        ConnectorWagmi().then((res:any) => { 
          console.log("res", res)
          setAddress(res)
        })
  
      // setAddress(
      //   await connect({
      //     connector: new InjectedConnector(),
      //   })
      // );
      
      // console.log("address", address.account)
      setEnsName(await fetchEnsName({ address: address.account }))
      setShowENSName(true);
      // console.log("ensName", ensName)
    } catch (error) {
      console.log(error);
    }
    return (
      <>
      
      </>
    )
  };
  return (
    <div>
      <h3>Get ENS name for the address {address?.account} </h3>
      <br></br>
      <button
        onClick={() => handleClick()}
        className="bg-[#780116] text-white py-4 w-[92%] rounded-md ml-[4%] mx-auto text-[1.4rem] font-bold drop-shadow-xl"
      >
        Show ENS Name
      </button>
      {showENSName ? (
        <>
          <b>{ensName}</b>
        </>
      ) : (
        <></>
      )}
      <>{test()}</>
    </div>
  );
};
export default Wagmi;
