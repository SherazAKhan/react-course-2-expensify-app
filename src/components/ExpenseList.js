import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selecters/expenses";

//Wrapped Compenent
const ExpenseList = (props) => (
  <div>
    <h1> Expense List</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

//Its just an object to store current state of object / store to manage the code, nothing else it is
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};
//We are connecting this object (HOC) with Wrapped Component (ExpenseList) and passing current state of HOC to it
export default connect(mapStateToProps)(ExpenseList);
