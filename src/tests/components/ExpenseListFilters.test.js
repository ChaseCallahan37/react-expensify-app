import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import filters from "../fixtures/filters";

let setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
  (setTextFilter = jest.fn()),
    (setStartDate = jest.fn()),
    (setEndDate = jest.fn()),
    (sortByDate = jest.fn()),
    (sortByAmount = jest.fn());
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters.def}
      setTextFilter={setTextFilter}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
    />
  );
});

test("Should render ExpenseListFilter", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseListFilter with alt filters", () => {
  wrapper.setProps({ filters: filters.alt });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  wrapper
    .find("input")
    .simulate("change", { target: { value: filters.alt.text } });
  expect(setTextFilter).toHaveBeenLastCalledWith(filters.alt.text);
});

test("should sort by date", () => {
  wrapper.setProps({ filters: filters.alt });
  wrapper.find("select").simulate("change", { target: { value: "date" } });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  wrapper.find("select").simulate("change", { target: { value: "amount" } });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  wrapper.find("DateRangePicker").prop("onDatesChange")(filters.alt);
  expect(setStartDate).toHaveBeenLastCalledWith(filters.alt.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(filters.alt.endDate);
});

test("should handle date focus changes", () => {
  const calFocus = "startDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calFocus);
  expect(wrapper.state("calendarFocused")).toBe(calFocus);
});
