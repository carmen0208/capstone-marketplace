import * as React from "react";

import ImxClientContext  from "./ImxClientContext";
import { useImxClientManager } from "./ImxClientManager";

export const ImxClientProvider = ({
  children,
}: {
  children: any;
}): JSX.Element => {
  const imxContext = useImxClientManager();
  return (
    <ImxClientContext.Provider value={ imxContext }>
      {children}
    </ImxClientContext.Provider>
  );
};
