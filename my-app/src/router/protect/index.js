import React, { Component } from "react";
import Nav from "../../components/nav";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import TodoPage from "../../pages/todoPage";

class Protect extends Component {
  render() {
    return (
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Routes>
      </>
    );
  }
}

export default Protect;
