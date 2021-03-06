import moment from "moment";
import expenseSelector from "../../selectors/expenses";
import expenses from "./../fixtures/expenses";

test("Should filter by text value", () => {
  const filters = {
    text: "u",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = expenseSelector(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[2]]);
});

test("Should sort by startDate", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = expenseSelector(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

test("Should filter by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0),
  };
  expect(expenseSelector(expenses, filters)).toEqual([
    expenses[0],
    expenses[2],
  ]);
});

test("should sort by date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  expect(expenseSelector(expenses, filters)).toEqual([
    expenses[1],
    expenses[0],
    expenses[2],
  ]);
});

test("Shoutl sort by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  expect(expenseSelector(expenses, filters)).toEqual([
    expenses[0],
    expenses[2],
    expenses[1],
  ]);
});
