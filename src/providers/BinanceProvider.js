import request from 'request-promise';
import _ from 'lodash';

const baseUrl = 'https://www.binance.com/api/';
const pricesUrl = 'v3/ticker/price';

class BinanceProvider {

  fetchPricesInBTC() {

    const options = {
      uri: baseUrl + pricesUrl,
      json: true
    };

    return request(options).then(pairPrices => {
      let btcPairs = _.filter(pairPrices, symbolPrice => {
        return symbolPrice.symbol.substring(symbolPrice.substring.length - 3) === 'BTC';
      });
      let assetPrices = _.map(btcPairs, pair => {
        let pairSymbol = pair.symbol;
        return { 
          assetSymbol: pairSymbol.substring(0, pairSymbol.length - 3),
          price: pair.price 
        };
      });
      return assetPrices;
    });
  }

}

export default BinanceProvider;