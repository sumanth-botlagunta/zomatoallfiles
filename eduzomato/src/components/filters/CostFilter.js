import React, { Component } from "react";
import axios from "axios";
import "./filter.css";
const url = "https://edumato977.herokuapp.com/filter";
class CostFilter extends Component {
  filterCost = (event) => {
    let mealId = sessionStorage.getItem("mealId");
    let cost = event.target.value.split("-");
    let lcost = cost[0];
    let hcost = cost[1];
    let filterUrl;
    if (event.target.value == "") {
      filterUrl = `${url}/${mealId}`;
    } else {
      filterUrl = `${url}/${mealId}?lcost=${lcost}&hcost=${hcost}`;
    }
    axios.get(filterUrl).then((res) => {
      this.props.restPerCost(res.data);
    });
  };

  render() {
    return (
      <div className="costFilter">
        <div className="heading"> sort by cost</div>
        <div onChange={this.filterCost} className="labels cost-labels">
          <label className="radio">
            <input type="radio" name="cuisine" value="" />
            All
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="200-300" />
            201-300
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="301-600" />
            301-600
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="601-1000" />
            601-1000
          </label>
          <label className="radio">
            <input type="radio" name="cuisine" value="1001-1500" />
            1001-1500
          </label>
        </div>
      </div>
    );
  }
}

export default CostFilter;
