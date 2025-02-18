import React, { useState, useEffect, forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Box, IconButton, Typography } from '@mui/material';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import dayjs from 'dayjs';
import styles from '../styles/DatePickerComponent.module.css';

// Custom button component that replaces the TextField with the "Selecteer datum..." text
const DateButtonComponent = forwardRef<HTMLButtonElement, any>((props, ref) => (
  <button
    {...props}
    ref={ref}
    className={`${styles.option} ${props.value ? styles.selected : ''}`} // Voeg de 'option' klasse toe en de 'selected' klasse als er een datum is geselecteerd
    style={{
      width: '300px',
      padding: '10px',
      backgroundColor: 'transparent',
      border: '1px solid #ccc',
      borderRadius: '4px',
      textAlign: 'center',
      cursor: 'pointer',
      fontSize: '14px',
    }}
  >
    {props.value ? props.value : 'Selecteer datum...'}
  </button>
));

// Custom header component for the calendar
const CustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
}: any) => {
  const months = ["JAN", "FEB", "MAR", "APR", "MEI", "JUN", "JUL", "AUG", "SEP", "OKT", "NOV", "DEC"];
  const years = Array.from({ length: new Date().getFullYear() - 1989 + 1 }, (_, i) => (i + 1990).toString());

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
      <IconButton onClick={decreaseMonth}>
        <ChevronLeftOutlinedIcon />
      </IconButton>
      <Typography variant="body2" fontWeight="bold">
        {dayjs(date).format('MMMM YYYY')}
      </Typography>
      <IconButton onClick={increaseMonth}>
        <ChevronRightOutlinedIcon />
      </IconButton>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        <select
          value={months[date.getMonth()]}
          onChange={(e) => changeMonth(months.indexOf(e.target.value))}
        >
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          value={date.getFullYear().toString()}
          onChange={(e) => changeYear(parseInt(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </Box>
    </Box>
  );
};

// Main DatePicker component
const DatePickerComponent: React.FC<any> = ({ startDate, endDate, onChange, onClose }) => {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([startDate ?? null, endDate ?? null]);

  useEffect(() => {
    setDateRange([startDate ?? null, endDate ?? null]);
  }, [startDate, endDate]);

  return (
    <DatePicker
      selectsRange
      startDate={dateRange[0]}
      endDate={dateRange[1]}
      onChange={(update: [Date | null, Date | null]) => {
        setDateRange(update);
        if (onChange) {
          onChange(update);
        }
      }}
      calendarStartDay={1}
      customInput={<DateButtonComponent value={dateRange[0] ? `${dateRange[0].toLocaleDateString()} - ${dateRange[1]?.toLocaleDateString()}` : ''} />}
      renderCustomHeader={(props) => (
        <CustomHeader
          date={props.date}
          changeYear={props.changeYear}
          changeMonth={props.changeMonth}
          decreaseMonth={props.decreaseMonth}
          increaseMonth={props.increaseMonth}
        />
      )}
      onCalendarClose={onClose} // Close the calendar when it is not needed
    />
  );
};

export default DatePickerComponent;
