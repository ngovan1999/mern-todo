import React, { Component } from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
import { ImSvg } from "react-icons/im";
import { connect } from "react-redux";
import { setTheme } from "../../redux/theme/actions";
import { setLanguage } from "../../redux/language/actions";
import { Select } from "antd";
import { withTranslation } from "react-i18next";

const { Option } = Select;

class Nav extends Component {
  navLinkStyle = ({ isActive }) => ({
    color: isActive ? "#fff" : "",
    backgroundColor: isActive ? "#0d6efd" : "",
  });
  handleTheme = () => {
    this.props.setTheme(!this.props.theme);
  };

  handleSelectLanguage = (value) => {
    this.props.setLanguage(value);
    this.props.i18n.changeLanguage(value);
  };

  render() {
    return (
      <div className={!this.props.theme ? "header dark" : "header light"}>
        <div className="topnav">
          <NavLink to="/" style={this.navLinkStyle}>
            {this.props.t("home")}
          </NavLink>
          <NavLink to="/todo" style={this.navLinkStyle}>
            {this.props.t("Todo_list")}
          </NavLink>
        </div>
        <div className="theme">
          <Select
            value={this.props.language}
            style={{ width: 120 }}
            onSelect={this.handleSelectLanguage}
          >
            <Option value="en">{this.props.t("english")}</Option>
            <Option value="vn">{this.props.t("vietnam")}</Option>
          </Select>
          <ImSvg className="cu ml-8" onClick={this.handleTheme} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme,
    language: state.languageReducer.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (payload) => {
      dispatch(setTheme(payload));
    },
    setLanguage: (payload) => {
      dispatch(setLanguage(payload));
    },
  };
};

export default withTranslation()(
  connect(mapStateToProps, mapDispatchToProps)(Nav)
);
