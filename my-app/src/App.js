import "./App.css";
import "./assets/css/resets.css";
import Protect from "./router/protect";
import Login from "./pages/form/signin";
import Register from "./pages/form/signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";

function App(props) {
  const { theme } = props;
  return (
    <>
      <div className={theme ? "app dark" : "app light"}>
        <Router>
          <Routes>
            <Route path="/*" element={<Protect />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/signin" element={<Login />} />
          </Routes>
        </Router>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    theme: state.themeReducer.theme,
  };
};

export default connect(mapStateToProps)(App);
