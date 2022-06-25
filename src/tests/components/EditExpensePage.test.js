import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import { EditExpensePage } from "../../components/EditExpensePage";

let wrapper, editExpense, removeExpense, match, history, id;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
      expense={expenses[1]}
    />
  );
});

test("Should render EditExpensePage", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should properly handle edit expense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
});

test("Should handle remove expense function", () => {
  wrapper.find("button").prop("onClick")();
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[1].id);
  expect(history.push).toHaveBeenLastCalledWith("/");
});
