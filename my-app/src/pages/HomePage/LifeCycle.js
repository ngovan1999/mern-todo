import React from "react";

class LifeCycle extends React.Component {
  state = { stateValue: 0 };

  constructor(props) {
    super(props);
    console.log("constructor state: ", this.state);
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    console.log(" -newProps, newState:", newProps, newState);
    console.log(" - this.props, this.state:", this.props, this.state);
    if (newProps === this.props || newState === this.state) {
      console.log(" -tiep tuc render");
      return true;
    }
    console.log(" -khong render");
    return false;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(oldProps, oldState) {
    console.log("componentDidUpdate");
    console.log(" -oldProps, oldState:", oldProps, oldState);
    console.log(" -this.props, this.state:", this.props, this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    const { propValue } = this.props;
    const { stateValue } = this.state;
    return (
      <div style={{ border: "1px solid red" }} className="mt-32">
        <br />
        <div>Some Prop Value: {propValue}</div>
        <div>Some State Value: {stateValue}</div>
        <br />

        <button
          onClick={() =>
            this.setState({ stateValue: this.state.stateValue + 1 })
          }
        >
          PLUS stateValue
        </button>

        <button
          onClick={() =>
            this.setState({ stateValue: this.state.stateValue - 1 })
          }
        >
          MINUS stateValue
        </button>
      </div>
    );
  }
}

export default LifeCycle;
