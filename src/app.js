//Importing React and ReactDom Libraries after Installation
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRuoter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate,
} from "./actions/filters";
import getVisibleExpenses from "./selecters/expenses";
import "normalize.css";
import "./styles/styles.scss";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRuoter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
