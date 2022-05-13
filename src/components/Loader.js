import React from "react";
import { Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Loader() {
  return (
    <Spinner className="loader" animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
