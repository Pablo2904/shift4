import { render, fireEvent, screen } from "@testing-library/react";
import DateInput from "./dateInput";
import dayjs from "dayjs";

jest.useFakeTimers().setSystemTime(new Date("2024-02-02"));
describe("DateInput component", () => {
  it("updates selected month on previous and next button click", () => {
    const nextMonth = dayjs().add(1, "month").format("MMMM");
    const currentYear = dayjs().format("YYYY");

    const setTimeDataMock = jest.fn();
    render(<DateInput setTimeData={setTimeDataMock} />);

    const prevButton = screen.getByTestId("prev-button");
    const nextButton = screen.getByTestId("next-button");

    fireEvent.click(nextButton);
    expect(setTimeDataMock).toHaveBeenCalledWith(
      expect.objectContaining({ monthsDifference: 2 })
    );
    screen.getByText(dayjs().add(2, "month").format("MMMM"));
    screen.getByText(currentYear);

    fireEvent.click(prevButton);

    screen.getByText(nextMonth);
    screen.getByText(currentYear);
  });

  it("does not allow going to past months", () => {
    render(<DateInput setTimeData={() => {}} />);

    const prevButton = screen.getByTestId("prev-button");

    fireEvent.click(prevButton);
    const nextMonth = dayjs().add(1, "month").format("MMMM");
    screen.getByText(nextMonth);
  });

  it("renders default month correctly", () => {
    render(<DateInput setTimeData={() => {}} />);
    const nextMonth = dayjs().add(1, "month").format("MMMM");
    const currentYear = dayjs().format("YYYY");

    screen.getByText(nextMonth);
    screen.getByText(currentYear);
  });

  it("calls setTimeData on component mount", () => {
    const setTimeDataMock = jest.fn();
    render(<DateInput setTimeData={setTimeDataMock} />);

    expect(setTimeDataMock).toHaveBeenCalled();
  });
});
