import { createStore, combineReducers } from "redux";
import expensesReducer from "../reducers/expenses";
import filtersReducer from "../reducers/filters";
import { devToolsEnhancer } from "@redux-devtools/extension";

//Creating and exporting Store with Combine Reducer
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer,
    }),
    devToolsEnhancer()
  );
  return store;
};
