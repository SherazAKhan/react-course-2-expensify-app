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
        if (expense.id === action.id) {
          return {
            //Use of Spread Operator with Objects
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};
export default expensesReducer;
