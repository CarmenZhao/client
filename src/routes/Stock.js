import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Loader from "../components/Loader";
import { useStockAPI } from "../components/api";
import SearchBar from "../components/SearchBar";
import StockTable from "../components/Tables/StockTable";
import { HomeButton } from "../components/Tables/Buttons";

function filterData(rowData, symbol, sector, setFilterList) {
  const filterList = rowData.filter((stock) => {
    if (symbol === "" && sector === "") {
      return stock;
    } else if (
      stock.symbol.includes(symbol) &&
      stock.industry.includes(sector)
    ) {
      return stock;
    }
  });
  setFilterList(filterList);
}

export default function Stock() {
  /* fetch data using api.js*/
  const { loading, stocks, error } = useStockAPI();

  const columnDefs = [
    { headerName: "Symbol", field: "symbol", flex: 1 },
    { headerName: "Company", field: "company", flex: 1 },
    { headerName: "Industry", field: "industry", flex: 1 },
  ];

  const [rowData, setRowData] = useState([]);
  const [symbols, setSymbols] = useState([]);
  const [sectors, setSectors] = useState([]);

  const [symbolSearch, setSymbolSearch] = useState("");
  const [sectorSearch, setSectorSearch] = useState("");
  const [filterList, setFilterList] = useState([]);

  /* set the original rowData and option lists of search bars*/
  useEffect(() => {
    setRowData(
      stocks.map((stock) => {
        return {
          symbol: stock.symbol,
          company: stock.name,
          industry: stock.sector,
        };
      })
    );
    setSymbols(() => {
      let symbols = stocks.map((stock) => {
        return stock.symbol;
      });
      return symbols.sort();
    });
    setSectors(() => {
      let sectors = stocks.map((stock) => {
        return stock.sector;
      });
      return [...new Set(sectors)].sort();
    });
  }, [stocks]);

  /* let filterList equal to the original rowData at the beginning*/
  useEffect(() => {
    setFilterList(rowData);
  }, [rowData]);

  /*if values in search bars change, filter the original rowData*/
  useEffect(() => {
    filterData(rowData, symbolSearch, sectorSearch, setFilterList);
  }, [symbolSearch, sectorSearch, rowData]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return (
      <div>
        <h3>Oops, something went wrong.</h3>
        <HomeButton />
      </div>
    );
  }
  return (
    <div className="stock-page">
      <div
        className="row justify-content-center"
        style={{ textAlign: "center" }}
      >
        <h2 style={{ fontWeight: 800 }}>Stock Catalogue</h2>
        <h6>
          <Badge className="me-2" pill bg="warning" text="dark">
            {rowData.length}
          </Badge>
          list of Nasdaq market stocks
        </h6>
      </div>

      <div className="row d-flex justify-content-center">
        <SearchBar
          options={symbols}
          isSearchable={true}
          isClearable={true}
          placeholder={"Search by Symbol"}
          onChange={setSymbolSearch}
        />
        <SearchBar
          options={sectors}
          isSearchable={false}
          isClearable={true}
          placeholder={"Select by Industry"}
          onChange={setSectorSearch}
        />
      </div>
      <div className="row justify-content-center">
        <StockTable column={columnDefs} row={filterList} />
      </div>
    </div>
  );
}
