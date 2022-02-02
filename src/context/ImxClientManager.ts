import { useReducer, useCallback } from "react";
import { ImmutableXClient, Link } from "@imtbl/imx-sdk";

const linkAddress = "https://link.ropsten.x.immutable.com";
const apiAddress = "https://api.ropsten.x.immutable.com/v1";

export const getImxLink = (): Link => {
  return new Link(linkAddress);
};

// IMX Client
export const getImxClient = async () => {
  return await ImmutableXClient.build({ publicApiUrl: apiAddress });
};

export const setupAccount = async () => {
  const link = getImxLink();
  const { address, starkPublicKey } = await link.setup({});
  // localStorage.setItem("WALLET_ADDRESS", address);
  // localStorage.setItem("STARK_PUBLIC_KEY", starkPublicKey);
  return { address, starkPublicKey };
};

// export const removeAccount = () => {
//   localStorage.removeItem("WALLET_ADDRESS");
//   localStorage.removeItem("STARK_PUBLIC_KEY");
// };

enum ActionType {
  CONNECT_WALLET,
  DISCONNECT_WALLET,
}

interface ImxClientManagerState {
  starkPublicKey?: string;
  walletAddress?: string;
}

interface Action {
  type: ActionType;
  payload?: any;
}

function reducer(state: ImxClientManagerState, { type, payload }: Action) {
  switch (type) {
    case ActionType.CONNECT_WALLET:
      return { ...state, ...payload };
    case ActionType.DISCONNECT_WALLET:
      return {};
    default:
      return state;
  }
}
export function useImxClientManager() {
  const [state, dispatch] = useReducer(reducer, {});

  const { starkPublicKey, walletAddress } = state;
  const connectWallet = useCallback(async () => {
    const { address, starkPublicKey } = await setupAccount();
    dispatch({
      type: ActionType.CONNECT_WALLET,
      payload: { walletAddress: address, starkPublicKey: starkPublicKey },
    });
  }, []);

  const disConnectWallet = useCallback(() => {
    dispatch({ type: ActionType.DISCONNECT_WALLET });
  }, []);

  return { starkPublicKey, walletAddress, connectWallet, disConnectWallet };
}
