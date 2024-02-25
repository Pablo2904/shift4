import { memo, useEffect, useState, Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";
import Typography from "../typography/typography";
import Button from "../button/button";
import { ReactComponent as ChevronLeft } from "../../assets/images/chevron_left.svg";
import "./dateInput.scss";

interface DateInputProps {
  setTimeData: Dispatch<
    SetStateAction<{
      monthsDifference: number;
      selectedMonth: string;
    }>
  >;
}

const DateInput = ({ setTimeData }: DateInputProps) => {
  const [selectedMonth, setSelectedMonth] = useState(
    dayjs().add(1, "month").startOf("month")
  );

  useEffect(() => {
    const monthsDifference = Math.ceil(
      selectedMonth.diff(dayjs(), "month", true)
    );
    setTimeData({
      monthsDifference,
      selectedMonth: selectedMonth.format("MMMM YYYY"),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedMonth]);

  const handlePrevMonth = () => {
    const newMonth = selectedMonth.subtract(1, "month");

    if (newMonth.isAfter(dayjs()) || newMonth.isSame(dayjs(), "day")) {
      setSelectedMonth(newMonth);
    }
  };

  const handleNextMonth = () => {
    setSelectedMonth(selectedMonth.add(1, "month"));
  };

  return (
    <div className="dateInput">
      <Button variant="image" onClick={handlePrevMonth} testId="prev-button">
        <ChevronLeft />
      </Button>
      <div className="dateInput__time">
        <Typography variant="date1">
          <time>{selectedMonth.format("MMMM")}</time>
        </Typography>

        <Typography variant="date2">
          <time>{selectedMonth.format("YYYY")}</time>
        </Typography>
      </div>
      <Button
        variant="image"
        onClick={handleNextMonth}
        className="dateInput__rightButton"
        testId="next-button"
      >
        <ChevronLeft />
      </Button>
    </div>
  );
};

export default memo(DateInput);
