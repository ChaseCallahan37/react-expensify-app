import getExpenseTotal from "../../selectors/expense-total";
import expenses from "../fixtures/expenses";

test("Should return 0 if no expenses given", () => {
  expect(getExpenseTotal()).toBe(0);
});

test("Should provide a total for multiple expenses", () => {
  const total = 2000600;
  expect(getExpenseTotal(expenses)).toBe(total);
});

test("Should provide a total for a singel expense", () => {
  expect(getExpenseTotal(expenses[0])).toBe(2000000);
});
