import React, { useEffect, useState } from "react";
import { useImxClientContext } from "../../context/ImxClientContext";
// import { loadAssets } from "../../services/assets";

export default function Assets(): JSX.Element {
  const [assets, setAssets] = useState<any>([]);
  const { imxClient } = useImxClientContext();
  useEffect(() => {
    (async () => {
      const _assets = !!imxClient && await imxClient.getAssets()
      setAssets(_assets);
    })()
  }, [imxClient])

  return <p>{JSON.stringify(assets, null, 2)}</p>;
}
