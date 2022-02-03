import axios from 'axios';

export async function loadAssets() {
  const { data } = await axios.get<any[]>('https://api.ropsten.x.immutable.com/v1/assets')

  return data;
} 