import React from "react";
import { shallow } from "enzyme";
import numeral from "numeral";
import { ExpenseSummary } from "../../components/ExpenseSummary";
import expenses from "./../fixtures/expenses";

let expenseCount, expenseTotal, wrapper;

beforeEach(() => {
  expenseCount = 3;
  expenseTotal = 120000;
  wrapper = shallow(
    <ExpenseSummary expenseCount={expenseCount} expenseTotal={expenseTotal} />
  );
});

test("Should render the Expense summary component with 1 expense", () => {
  wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={3000} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render the expense summary with multiple expenses", () => {
  expect(wrapper).toMatchSnapshot();
});
