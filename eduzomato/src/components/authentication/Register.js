import React, { Component } from "react";
import "./auth.css";
const url = "https://loginzomato.herokuapp.com/api/auth/register";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    console.log(">>register data", this.state);
    fetch(url, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then(this.props.history.push("/login"));
  };

  render() {
    return (
      <div className="auth_back">
        <br />
        <div className="panel panel-info auth_form">
          <div className="auth-heading">
            <h3>Register</h3>
          </div>
          <div className="auth-body">
            <div className="row auth-cred">
              <div className="col-md-12">
                <div className="col-md-10 my-2">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      className="form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
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
                    <label>Phone</label>
                    <input
                      className="form-control"
                      name="phone"
                      value={this.state.phone}
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
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="auth-button">
              <button className="btn btn-success " onClick={this.handleSubmit}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
