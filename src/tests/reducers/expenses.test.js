import expenses from "../fixtures/expenses";
import expensesReducer from "../../reducers/expenses";
import moment from "moment";

test("Should set up empty array for expenses", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by Id", () => {
  const state = expensesReducer(expenses, {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  });
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense if Id not fount", () => {
  const state = expensesReducer(expenses, { type: "REMOVE_EXPENSE", id: -1 });
  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const newExpense = {
    id: "4",
    description: "Cat Food",
    note: "Bought a whole lot",
    amount: 120000,
    createdAt: moment(),
  };
  const state = expensesReducer(expenses, {
    type: "ADD_EXPENSE",
    expense: newExpense,
  });
  expect(state).toEqual([...expenses, newExpense]);
});

test("Should edit an expense", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount);
});

test("Should not edit expense if expense not found", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "37",
    updates: {
      amount,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
