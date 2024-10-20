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

    return (
        <div>
            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Select Time Slot:
            </Typography>
            <RadioGroup value={timeSlot} onChange={handleTimeSlotChange}>
                <FormControlLabel value="Morning" control={<Radio />} label="Morning" />
                <FormControlLabel value="Afternoon" control={<Radio />} label="Afternoon" />
                <FormControlLabel value="Evening" control={<Radio />} label="Evening" />
            </RadioGroup>
        </div>
    );
};
export default TimeSlotSelector;