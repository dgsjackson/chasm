import axios from 'axios';
import _ from 'lodash';
import handleAxiosError from '../error-handlers/AxiosErrorHandler';

const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
const binanceUrl = 'https://www.binance.com/api/';
const baseUrl = corsProxyUrl + binanceUrl;

const pricesUrl = 'v3/ticker/price';
const statsUrl = 'v1/ticker/24hr';

class BinanceProvider {

  fetchPricesInBTC() {
    let url = baseUrl + pricesUrl;
    return axios.get(url).then(response => {
      let pairPrices = response.data;
      let btcPairs = _.filter(pairPrices, symbolPrice => {
        return symbolPrice.symbol.substring(symbolPrice.symbol.length - 3) === 'BTC';
      });
      let assetPrices = _.map(btcPairs, pair => {
        let pairSymbol = pair.symbol;
        return { 
          symbol: pairSymbol.substring(0, pairSymbol.length - 3),
          price: pair.price 
        };
      });
      return assetPrices;
    }).catch(error => {
      handleAxiosError(error);
      throw new Error(error.message);
    });
  }

  fetchAssetStats(symbol) {
    let pairSymbol = symbol + 'BTC';
    let url = `${baseUrl}${statsUrl}?symbol=${pairSymbol}`;
    return axios.get(url).then(response => {
      let asset = response.data;
      return {
        symbol: asset.symbol.substring(0, asset.symbol.length - 3),
        price: asset.weightedAvgPrice,
        change: asset.priceChange,
        last: asset.lastPrice,
        high: asset.highPrice,
        low: asset.lowPrice,
        volume: asset.quoteVolume
      };
    }).catch(error => {
      handleAxiosError(error);
      throw new Error(error.message);
    });
  }

}

export default new BinanceProvider();