import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  browserHistory
} from "react-router-dom";
import TodoApp from "./TodoApp";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(:filter)" component={TodoApp} />
    </Router>
  </Provider>
);

export default Root;
