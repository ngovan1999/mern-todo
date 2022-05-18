import React, { Component } from "react";
import { toast } from "react-toastify";
import { withTranslation } from "react-i18next";
import { createBookServices } from "../../services/book.service";

class AddTodo extends Component {
  state = {
    title: "",
    description: "",
  };
  handleOnChangTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnChangDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handleAddTodo = async () => {
    if (!this.state.title) {
      toast.warn("Error");
      return;
    }
    let todo = {
      title: this.state.title,
      description: this.state.description,
    };
    await createBookServices(todo);
    this.props.handleListTodo();
    this.setState({
      title: "",
      description: "",
    });
  };
  render() {
    let { title, description } = this.state;
    console.log(description);
    return (
      <div className="add-todo">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(event) => this.handleOnChangTitle(event)}
          />
          <textarea
            className="mt-12 mb-12"
            placeholder="description"
            value={description}
            onChange={(event) => this.handleOnChangDescription(event)}
          />
        </div>
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
