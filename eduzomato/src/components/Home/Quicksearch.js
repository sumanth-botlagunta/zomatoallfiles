import React from "react";
import { Link } from "react-router-dom";
function Quicksearch(props) {
  const listmeal = ({ quickdata }) => {
    if (quickdata) {
      return quickdata.map((item) => {
        return (
          <Link
            to={`Listing/${item.mealtype_id}`}
            style={{ textDecoration: "none" }}
            className="mealtypes"
            key={item._id}
          >
            <div className="mealtype" key={item._id}>
              <div className="mealtype_container">
                <div className="meal_thumb">
                  <img
                    src={item.meal_image}
                    alt="mealtype_image"
                    className="rounded img-fluid"
                  />
                </div>

                <div className="meal_details">
                  <div className="meal_name">{item.mealtype}</div>
                  <div className="meal_description">{item.content}</div>
                </div>
              </div>
            </div>
          </Link>
        );
      });
    }
  };
  return <>{listmeal(props)}</>;
}
export default Quicksearch;
