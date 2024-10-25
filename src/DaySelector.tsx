import React from 'react';
import Grid from '@mui/material/Grid2';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { DailyFrequency } from './service/service';

interface DaySelectorProps {
    initialDays: DailyFrequency;
    onDayChange: (updatedDays: DailyFrequency) => void;
}

const capitalize = (str: string) => str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

const DaySelector: React.FC<DaySelectorProps> = ({ initialDays, onDayChange }) => {
    const [days, setDays] = useState<DailyFrequency>(initialDays);

    const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        setDays((prevDays) => ({
            ...prevDays,
            [value]: checked,
        }));
        const newDays = { ...initialDays, [value]: checked }; // Fixed here
        onDayChange(newDays);
    };

    useEffect(() => {
        setDays(initialDays);
    }, [initialDays]);

    return (
        <div>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Select Days of the Week:
            </Typography>
            <Grid container spacing={2}>
                {Object.entries(days).map(([day, checked]) => (
                    <Grid size={{ xs: 6, sm: 4 }} key={day}>
                        <FormControlLabel
                            control={<Checkbox value={day} checked={!!checked} onChange={handleDayChange} />}
                            label={capitalize(day)}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default DaySelector;
