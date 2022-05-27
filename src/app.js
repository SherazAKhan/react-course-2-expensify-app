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
store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 1000,
    createdAt: 3000,
  })
);
store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 3000,
    createdAt: 2000,
  })
);
store.dispatch(
  addExpense({
    description: "Rent",
    amount: 4500,
    createdAt: 1000,
  })
);

const jsx = (
  <Provider store={store}>
    <AppRuoter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
