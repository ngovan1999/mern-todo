import React, { Component } from "react";
import LifeCycle from "./LifeCycle";
export default class HomePage extends Component {
  state = { show: false, appStateValue: 0, other: 0 };
  render() {
    const { show, appStateValue } = this.state;

    return (
      <div className="text-center mt-32">
        <button onClick={() => this.setState({ show: !this.state.show })}>
          SHOW/HIDE Component
        </button>

        <button
          onClick={() =>
            this.setState({ appStateValue: this.state.appStateValue + 1 })
          }
        >
          PLUS appStateValue
        </button>

        <button
          onClick={() =>
            this.setState({ appStateValue: this.state.appStateValue - 1 })
          }
        >
          MINUS appStateValue
        </button>

        <button onClick={() => this.setState({ other: this.state.other + 1 })}>
          Other
        </button>

        {show && <LifeCycle propValue={appStateValue} />}
      </div>
    );
  }
}
