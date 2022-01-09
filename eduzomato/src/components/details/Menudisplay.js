import React, { Component } from "react";
import "./menudisplay.css";
import DeleteIcon from "@mui/icons-material/Delete";

const url = "https://edumato977.herokuapp.com/menuitem";

class Menudisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      setOpen: false,
    };
  }
  mytimeout = () => {
    setTimeout(() => {
      document.getElementById("cartmessage").style.visibility = "hidden";
    }, 1000);
  };
  orderId = [];
  addtocart = (id) => {
    this.orderId.push(id);
    this.props.getorderdata(this.orderId);
    document.getElementById("addtocart").innerHTML = this.orderId;
    this.props.getorderdata(this.orderId);
    document.getElementById("cartmessage").style.visibility = "visible";
    this.mytimeout();
  };
  removeOrder = (id) => {
    this.orderId.splice(this.orderId.indexOf(id.toString()), 1);
    this.props.getorderdata(this.orderId);
    console.log(">>>delete order", this.orderId);
    document.getElementById("addtocart").innerHTML = this.orderId;
    document.getElementById("cartmessage").innerHTML = "item deleted";
    document.getElementById("cartmessage").style.visibility = "visible";
    document.getElementById("cartmessage").className = "cartmsg btn-danger";
    this.mytimeout();
  };

  displaymenu = (data) => {
    if (data) {
      return data.map((item) => {
        return (
          <div>
            <div id="addtocart" className="cart-box"></div>
            <div id="cartmessage" className="cartmsg btn-success">
              added to cart
            </div>
            <div className="menu-item">
              <div className="menu-image">
                <img src={item.menu_image} alt="menu_image" />
              </div>
              <div className="menu-details">
                <div className="menu-name">{item.menu_name}</div>
                <div className="menu-text">{item.description}</div>
                <div className="menu-type">
                  <div className="btn btn-outline-primary">
                    {item.menu_type}
                  </div>
                </div>
                <div className="menu-price">
                  <div className="btn btn-warning">₹{item.menu_price}</div>
                </div>
                <div className="add-cart">
                  <button
                    className="add add-text btn btn-success"
                    onClick={() => {
                      this.addtocart(item.menu_id);
                    }}
                  >
                    Add to cart
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      this.removeOrder(item.menu_id);
                    }}
                  >
                    <DeleteIcon sx={{ fontSize: 23, color: "black" }} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    return <div className="menu">{this.displaymenu(this.props.menudata)}</div>;
  }
}

export default Menudisplay;
