import React, { Component } from "react";
import axios from "axios";
import Listingapi from "./Listingapi";
import CusineFilter from "../filters/CusineFilter";
import CostFilter from "../filters/CostFilter";
import "./listdetails.css";
import Header from "../Header";
import "../header.css";
import Footer from "../Footer";
const url = "https://edumato977.herokuapp.com/restaurant?mealtype_id=";
class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: "",
    };
  }
  setDataAsPerFilter = (sortedData) => {
    this.setState({ listing: sortedData });
    console.log("sorted data >>>>", this.state.listing);
  };
  render() {
    return (
      <div>
        <Header />
        <div className="all_lists">
          {/* {this.renderlist(this.state.listing)} */}
          <div id="filter">
            <CusineFilter
              restPerCusinie={(data) => {
                this.setDataAsPerFilter(data);
              }}
            />
            <hr />
            <CostFilter
              restPerCost={(data) => {
                this.setDataAsPerFilter(data);
              }}
            />
            <hr />
          </div>
          <div className="listingapi">
            <Listingapi listdata={this.state.listing} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  componentDidMount() {
    let mealId = this.props.match.params.mealtype_id;
    sessionStorage.setItem("mealId", mealId);
    axios.get(`${url}${mealId}`).then((response) => {
      this.setState({ listing: response.data });
    });
  }
}
export default Listing;
