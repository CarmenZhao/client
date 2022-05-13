import React from "react";
import { Stack, Badge } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function QuoteCard(props) {
  const info = props.info;
  return (
    <Stack gap={2}>
      <h2 style={{ fontWeight: 800 }}>{info.name}</h2>
      <h5>
        <Badge bg="warning" text="dark" style={{ borderRadius: 20 }}>
          Quote Details
        </Badge>
      </h5>
      <div>
        <strong>Price: </strong>&nbsp;&nbsp;
        {info.price}
      </div>
      <div>
        <strong>Market Capitalisation: </strong>&nbsp;&nbsp;
        {info.mktCap}
      </div>
      <div>
        <strong>shares Outstanding: </strong>&nbsp;&nbsp;
        {info.share}
      </div>
      <div>
        <strong>EPS: </strong>&nbsp;&nbsp;
        {info.eps}
      </div>
      <div>
        <strong>Year High: </strong>&nbsp;&nbsp;
        {info.yrHigh}
      </div>
      <div>
        <strong>Year low: </strong>&nbsp;&nbsp;
        {info.yrLow}
      </div>
    </Stack>
  );
}
