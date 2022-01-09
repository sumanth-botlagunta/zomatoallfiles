import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
class Listingapi extends Component {
  constructor(props) {
    super(props);
  }
  listing = (listdata) => {
    if (listdata) {
      if (listdata.length > 0) {
        return listdata.map((item) => {
          return (
            <>
              <div className="list_container" key={item._id.toString()}>
                <Link
                  to={`/details/${item.restaurant_id}`}
                  style={{ textDecoration: "none", color: "Black" }}
                >
                  <div className="list_top">
                    <div className="rest_thumb">
                      <img
                        src={item.restaurant_thumb}
                        alt="restuarant_thumbnail"
                        className="img-fluid"
                      />
                    </div>
                    <div className="rest_name" key={item._id}>
                      {item.restaurant_name}
                    </div>
                  </div>
                </Link>
                <div className="list_details" key={item._id.toString()}>
                  <div className="list_details_text">
                    <div className="cusines rows">
                      <div className="cusines_heading colu-1">Cusines</div>
                      <div className="colu-2">
                        <Stack direction="row" spacing={1}>
                          <Chip
                            label={item.cuisines[0].cuisine_name}
                            color="primary"
                            variant="outlined"
                          />
                          <Chip
                            label={item.cuisines[1].cuisine_name}
                            color="success"
                            variant="outlined"
                          />
                        </Stack>
                      </div>
                    </div>
                    <div className="rest_address rows">
                      <div className="address_heading colu-1">Address</div>
                      <div className="colu-2">{item.address}</div>
                    </div>
                    <div className="rating rows">
                      <div className="rating_heading colu-1">Rating</div>
                      <div className="rate_text colu-2  ">
                        {item.rating_text}
                      </div>
                    </div>
                    <div className="cost rows">
                      <div className="class_heading colu-1">Cost </div>
                      <div className="cost_value colu-2 ">RS/-{item.cost}</div>
                    </div>
                    <div className="contact rows">
                      <div className="contact_heading colu-1 ">Contact</div>
                      <div className="contact colu-2 ">
                        {item.contact_number}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        });
      } else {
        return (
          <div>
            <h2>No Data For this filter</h2>
          </div>
        );
      }
    } else {
      return (
        <>
          <div className="loading_container">
            <img
              src="https://i.ibb.co/wYvB5M5/Spinner-1s-200px.gif"
              alt="Spinner-1s-200px"
            />
          </div>
        </>
      );
    }
  };

  render() {
    return <>{this.listing(this.props.listdata)}</>;
  }
}
export default Listingapi;
