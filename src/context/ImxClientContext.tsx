import { createContext, useContext } from "react";
import { ImmutableXClient } from "@imtbl/imx-sdk";

interface ImxClientContextInterface {
  starkPublicKey?: string,
  walletAddress?: string,
  connectWallet?: () => Promise<void>,
  disConnectWallet?: () => void,
  imxClient?: ImmutableXClient
}

export const ImxClientContext = createContext<ImxClientContextInterface>({
});

ImxClientContext.displayName = "ImxClientContext";

export const useImxClientContext = () => useContext<ImxClientContextInterface>(ImxClientContext);

export default ImxClientContext;