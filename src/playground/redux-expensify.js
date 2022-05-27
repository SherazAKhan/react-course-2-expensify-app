import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//Because expenses are more in number, so in order to set default values, we are
//declaring another variable
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    //state.concat(action.expense);
    //Use of ES6 Spread Operator
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => id !== action.expense.id);
    case "EDIT_EXPENSE":
      //map will go through every expense of object and find the one with the given id and if found, update it
      return state.map((expense) => {
        if (expense.id === action.expense.id) {
          return {
            //Use of Spread Operator with Objects
            ...expense,
            ...action.expense.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text,
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount",
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date",
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate,
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate,
      };
    default:
      return state;
  }
};

//Getting Expenses based on Filters
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt - b.createdAt;
      } else if (sortBy === "amount") {
        return a.amount - b.amount;
      }
    });
};

//Creating Store with Combine Reducer
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const addExpense = ({
  //Default Values
  id = "",
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: id,
    description: description,
    note: note,
    amount: amount,
    createdAt: createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  expense: {
    id,
  },
});

const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  expense: {
    id,
    updates,
  },
});

const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text,
});
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
});
const sortByDate = () => ({
  type: "SORT_BY_DATE",
});
const setStartDate = (startDate) => ({
  type: "SET_START_DATE",
  startDate,
});
const setEndDate = (endDate) => ({
  type: "SET_END_DATE",
  endDate,
});

const expenseOne = store.dispatch(
  addExpense({
    id: 1,
    description: "January Rent",
    amount: 1000,
    createdAt: 21000,
  })
);
const expenseTwo = store.dispatch(
  addExpense({
    id: 2,
    description: "February Rent",
    amount: 3000,
    createdAt: 1000,
  })
);

// //We are calling removeExpense and Passing id of expenseOne to be removed
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// //We are calling editExpense and Passing id of expenseTwo to be edited and the value we want to edit, like amount
// //in this case
//store.dispatch(editExpense(expenseTwo.expense.id, { amount: 6000 }));

///////////////////////////// Filters //////////////////////////////////

store.dispatch(setTextFilter("Rent"));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(setStartDate(1000));
//store.dispatch(setStartDate());
//store.dispatch(setEndDate(135));
//It is an object we are going to use for Expensify Project
const demoState = {
  //Array containing Expenses and their Details
  expenses: [
    {
      id: "",
      description: "Janurary Rent",
      note: "This was teh final payment for that address",
      amount: 25200,
      createdAt: 0,
    },
  ],
  //Filters to Sort / Find Data
  filters: {
    text: "",
    sortBy: "amount", //Amount or Date
    startDate: undefined,
    endDate: undefined,
  },
};
