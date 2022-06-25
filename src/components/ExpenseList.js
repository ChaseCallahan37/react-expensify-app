import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectedExpenses from "../selectors/expenses";

export const ExpenseList = (props) => {
  const { expenses } = props;
  return (
    <div>
      <h1>Expense List</h1>
      {expenses.length === 0 ? (
        <p>There are no Expenses</p>
      ) : (
        <ul>
          {expenses.map((e) => {
            return <ExpenseListItem key={e.id} {...e} />;
          })}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = ({ expenses, filters }) => {
  return {
    expenses: selectedExpenses(expenses, filters),
  };
};

export default connect(mapStateToProps)(ExpenseList);
