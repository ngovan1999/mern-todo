import React from "react";
import ReactDOM from "react-dom";

class ForceUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      title1: "Van ngo",
    };
  }

  changeColor() {
    var title = document.getElementById("title");
    ReactDOM.findDOMNode(title).style.color = "red";
  }

  checkTrueFalse(a, b) {
    return a > b;
  }

  changeTitle() {
    //Sẽ không nhận được giá trị của this.
    //Từ đó không thể set state được.
    this.setState({
      title1: "Ngo Trong Van",
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Tiêu đề</h1>
        <button onClick={() => this.changeColor()}>Change Color</button>
        <p>Giá trị: {Math.random()}</p>

        <button onClick={() => this.forceUpdate()}>Reload</button>

        <h1 id="title">{this.state.title1}</h1>
        <button onClick={() => this.changeTitle()}>changeTitler</button>
      </div>
    );
  }
}

export default ForceUpdate;
