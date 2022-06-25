import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import moment from "moment";
import AppRouter from "./routers/AppRouter";
import expenses from "./actions/expenses";
import configureStore from "./store/configureStore";
import "./styles/styles.css";
import "react-dates/lib/css/_datepicker.css";
import getVisibleExpenses from "./selectors/expenses";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Rent",
    note: "My great apartment",
    amount: 9000000000000000000000000,
    createdAt: 600,
  })
);

store.dispatch(
  addExpense({
    description: "Boat",
    note: "Boat that can go on the water",
    amount: 234000,
    createdAt: 200000,
  })
);

store.dispatch(
  addExpense({
    description: "Bike",
    note: "Bike that can go on road",
    amount: 160000,
    createdAt: 1600,
  }),
  store.dispatch(
    addExpense({
      description: "Fan",
      note: "nothin",
      amount: 1500,
      createdAt: moment(),
    })
  )
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
