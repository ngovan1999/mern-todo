import React, { Component } from "react";
import AddTodo from "./AddTodo";
import { withTranslation } from "react-i18next";
import { toast } from "react-toastify";
import "./styles.css";
import { connect } from "react-redux";

class TodoPage extends Component {
  state = {
    ListTodos: [{ id: "1", title: "Hello world" }],
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo],
    });
    toast.success("success!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.ListTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      ListTodos: currentTodos,
    });
  };
  handleEditTodo = (todo) => {
    let { editTodo, ListTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    //save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodosCopy = [...ListTodos];
      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = editTodo.title;
      this.setState({
        ListTodos: listTodosCopy,
        editTodo: {},
      });
      return;
    }
    //edit
    this.setState({
      editTodo: todo,
    });
  };
  handleOnchangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { ListTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div style={{ paddingTop: "50px" }}>
        <div className="main-home container-800 text-center border pt-32">
          <p className="title-container fs-28 fw-500 mb-20">
            {this.props.t("title_list_work")}
          </p>
          <div className="list-todo-container">
            <AddTodo
              addNewTodo={this.addNewTodo}
              ListTodos={this.state.ListTodos}
            />
            <div className="list-todo-content">
              {ListTodos &&
                ListTodos.length > 0 &&
                ListTodos.map((item, index) => {
                  return (
                    <div className="todo-child" key={item.id}>
                      {isEmptyObj === true ? (
                        <span>
                          {index + 1} - {item.title}
                        </span>
                      ) : (
                        <>
                          {editTodo.id === item.id ? (
                            <span>
                              {index + 1} -{" "}
                              <input
                                onChange={(event) =>
                                  this.handleOnchangeEditTodo(event)
                                }
                                value={editTodo.title}
                              />
                            </span>
                          ) : (
                            <span>
                              {index + 1} - {item.title}
                            </span>
                          )}
                        </>
                      )}
                      <button
                        className="edit ml-8"
                        onClick={() => this.handleEditTodo(item)}
                      >
                        {isEmptyObj === false && editTodo.id === item.id
                          ? this.props.t("save")
                          : this.props.t("edit")}
                      </button>

                      <button
                        className="delete"
                        onClick={() => {
                          this.handleDeleteTodo(item);
                        }}
                      >
                        {this.props.t("delete")}
                      </button>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme,
  };
};

export default withTranslation()(connect(mapStateToProps)(TodoPage));
