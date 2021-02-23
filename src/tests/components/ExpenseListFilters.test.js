import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters.jsx";
import { filters, altFilters } from "../fixtures/filters.js";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test("Should render ExpenseListFilters currectly", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseListFilters with alt data currectly", () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test("Should handle text change", () => {
    const value = "Some text";
    wrapper.find("input").prop("onChange")({ target: { value } });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("Should sort by date", () => {
    wrapper.setProps({ filters: altFilters });
    wrapper.find("select").simulate("change", { target: { value: "date" } });
    expect(sortByDate).toHaveBeenCalled();
});

test("Should sort by amount", () => {
    wrapper.find("select").simulate("change", { target: { value: "amount" } });
    expect(sortByAmount).toHaveBeenCalled();
});

test("Sould handle date changes", () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3, "days");
    wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({
        startDate,
        endDate,
    });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test("Should handle date focus changes", () => {
    const calendarFocused = "endDate";
    wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(
        calendarFocused
    );
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused);
});
