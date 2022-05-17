import React, { Component } from "react";
import { toast } from "react-toastify";
import { withTranslation } from "react-i18next";

class AddTodo extends Component {
  state = {
    title: "",
  };
  handleOnChangTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.warn("Error");
      return;
    }
    let todo = {
      id: this.props.ListTodos.length + 1,
      title: this.state.title,
    };
    this.props.addNewTodo(todo);
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
    let { ListTodos } = this.props;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handleOnChangTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => {
            this.handleAddTodo();
          }}
        >
          {this.props.t("add")}
        </button>
      </div>
    );
  }
}

export default withTranslation()(AddTodo);
