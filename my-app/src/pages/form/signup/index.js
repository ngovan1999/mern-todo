import React from "react";
import "../styles.css";
import { withRouter } from "../../../hooks/withRouter";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
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
    this.props.router.navigate("/signin");
  }

  render() {
    const { username, password, confirmPassword } = this.state;
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
          </div>
          <div className="input-container">
            <label className="label">Password: </label>
            <input
              type="password"
              name="confirmPassword"
              className="input"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" id="login-btn">
            Register
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
