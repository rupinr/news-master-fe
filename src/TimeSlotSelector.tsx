import React from 'react';
import { useState, useEffect } from 'react'

import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import FormControlLabel from '@mui/material/FormControlLabel';


interface TimeSlotSelectorProps {

    initialTimeSlot: string
    onTimeSlotChange: (timeSlot: string) => void
}

const TimeSlotSelector: React.FC<TimeSlotSelectorProps> = ({ initialTimeSlot, onTimeSlotChange }) => {

    const handleTimeSlotChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTimeSlot(event.target.value)
        onTimeSlotChange(event.target.value)
    }


    const [timeSlot, setTimeSlot] = useState('Morning')

    useEffect(() => {
        setTimeSlot(initialTimeSlot);
    }, [initialTimeSlot]);

    function formatTimeRange(startTime: number, endTime: number): string {
        const userLocale = navigator.language || 'en-US';
        const options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', hour12: true };
        const startFormatted: string = new Intl.DateTimeFormat(userLocale, options).format(startTime);
        const endFormatted: string = new Intl.DateTimeFormat(userLocale, options).format(endTime);
        return `${startFormatted} - ${endFormatted}`;
    }

    const date: Date = new Date();
    const six = date.setHours(6, 0, 0, 0);
    const twelwe = date.setHours(12, 0, 0, 0);
    const eighteen = date.setHours(18, 0, 0, 0);
    const twenty = date.setHours(20, 0, 0, 0);
    const twentyThree = date.setHours(23, 0, 0, 0);

    return (
        <div>
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Select Time Slot:
            </Typography>
            <RadioGroup value={timeSlot} onChange={handleTimeSlotChange}>
                <FormControlLabel value="Morning" control={<Radio />} label={`Morning (${formatTimeRange(six, twelwe)})`} />
                <FormControlLabel value="Afternoon" control={<Radio />} label={`Afternoon (${formatTimeRange(twelwe, eighteen)})`} />
                <FormControlLabel value="Evening" control={<Radio />} label={`Evening (${formatTimeRange(eighteen, twenty)})`} />
                <FormControlLabel value="Night" control={<Radio />} label={`Night (${formatTimeRange(twenty, twentyThree)})`} />
            </RadioGroup>
        </div>
    );
};
export default TimeSlotSelector;