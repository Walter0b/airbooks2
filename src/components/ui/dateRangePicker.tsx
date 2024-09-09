import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateRangePicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    return (
        <div className="flex justify-end space-x-4">
            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date!)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="px-4 py-2 border border-gray-300 rounded-lg"
            />
            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date!)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="px-4 py-2 border border-gray-300 rounded-lg"
            />
        </div>
    );
};

export default DateRangePicker;
