import axios from 'axios';

// 環境変数から取得
const APIURL = process.env.REACT_APP_APIURL;
const APIKEY = process.env.REACT_APP_APIKEY;

export const getSimplePrice = async () => {

};

export const getCoinMarket = async ( coinName ) => {
  const endpoint = '/coins/markets';
  const url = APIURL + endpoint;
  
  const params = {
    ids : coinName,
    vs_currency : 'jpy',
    price_change_percentage : '1h,24h,7d'
  };
  
  const response = await axios.get(url, {
    params
  });
  return response.data;
};
