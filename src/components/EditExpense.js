import React from "react";
import { useParams } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpense = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          //props.history.push("/");
          console.log(props.expense.id);
          console.log(expense);
          // <Navigate to="/create" replace={true} />;
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.expense.id }));
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const { id } = useParams();
  return {
    //const item = useSelector((state) => state.items[slug])
    //useSelector((state) => state.expense[id]),
    expense: state.expenses.find(
      (expense) => expense.id === id //id
    ),
  };
};
export default connect(mapStateToProps)(EditExpense);
