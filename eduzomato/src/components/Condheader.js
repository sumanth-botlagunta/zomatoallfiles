import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Button from "@mui/material/Button";
import "./header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const url = "https://loginzomato.herokuapp.com/api/auth/userinfo";
class Condheader extends Component {
  constructor() {
    super();
    this.state = {
      userData: "",
    };
  }
  handleLogout = () => {
    this.setState({ userData: "" });
    sessionStorage.removeItem("ltk");
    sessionStorage.removeItem("userData");
    this.props.history.push("/");
  };
  render() {
    if (this.state.userData.name) {
      let data = this.state.userData;
      let outputArry = [data.name, data.email, data.phone, data.role];
      sessionStorage.setItem("userData", outputArry);
      return (
        <div className="header-buttons">
          <Button
            variant="contained"
            color="success"
            className="button login login-button"
          >
            Hi {this.state.userData.name}
          </Button>
          <Button
            variant="contained"
            className="button register register-button"
            onClick={this.handleLogout}
          >
            Logout
          </Button>
          <Link to="/vieworder">
            <ShoppingCartIcon sx={{ fontSize: 40, color: "black" }} />
          </Link>
        </div>
      );
    } else {
      return (
        <div className="header-buttons">
          <Link to="/login">
            <Button
              variant="contained"
              color="success"
              className="button login login-button"
            >
              Login
            </Button>
          </Link>{" "}
          &nbsp;
          <Link to="/register">
            <Button
              variant="contained"
              className="button register register-button"
            >
              Register
            </Button>
          </Link>
        </div>
      );
    }
  }
  componentDidMount() {
    fetch(url, {
      method: "GET",
      headers: {
        "x-access-token": sessionStorage.getItem("ltk"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userData: data,
        });
      });
  }
}
export default withRouter(Condheader);
