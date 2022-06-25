import { createStore, combineReducers } from "redux";
import uuid from "uuid";
import Contact from "./../../../portfolio-site/src/components/Contact";

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => {
  return {
    type: "ADD_EXPENSE",
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt,
    },
  };
};

const removeExpense = ({ id }) => {
  return {
    type: "REMOVE_EXPENSE",
    id,
  };
};

const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

//Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(({ id }) => {
        return id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (action.id === expense.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filterReducerDefaultState = {
  text: "",
  sortBy: "date", //Or by amount
  startBy: undefined,
  endDate: undefined,
};

const setTextFilter = (text = "") => {
  return {
    type: "SET_TEXT_FILTER",
    text,
  };
};

const sortByAmount = () => {
  return {
    type: "SORT_BY_AMOUNT",
    sortBy: "amount",
  };
};

const sortByDate = () => {
  return {
    type: "SORT_BY_DATE",
    sortBy: "date",
  };
};

const setStartDate = (startBy = null) => {
  return {
    type: "SET_START_DATE",
    startBy,
  };
};

const setEndDate = (endDate = null) => {
  return {
    type: "SET_END_DATE",
    endDate,
  };
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: action.sortBy };
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.sortBy };
    case "SET_START_DATE":
      return { ...state, startBy: action.startBy };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
);

const demoState = {
  expenses: [
    {
      id: "djfdfs",
      description: "Paid for rent",
      note: "Last rent for this account",
      amount: 54000,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //or date
    startDate: null,
    endDate: null,
  },
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expense1 = store.dispatch(
  addExpense({ description: "Rent", amount: 10000, createdAt: 1 })
);

const expense2 = store.dispatch(
  addExpense({ description: "Cofee", amount: 300, createdAt: 2 })
);

store.dispatch(
  addExpense({
    description: "Bike",
    note: "Got a new bike",
    amount: 12220000000,
    createdAt: 4370000,
  })
);

store.dispatch(
  addExpense({
    description: "Cat Food",
    note: "Bought the cats alot of food",
    amount: 10000000,
    createdAt: 1000,
  })
);

// console.log("BREAK");

// store.dispatch(removeExpense({ id: expense1.expense.id }));

// store.dispatch(editExpense(expense2.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("Rent"));

// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));
store.dispatch(sortByAmount());
