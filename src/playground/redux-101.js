import { createStore } from "redux";

//Reducers
//Actions describe the fact that something happened, but don't specify how the
//application's state changes in response. This is what reducers do.
const countReducers = (
  state = { count: 0 },
  action
) /*returns current state*/ => {
  //Conditional Operator here to check if incrementBy is set

  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy,
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy,
      };
    case "SET":
      return { count: action.count };
    case "RESET":
      return {
        count: 0,
      };
    default:
      return state;
  }
};
//state here returns current state and if its not set yet, it will create new state and set count to 0
const store = createStore(countReducers);
//This function is called everytime the store's state is changed or we can say everytime dispatch() is called
store.subscribe(() => {
  console.log(store.getState());
});
////////////////////////////////////////////// Action Generators /////////////////////////////////////////////////////
/*Action Generators are Functions that return action objects
It will receive passed value from dispatch (i.e. incrememtCount Function as an object
Actually payload is an alias function for incrementCount and empty curly braces are used to set/handle
default value*/
// const incrementCount = (payload = {}) => ({
//   type: "INCREMENT",
//   incrementBy:
//     typeof payload.incrementBy === "number" ? payload.incrementBy : 1,
// });

//////////////////////////////////////////// Function Destructuring ////////////////////////////////////////////////
const incrementCount = ({ incrementBy = 1 /*default value*/ }) => ({
  type: "INCREMENT",
  incrementBy: incrementBy,
});

const decrementCount = ({ decrementBy = 1 /*default value*/ }) => ({
  type: "DECREMENT",
  decrementBy: decrementBy,
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});

const resetCount = () => ({
  type: "RESET",
});
//Here we are calling dispatch to change the value of count and passing incrementCount (Action Generator) as an object
store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 3 }));
store.dispatch(setCount({ count: 200 }));
store.dispatch(decrementCount({ decrementBy: 30 }));
store.dispatch(resetCount());

// //Dispatch is used to send an action to store in order to change the state of store
// store.dispatch({
//   //This is an example of action and capitalize is used as a convention
//   type: "INCREMENT",
//   incrementBy: 5,
// });
// store.dispatch({
//   type: "DECREMENT",
//   decrementBy: 10,
// });
// store.dispatch({
//   type: "RESET",
// });
// store.dispatch({
//   type: "DECREMENT",
// });
// store.dispatch({
//   type: "SET",
//   count: 101,
// });
