import React, { Component } from "react";
import Quicksearch from "./Quicksearch";
import "./quicksearch.css";
const url = "https://edumato977.herokuapp.com/quicksearch";
class Quickapi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealdata: "",
    };
  }
  render() {
    return (
      <div className="quicksearch">
        <Quicksearch quickdata={this.state.mealdata} />
      </div>
    );
  }
  componentDidMount() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ mealdata: data });
      });
  }
}

export default Quickapi;
