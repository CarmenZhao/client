import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Stock from "./routes/Stock";
import NavBar from "./components/NavBar";
import Quote from "./routes/Quote";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Stock" element={<Stock />} />
          <Route path="/Quote/:symbol" element={<Quote />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
