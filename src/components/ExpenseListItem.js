import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import numeral from "numeral";
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
      <p>
        {numeral(amount / 100).format("$0,0.00")}-
        {moment(createdAt).format("MMMM Do, YYYY")}{" "}
      </p>
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
