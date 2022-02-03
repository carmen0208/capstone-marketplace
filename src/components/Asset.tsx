import Grid from '@mui/material/Grid';

export interface AssetType {
  description: string;
}
export default function Asset({ asset, index }: { asset: any, index: any }): JSX.Element {
  const { token_address, token_id, id, user, status, uri, name, description, image_url, created_at, updated_at, metadata, collection } = asset;

  return <div>{!!image_url && <Grid item xs={4} >
    <div key={index}>
      {/* <p>{token_address}</p>
      <p>{token_id}</p>
      <p>{id}</p>
      <p>{user}</p>
      <p>{status}</p>
      <p>{uri}</p>
      <p>{name}</p> */}
      <p>{description}</p>
      <p>{image_url}</p>
      <img alt="No Image" src={image_url} width="150" height="70" />
      {/* <p>{created_at}</p>
      <p>{updated_at}</p>
      <p>{JSON.stringify(metadata, null, 2)}</p>
      <p>{JSON.stringify(collection, null, 2)}</p> */}
    </div>
  </Grid>}</div>
}

