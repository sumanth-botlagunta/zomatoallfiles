import React, { Component } from "react";
import axios from "axios";
import "./details.css";
import Detailsdisplay from "./Detailsdisplay";
import "./menudisplay.css";
import Header from "../Header";
import "../header.css";
import Footer from "../Footer";

const detailsurl = "https://edumato977.herokuapp.com/details/";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restdata: "",
      cartitems: "",
    };
  }

  orderId = [];
  restId = this.props.match.params.restId;

  setorderId = (data) => {
    this.orderId = data;
    this.setState({ cartitems: this.orderId });
  };

  proceed = () => {
    this.props.history.push(
      `/placeorder/${this.state.restdata.restaurant_name}`
    );
    sessionStorage.setItem("menuId", this.orderId);
    sessionStorage.setItem("restId", this.restId);
  };

  render() {
    return (
      <div>
        <Header />
        <Detailsdisplay
          restdata={this.state.restdata}
          restId={this.restId}
          getorderId={(data) => {
            this.setorderId(data);
          }}
        />
        <div className="proceed_container">
            <button className="btn btn-warning proceed" onClick={this.proceed}>
              Order Items
            </button>
        </div>
        <Footer />
      </div>
    );
  }
  async componentDidMount() {
    let restId = this.props.match.params.restId;
    let response = await axios.get(`${detailsurl}${restId}`);
    this.setState({ restdata: response.data[0] });
  }
}

export default Details;
