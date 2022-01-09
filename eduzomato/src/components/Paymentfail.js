import React from "react";
import Header from "./Header";
import "./payfail.css";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Paymentfail() {
  return (
    <div>
      <Header />
      <div className="payfail">
        <div className="payfailimage">
          <img
            src="https://i.ibb.co/RSK7mGr/2842748.jpg"
            alt="2842748"
            border="0"
          />
        </div>
        <div className="payfailhome">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Button variant="outlined" sx={{ color: "black" }}>
              back to home
              <HomeIcon sx={{ fontSize: 40, color: "black" }} />
            </Button>
          </Link>
        </div>
        <div className="payfailtext">
          Your Payment has failed. Please Return to Home
        </div>
      </div>
    </div>
  );
}

export default Paymentfail;
