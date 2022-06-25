import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";
import { NavLink } from "react-router-dom";

export const ExpenseListItem = ({
  id,
  description,
  note,
  amount,
  createdAt,
  dispatch,
}) => {
  return (
    <li>
      <NavLink to={`/edit/${id}`}>
        <h3>{description} </h3>
      </NavLink>
      <label>
        {` $${amount} `}
        {`Created at: ${createdAt}`}
      </label>
      <br></br>
      <label>{note}</label>
      <button
        onClick={(e) => {
          dispatch(removeExpense(id));
        }}
      >
        X
      </button>
    </li>
  );
};

export default connect()(ExpenseListItem);
