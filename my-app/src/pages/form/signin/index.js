import React from "react";
import "../styles.css";
import { NavLink } from "react-router-dom";
import { withRouter } from "../../../hooks/withRouter";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.props.router.navigate("/");
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="auth-form">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-container">
            <label className="label">Username: </label>
            <input
              type="text"
              name="username"
              className="input"
              placeholder="Username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-container">
            <label className="label">Password: </label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
            <p className="signup-label">
              Don't have an account?{" "}
              <NavLink to="/signup" className="link">
                Sign up
              </NavLink>
            </p>
          </div>
          <button type="submit" id="login-btn">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
