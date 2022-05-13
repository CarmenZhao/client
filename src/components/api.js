import { useState, useEffect } from "react";

const API_KEY = "607f84ac4ebc39533caed82e8a001d02";

async function fetchStocks() {
  const url = `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${API_KEY}`;
  let res = await fetch(url);
  let stocks = await res.json();
  return stocks;
}

async function getSelectedStock(stock) {
  const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${stock}?timeseries=100&apikey=${API_KEY}`;
  let res = await fetch(url);
  let history = await res.json();
  let prices = history.historical;
  return prices;
}

async function getSelectedQuote(stock) {
  const url = `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${API_KEY}`;
  let res = await fetch(url);
  let quote = await res.json();
  quote = quote[0];
  return quote;
}

export function useStockAPI() {
  const [loading, setLoading] = useState(true);
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setStocks(await fetchStocks());
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);
  return {
    loading,
    stocks,
    error,
  };
}

export function usePriceAPI(props) {
  const [loading, setLoading] = useState(true);
  const [prices, setPrices] = useState([]);
  const [quote, setQuotes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setPrices(await getSelectedStock(props.state.name));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setQuotes(await getSelectedQuote(props.state.name));
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, []);
  return {
    loading,
    prices,
    quote,
    error,
  };
}
