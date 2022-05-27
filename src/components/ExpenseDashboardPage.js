import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
const ExpenseDashboardPage = () => (
  <div>
    <p>Enter Text to Filter Expenses</p>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);
export default ExpenseDashboardPage;
