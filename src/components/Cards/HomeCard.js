import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faBook,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeCard() {
  return (
    <CardGroup>
      <Card className="feature-card">
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon className="icons" icon={faBook} />
            Stock Worth Summary
          </Card.Title>
          <Card.Text className="feature-info">
            A comprehensive summary of stocks' worth could be developed with
            access to present and historical stock prices.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="feature-card">
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon icon={faChartLine} />
            Daily Trade Charts
          </Card.Title>
          <Card.Text className="feature-info">
            Charts made on fluctuations recorded in stock value rise and fall
            are of great importance. There's a possibility created by stock
            genius to get charts on daily roundups.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="feature-card">
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon icon={faCoins} />
            Extensive Collection of Portfolio
          </Card.Title>
          <Card.Text className="feature-info">
            After subscribing to the paid version of this website, investors are
            allowed to sweep in the company's portfolio holdings.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
