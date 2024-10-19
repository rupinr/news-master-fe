import React from 'react';
import Grid from '@mui/material/Grid2';
import { useState } from 'react'
import { useEffect } from 'react'

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


interface DaySelectorProps {
    initialDays: { [key: string]: boolean };
    onDayChange: (updatedDays: { [key: string]: boolean }) => void;
}

const capitalize = (str: string) => str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());


const DaySelector: React.FC<DaySelectorProps> = ({ initialDays, onDayChange }) => {

    const [days, setDays] = useState(initialDays);

    const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setDays((prevDays) => ({
            ...prevDays,
            [value]: checked,
        }));
        const newDays = { ...initialDays, [value]: !initialDays[value] };
        onDayChange(newDays);
    };

    useEffect(() => {
        setDays(initialDays);
    }, [initialDays]);


    return (
        <div>
            <Grid container spacing={2}>
                {Object.entries(days).map(([day, checked]) => (
                    <Grid size={{ xs: 6, sm: 4 }} key={day}>
                        <FormControlLabel
                            control={<Checkbox value={day} checked={checked} onChange={handleDayChange} />}
                            label={capitalize(day)}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
export default DaySelector;