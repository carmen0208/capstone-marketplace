import React, { useEffect, useState } from "react";
import Asset from "../../components/Asset";
import { useImxClientContext } from "../../context/ImxClientContext";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Assets(): JSX.Element {
  const [assets, setAssets] = useState<any>([]);
  const { imxClient } = useImxClientContext();
  useEffect(() => {
    (async () => {
      if (!imxClient) {
        return;
      }
      const { result } = await imxClient.getAssets()
      setAssets(result);
    })()
  }, [imxClient])

  return <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      {assets.map((asset: any, index: any) => <Asset asset={asset} index={index} />)}
    </Grid>
  </Box>
}
