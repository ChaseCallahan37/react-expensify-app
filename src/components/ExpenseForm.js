import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

const now = moment();

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    const { expense } = props;
    this.state = {
      description: expense ? expense.description : "",
      note: expense ? expense.note : "",
      amount: expense ? (expense.amount / 100).toString() : "",
      createdAt: expense ? moment(expense.createdAt) : moment(),
      calFocus: false,
      error: "",
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState({ description });
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState({ note });
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ amount });
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ createdAt });
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState({ calFocus: focused });
  };
  onSubmit = (e) => {
    const { description, amount, error, createdAt, note } = { ...this.state };
    e.preventDefault();
    if (!description || !amount) {
      return this.setState({
        error: "Please provide a description and amount!",
      });
    }
    this.setState({ error: "" });

    this.props.onSubmit({
      description,
      amount: parseFloat(amount, 10) * 100,
      createdAt: createdAt.valueOf(),
      note,
    });
  };
  render() {
    const { description, note, amount, createdAt, calFocus, error } =
      this.state;
    return (
      <div>
        {error && <h2>{error}</h2>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={description}
            onChange={this.onDescriptionChange}
          />
          <SingleDatePicker
            date={createdAt}
            onDateChange={this.onDateChange}
            focused={calFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <input
            type="text"
            placeholder="Amount"
            value={amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note"
            value={note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
