import {
  createClient,
  configureChains,
  mainnet,
  connect
} from "@wagmi/core";
import { publicProvider } from "@wagmi/core/providers/public";
import { InjectedConnector } from "@wagmi/core/connectors/injected";


export const ConnectorWagmi = async () => {


    const { chains, provider, webSocketProvider } = configureChains(
        [mainnet],
        [publicProvider()]
      );
      const client = createClient({
        autoConnect: true,
        provider,
        webSocketProvider,
      });
      
      return await connect({
        connector: new InjectedConnector(),
      })
}