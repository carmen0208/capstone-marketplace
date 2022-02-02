import * as React from "react";
import { ImmutableXClient, Link } from "@imtbl/imx-sdk";

import ImxClientContext from "./ImxClientContext";
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
  localStorage.setItem("WALLET_ADDRESS", address);
  localStorage.setItem("STARK_PUBLIC_KEY", starkPublicKey);
  return { address, starkPublicKey };
};

export const removeAccount = () => {
  localStorage.removeItem("WALLET_ADDRESS");
  localStorage.removeItem("STARK_PUBLIC_KEY");
};

export const ImxClientProvider = ({
  children,
}: {
  children: any;
}): JSX.Element => {
  const imxClient = getImxLink();
  // const { } = use

  const imxContext = {
    setup: () => imxClient.setup({})
  }
  return (
    <ImxClientContext.Provider value={ imxContext }>
      {children}
    </ImxClientContext.Provider>
  );
};
