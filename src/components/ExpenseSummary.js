import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import getExpenseTotal from "../selectors/expense-total";
import expenseSelector from "../selectors/expenses";

export const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const total = numeral(expenseTotal).format("$0,0.00");
  const expenseWording = expenseCount.length === 1 ? "expense" : "expenses";
  return (
    <div>
      <h1>
        There are {expenseCount} {expenseWording} totaling: {total}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const filteredExp = expenseSelector(state.expenses, state.filters);
  return {
    expenseCount: filteredExp.length,
    expenseTotal: getExpenseTotal(filteredExp) / 100,
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
