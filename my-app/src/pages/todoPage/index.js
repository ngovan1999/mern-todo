import React, { Component } from "react";
import AddTodo from "./AddTodo";
import {
  getAllBooksServices,
  updateBookServices,
  deleteBookServices,
  getDetailBookServices,
} from "../../services/book.service";
import { withTranslation } from "react-i18next";
import { Modal, Typography, Col, Row } from "antd";
import "./styles.css";
import { connect } from "react-redux";

class TodoPage extends Component {
  state = {
    ListTodos: undefined,
    editTodo: {},
    isModalVisible: false,
    todo_id: null,
    todo: null,
  };

  componentDidMount() {
    getAllBooksServices().then((res) => {
      this.setState({
        ListTodos: res.data,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todo_id && prevState.todo_id !== this.state.todo_id) {
      getDetailBookServices(this.state.todo_id).then((res) => {
        this.setState({
          todo: res.data,
        });
      });
    }
  }

  handleDeleteTodo = (todo) => {
    deleteBookServices(todo._id).then((res) => {
      getAllBooksServices().then((res) => {
        this.setState({
          ListTodos: res.data,
        });
      });
    });
  };
  handleEditTodo = (todo) => {
    let { editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(isEmptyObj);
    //save
    if (isEmptyObj === false && editTodo._id === todo._id) {
      updateBookServices(todo._id, { title: editTodo.title }).then((res) => {
        getAllBooksServices().then((res) => {
          this.setState({
            ListTodos: res.data,
            editTodo: {},
          });
        });
      });
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

  handleListTodo = () => {
    getAllBooksServices().then((res) => {
      this.setState({
        ListTodos: res.data,
      });
    });
  };

  handleDetailTodo = (id) => {
    this.setState({
      todo_id: id,
    });
    this.showModal();
  };

  showModal = () => {
    this.setState({
      isModalVisible: true,
    });
  };

  handleOk = () => {
    this.handleCancel();
  };

  handleCancel = () => {
    this.setState({
      isModalVisible: false,
    });
  };

  render() {
    let { ListTodos, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    return (
      <>
        <div style={{ paddingTop: "50px" }}>
          <div className="main-home container-800 text-center border pt-32">
            <p className="title-container fs-28 fw-500 mb-20">
              {this.props.t("title_list_work")}
            </p>
            <div className="list-todo-container">
              <AddTodo
                ListTodos={this.state.ListTodos}
                handleListTodo={this.handleListTodo}
              />
              <div className="list-todo-content">
                {ListTodos &&
                  ListTodos.length > 0 &&
                  ListTodos.map((item, index) => {
                    return (
                      <div className="todo-child" key={item._id}>
                        {isEmptyObj === true ? (
                          <span
                            onClick={() => this.handleDetailTodo(item._id)}
                            className="cu"
                          >
                            {index + 1} - {item.title}
                          </span>
                        ) : (
                          <>
                            {editTodo._id === item._id ? (
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
                          {isEmptyObj === false && editTodo._id === item._id
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
        <Modal
          title="Detail book"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row>
            <Col span={24}>
              <Typography.Title>
                Tên: {this.state.todo && this.state.todo.title}
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Text>
                Decription: {this.state.todo && this.state.todo.description}
              </Typography.Text>
            </Col>
          </Row>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme,
  };
};

export default withTranslation()(connect(mapStateToProps)(TodoPage));
