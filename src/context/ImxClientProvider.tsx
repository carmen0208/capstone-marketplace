import * as React from "react";

import ImxClientContext from "./ImxClientContext";
// import { getImxLink } from "./imxClientManager";
import { useImxClientManager } from "./ImxClientManager";

export const ImxClientProvider = ({
  children,
}: {
  children: any;
}): JSX.Element => {
  // const imxClient = getImxLink();
  const imxContext = useImxClientManager();
  return (
    <ImxClientContext.Provider value={ imxContext }>
      {children}
    </ImxClientContext.Provider>
  );
};
