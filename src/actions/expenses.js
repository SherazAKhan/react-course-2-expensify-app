import { v4 as uuidv4 } from "uuid";
export const addExpense = ({
  //Default Values
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  expense: {
    id,
  },
});

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  expense: {
    id,
    updates,
  },
});
