import { createContext, useContext } from "react";

interface ImxClientContextInterface {

}

export const ImxClientContext = createContext<ImxClientContextInterface>({});
ImxClientContext.displayName = "ImxClientContext";

export const useImxClientContext = () => useContext<ImxClientContextInterface>(ImxClientContext);

export default ImxClientContext;