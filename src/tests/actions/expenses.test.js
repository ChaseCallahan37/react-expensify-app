import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Should provide an object to be added to expenses", () => {
  const expense = {
    amount: 109500,
    description: "Rent",
    createdAt: 1000,
    note: "Paid monthly rent",
    id: expect.any(String),
  };
  const result = addExpense(expense);
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense,
  });
});

test("Should return a properly formatted empty expense object", () => {
  const result = addExpense();
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0,
    },
  });
});

test("Should provide an object for an expense to be deleted", () => {
  const id = "123abc";
  const result = removeExpense(id);
  expect(result).toEqual({
    type: "REMOVE_EXPENSE",
    id,
  });
});

test("Should provide an object to edit an expense", () => {
  const id = "123abc";
  const updates = { amount: 100 };
  const result = editExpense(id, updates);
  expect(result).toEqual({
    type: "EDIT_EXPENSE",
    id,
    updates,
  });
});
