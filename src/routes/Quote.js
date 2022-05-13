import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col, Stack } from "react-bootstrap";

import Loader from "../components/Loader";
import { usePriceAPI } from "../components/api";
import QuoteCard from "../components/Cards/QuoteCard";
import PriceTable from "../components/Tables/PriceTable";
import PriceChart from "../components/Charts/PriceChart";
import { StocksButton } from "../components/Tables/Buttons";

function splitHistoryPrice(
  data,
  setDate,
  setOpen,
  setClose,
  setHigh,
  setLow,
  setVolume
) {
  const dates = data.map((history) => history.date);
  const open = data.map((history) => history.open);
  const high = data.map((history) => history.high);
  const low = data.map((history) => history.low);
  const close = data.map((history) => history.close);
  const volumes = data.map((history) => history.volume);
  setDate(dates);
  setOpen(open);
  setClose(close);
  setHigh(high);
  setLow(low);
  setVolume(volumes);
}

export default function Quote() {
  const location = useLocation();

  /* fetch data using api.js*/
  const { loading, prices, quote, error } = usePriceAPI(location);

  const [rowData, setRowData] = useState([]);
  const [searchDate, setSearchDate] = useState();
  const [filterList, setFilterList] = useState([]);

  const [info, setInfo] = useState([]);
  const [date, setDate] = useState([]);
  const [open, setOpen] = useState([]);
  const [close, setClose] = useState([]);
  const [high, setHigh] = useState([]);
  const [low, setLow] = useState([]);
  const [volume, setVolume] = useState([]);

  const columns = [
    { headerName: "Date", field: "date", flex: 1 },
    { headerName: "Open", field: "open", flex: 1 },
    { headerName: "Close", field: "close", flex: 1 },
    { headerName: "High", field: "high", flex: 1 },
    { headerName: "Low", field: "low", flex: 1 },
    { headerName: "Volume", field: "volume", flex: 1 },
  ];

  /* set the original rowData*/
  useEffect(() => {
    console.log(prices);
    setRowData(
      prices.map((record) => {
        return {
          date: record.date,
          open: record.open,
          close: record.close,
          high: record.high,
          low: record.low,
          volume: record.volume,
        };
      })
    );
  }, [prices]);

  /* set the quote information*/
  useEffect(() => {
    setInfo(() => {
      return {
        symbol: quote.symbol,
        name: quote.name,
        price: quote.price,
        mktCap: quote.marketCap,
        share: quote.sharesOutstanding,
        eps: quote.eps,
        yrHigh: quote.yearHigh,
        yrLow: quote.yearLow,
      };
    });
  }, [quote]);

  /* let filterList equal to the original rowData at the beginning*/
  useEffect(() => {
    console.log(rowData);
    setFilterList(rowData);
  }, [rowData]);

  /*if value in date picker changes, filter the original rowData*/

  useEffect(() => {
    compareDate();
  }, [searchDate]);

  const compareDate = () => {
    let filter = [];
    filter = rowData.filter((e) => {
      return new Date(e.date) >= new Date(searchDate);
    });
    setFilterList(filter);
  };

  /* format the filterList to pass the data to the chart component*/
  useEffect(() => {
    splitHistoryPrice(
      filterList,
      setDate,
      setOpen,
      setClose,
      setHigh,
      setLow,
      setVolume
    );
  }, [filterList]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div>
        <h3>Oops, something went wrong.</h3>
        <StocksButton />
      </div>
    );
  }
  return (
    <div style={{ marginTop: 60 }}>
      <Container fluid className="quote-page">
        <Row>
          <Col lg={4}>
            <QuoteCard info={info} />
          </Col>
          <Col style={{ paddingLeft: 10 }} lg={8}>
            <Stack direction="horizontal" gap={3}>
              <h4 className="">Historical Price Table</h4>
              <div className="ms-auto">
                <label htmlFor="date">Search date from&nbsp;&nbsp;</label>
                <input
                  style={{ borderRadius: 10 }}
                  type="date"
                  value={searchDate}
                  onChange={(e) => {
                    setSearchDate(e.target.value);
                  }}
                  id="date"
                />
              </div>
            </Stack>
            <PriceTable column={columns} row={filterList} />
          </Col>
        </Row>
      </Container>
      <h4 className="">Historical Price Chart</h4>
      <PriceChart
        date={date.reverse()}
        open={open.reverse()}
        low={low.reverse()}
        high={high.reverse()}
        close={close.reverse()}
        volume={volume.reverse()}
      />
    </div>
  );
}
