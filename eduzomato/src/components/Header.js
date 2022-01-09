import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./header.css";
import Condheader from "./Condheader";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="header">
            <Link to="/" style={{ textDecoration: "none", color: "Red" }}>
              <div className="logo">ZOMATO</div>
            </Link>
            <Condheader />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
