import { createStore } from "redux";

const incrementBy = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementBy = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const setCountBy = (set) => ({
  type: "SET",
  set,
});

const resetCount = () => ({
  type: "RESET",
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "RESET":
      return { count: 0 };
    case "SET":
      return {
        count: action.set,
      };
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementBy({ incrementBy: 5 }));

store.dispatch(incrementBy());

store.dispatch({
  type: "RESET",
});

store.dispatch(decrementBy());

store.dispatch(decrementBy({ decrementBy: 123 }));

store.dispatch(setCountBy(-100000000));

store.dispatch(decrementBy());

store.dispatch(resetCount());
