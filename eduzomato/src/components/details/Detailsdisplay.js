import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import Menudisplay from "./Menudisplay";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

const menuurl = "https://edumato977.herokuapp.com/menu/";

class Detailsdisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menudata: " ",
      orderdata: " ",
    };
  }

  getorderid = (data) => {
    this.props.getorderId(data);
  };

  renderdetails = (restdata) => {
    if (restdata) {
      return (
        <div>
          <h1 className="rest_name">{restdata.restaurant_name}</h1>
          <div className="imgslider-container">
            <div className="imgslider">
              <Carousel>
                <div className="imgcontainer">
                  <img src={restdata.image_gallery[0]} alt="restaurant_image" />
                </div>
                <div className="imgcontainer">
                  <img src={restdata.image_gallery[1]} alt="restaurant_image" />
                </div>
                <div className="imgcontainer">
                  <img src={restdata.image_gallery[2]} alt="restaurant_image" />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="tabs-container">
            <div className="tabs">
              <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
              </style>
              <Tabs>
                <TabList>
                  <Tab
                    style={{
                      borderTop: "5px solid red",
                      borderRadius: "0px",
                      width: "230px",
                      height: "50px",
                      fontFamily: "Josefin Sans, sans-serif",
                      fontSize: "23px",
                    }}
                  >
                    Details
                  </Tab>
                  <Tab
                    style={{
                      borderTop: "5px solid red",
                      borderRadius: "0px",
                      width: "230px",
                      height: "50px",
                      fontFamily: "Josefin Sans, sans-serif",
                      fontSize: "23px",
                    }}
                  >
                    Contact
                  </Tab>
                  <Tab
                    style={{
                      borderTop: "5px solid red",
                      borderRadius: "0px",
                      width: "230px",
                      height: "50px",
                      fontFamily: "Josefin Sans, sans-serif",
                      fontSize: "23px",
                    }}
                  >
                    Menu
                  </Tab>
                </TabList>

                <style>
                  @import
                  url('https://fonts.googleapis.com/css2?family=Padauk&display=swap');
                </style>

                <TabPanel
                  className="details"
                  style={{
                    fontSize: "23px",
                    fontFamily: "'Padauk', sans-serif",
                  }}
                >
                  <h2>{restdata.restaurant_name}</h2>
                  <div className="details-text">
                    {restdata.restaurant_name} is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently
                  </div>
                  <div className="mealtypes">
                    <Tooltip
                      title={restdata.mealTypes[0].mealtype_name}
                      color="success"
                      arrow
                    >
                      <Button>{restdata.mealTypes[0].mealtype_name}</Button>
                    </Tooltip>
                    <Tooltip title={restdata.mealTypes[1].mealtype_name} arrow>
                      <Button>{restdata.mealTypes[1].mealtype_name}</Button>
                    </Tooltip>
                  </div>

                  <div className="cusines">
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={restdata.cuisines[0].cuisine_name}
                        color="primary"
                        variant="outlined"
                      />
                      <Chip
                        label={restdata.cuisines[1].cuisine_name}
                        color="success"
                        variant="outlined"
                      />
                    </Stack>
                  </div>
                </TabPanel>
                <TabPanel
                  className="contact"
                  style={{
                    fontSize: "23px",
                    fontFamily: "'Padauk', sans-serif",
                  }}
                >
                  <h2>{restdata.restaurant_name}</h2>
                  <div className="address">{restdata.address}</div>
                  <div className="number">{restdata.contact_number}</div>
                </TabPanel>
                <TabPanel
                  className="menu-tab"
                  style={{
                    fontSize: "23px",
                    fontFamily: "'Padauk', sans-serif",
                  }}
                >
                  <Menudisplay
                    menudata={this.state.menudata}
                    getorderdata={(data) => {
                      this.getorderid(data);
                    }}
                  />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      );
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
    return (
      <div className="underdisplay">
        {this.renderdetails(this.props.restdata)}
      </div>
    );
  }

  async componentDidMount() {
    let restId = this.props.restId;
    let response = await axios.get(`${menuurl}${restId}`);
    this.setState({ menudata: response.data });
  }
}

export default Detailsdisplay;
