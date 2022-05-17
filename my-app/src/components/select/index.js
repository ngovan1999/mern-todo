import React from "react";
import "./styles.css";

class CustomSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultSelectText: "",
      showOptionList: false,
      optionsList: [],
    };
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    this.setState({
      defaultSelectText: this.props.defaultText,
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.defaultSelectText !== prevState.defaultSelectText) {
  //   }
  // }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (e) => {
    if (
      !e.target.classList.contains("custom-select-option") &&
      !e.target.classList.contains("selected-text")
    ) {
      this.setState({
        showOptionList: false,
      });
    }
  };

  handleListDisplay = () => {
    this.setState((prevState) => {
      return {
        showOptionList: !prevState.showOptionList,
      };
    });
  };

  render() {
    const { optionsList } = this.props;
    const { showOptionList, defaultSelectText } = this.state;
    return (
      <div className="custom-select-container">
        <div
          className={showOptionList ? "selected-text active" : "selected-text"}
          onClick={this.handleListDisplay}
        >
          {defaultSelectText}
        </div>
        {showOptionList && (
          <ul className="select-options">
            {optionsList.map((option, index) => {
              return (
                <li
                  className="custom-select-option"
                  data-name={option.name}
                  key={index}
                  onClick={this.handleOptionClick}
                >
                  {option.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}

export default CustomSelect;
