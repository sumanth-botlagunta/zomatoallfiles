import React, { Component } from "react";
import "./auth.css";
const url = "https://loginzomato.herokuapp.com/api/auth/login";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    console.log(this.state);
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.auth === false) {
          this.setState({ message: data.token });
          console.log(">>>login failed");
        } else {
          sessionStorage.setItem("ltk", data.token);
          console.log(">>> login sucessfully");
          this.props.history.push("/");
        }
      });
  };

  render() {
    return (
      <div className="auth_back">
        <br />
        <div className=" auth_form">
          <div className="auth-heading">
            <h3>Login</h3>
          </div>
          <div className="auth-body">
            <h2 style={{ color: "red" }}>{this.state.message}</h2>
            <div className="row auth-cred">
              <div className="col-md-12">
                <div className="col-md-10 my-2">
                  <div className="form-group">
                    <label>EmailId</label>
                    <input
                      className="form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-10 my-2">
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      className="form-control"
                      name="password"
                      type="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="auth-button">
              <button className="btn btn-success " onClick={this.handleSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
