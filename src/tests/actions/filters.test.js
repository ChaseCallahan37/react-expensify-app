import moment from "moment";
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("Should generate setStartDate object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("Should generate setEndDate object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("Returns an object to set the text on the filter", () => {
  const text = "cats";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text,
  });
});

test("Returns an object to set the text on the filter with default values", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});

test("Generates an object to update the sortBy filter to amount", () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount",
  });
});

test("Generates an object to update the sortBy filter to date", () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: "SORT_BY_DATE",
    sortBy: "date",
  });
});
