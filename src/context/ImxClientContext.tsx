import { createContext, useContext } from "react";

interface ImxClientContextInterface {
  starkPublicKey?: string,
  walletAddress?: string,
  connectWallet?: () => Promise<void>,
  disConnectWallet?: () => void
}

export const ImxClientContext = createContext<ImxClientContextInterface>({
});

ImxClientContext.displayName = "ImxClientContext";

export const useImxClientContext = () => useContext<ImxClientContextInterface>(ImxClientContext);

export default ImxClientContext;