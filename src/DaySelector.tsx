import React from 'react';
import Grid from '@mui/material/Grid2';
import { useState } from 'react'

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


interface DaySelectorProps {
    initialDays: { [key: string]: boolean };
}

interface DaySelectorProps {
    initialDays: { [key: string]: boolean };
}

const DaySelector: React.FC<DaySelectorProps> = ({ initialDays }) => {
    const [days, setDays] = useState(initialDays);

    const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setDays((prevDays) => ({
            ...prevDays,
            [value]: checked,
        }));
    };

    return (
        <div>
            <Grid container spacing={2}>
                {Object.entries(days).map(([day, checked]) => (
                    <Grid size={{ xs: 6, sm: 4 }} key={day}>
                        <FormControlLabel
                            control={<Checkbox value={day} checked={checked} onChange={handleDayChange} />}
                            label={day.toUpperCase()}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};
export default DaySelector;