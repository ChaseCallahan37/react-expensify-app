import moment from "moment";
import filterReducer from "../../reducers/filters";

test("Should setup default filter value", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("Should set text filter", () => {
  const text = "CATS!!";
  const state = filterReducer(undefined, { type: "SET_TEXT_FILTER", text });
  expect(state.text).toBe(text);
});

test("should set startDate filter", () => {
  const startDate = moment(10000);
  const state = filterReducer(undefined, { type: "SET_START_DATE", startDate });
  expect(state.startDate).toBe(startDate);
});

test("should set endDate filter", () => {
  const endDate = moment(10000);
  const state = filterReducer(undefined, { type: "SET_END_DATE", endDate });
  expect(state.endDate).toBe(endDate);
});
