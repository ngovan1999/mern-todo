import React, { Component } from "react";
import { toast } from "react-toastify";
import { withTranslation } from "react-i18next";
import {
  createBookServices,
  getAllBooksServices,
} from "../../services/book.service";

class AddTodo extends Component {
  state = {
    title: "",
  };
  handleOnChangTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleAddTodo = async () => {
    if (!this.state.title) {
      toast.warn("Error");
      return;
    }
    let todo = {
      title: this.state.title,
    };
    await createBookServices(todo);
    this.props.handleListTodo();
    this.setState({
      title: "",
    });
  };
  render() {
    let { title } = this.state;
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
