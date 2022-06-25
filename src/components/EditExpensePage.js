import React from "react";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(expense.id, expense);
    this.props.history.push("/");
  };
  removeExpense = () => {
    const { removeExpense, expense } = this.props;
    removeExpense(expense.id);
    this.props.history.push("/");
  };
  render() {
    const { expense, match } = this.props;
    return (
      <div>
        <ExpenseForm expense={expense} onSubmit={this.onSubmit} />
        <button type="button" onClick={this.removeExpense}>
          Remove Expense
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((e) => e.id === props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (id) => dispatch(removeExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
