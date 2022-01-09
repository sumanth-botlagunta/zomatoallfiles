import React, { Component } from "react";
import Vieworder from "./Vieworder";
import Header from "../Header";
import axios from "axios";
import Footer from "../Footer";
import "./placeorder.css";
const url = "https://edumato977.herokuapp.com/viewOrder";
const url1 = "https://edumato977.herokuapp.com/updateOrder";
class ViewOrderApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: "",
    };
  }
  render() {
    if (!sessionStorage.getItem("userData")) {
      return (
        
        <div>
        <Header />
        {console.log('>>>> Loged out place...')}
        <div className="guest">
          Login first to place booking.
        <div className="guest_image">
            <img src="https://i.ibb.co/TwpWzxD/useravatar.png" alt="default_avatar" />
        </div>
        </div>
        <Footer />
      </div>
      );
    }
    else{
      return (
        <div>
          <Header />
          <Vieworder orderdata={this.state.orders} />
          <Footer />
        </div>
      );
    }
  }
  componentDidMount() {
    if (this.props.location) {
      var qparams = this.props.location.search;
      if (qparams) {
        var data = {
          status: "Delivered",
          date: qparams.split("&")[2].split("=")[1],
          bank_status: qparams.split("&")[0].split("=")[1],
          bank: qparams.split("&")[3].split("=")[1],
        };
        var id = qparams.split("&")[1].split("=")[1].split("_")[1];
        fetch(`${url1}/${id}`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
    }
    if (sessionStorage.getItem("userData")){
      axios
      .get(`${url}?email=${sessionStorage.getItem("userData").split(",")[1]}`)
      .then((res) => {
        this.setState({ orders: res.data });
      });
    }
  }
}
export default ViewOrderApi;
