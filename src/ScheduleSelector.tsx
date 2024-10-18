import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { getSites, updatePreference } from './service/service'
import { useLocation, useSearchParams } from 'react-router-dom'


const ScheduleSelector = () => {

    const defaultDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const [days, setDays] = useState<string[]>(defaultDays)
    const [timeSlot, setTimeSlot] = useState('Morning')
    const [options, setOptions] = useState<{ label: string, value: string }[]>([])
    const [text, setText] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<{ label: string, value: string }[]>([]);
    const [searchParams] = useSearchParams()
    const token = searchParams.get('authToken')

    useEffect(() => {
        const fetchOptions = async () => {
            const data = await getSites()
            const destinations: any[] = data.map((source: any) => ({
                label: source.url,
                value: source.url,
            }));
            setOptions(destinations)
        }
        fetchOptions()
    }, [])

    const handleSites = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setText(value);
        setFilteredOptions(options.filter(option =>
            option.label.toLowerCase().includes(value.toLowerCase())
        ));
    };


    const handleDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setDays((prevDays) =>
            prevDays.includes(value)
                ? prevDays.filter((day) => day !== value)
                : [...prevDays, value]
        )
    }
    const handleTimeSlotChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTimeSlot(event.target.value)
    }

    const handleSubmit = () => {

        const subscriptionSchedule = {
            dailyFrequency: {
                monday: days.includes('Monday'),
                tuesday: days.includes('Tuesday'),
                wednesday: days.includes('Wednesday'),
                thursday: days.includes('Thursday'),
                friday: days.includes('Friday'),
                saturday: days.includes('Saturday'),
                sunday: days.includes('Sunday'),
            },
        }

        const data = {
            subscriptionSchedule: {
                dailyFrequency: {
                    monday: days.includes('Monday'),
                    tuesday: days.includes('Tuesday'),
                    wednesday: days.includes('Wednesday'),
                    thursday: days.includes('Thursday'),
                    friday: days.includes('Friday'),
                    saturday: days.includes('Saturday'),
                    sunday: days.includes('Sunday'),
                },
                timeSlot: timeSlot,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },


            sites: options.map((item) => item.value)
        }
        console.log('Selected Days:', data)
        updatePreference(data, token!!)
        // You can send this data to your backend here
    }

    return (
        <Box>
            <Typography>Thank you for subscribing!

                To tailor your news experience, please select the days of the week and the preferred time slot for your email delivery. Whether you prefer a morning digest to start your day, an afternoon update, or an evening recap, we’ve got you covered.</Typography>

            <Typography variant="h6" sx={{ mb: 2 }}>
                Select Days of the Week:
            </Typography>
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                <FormControlLabel
                    key={day}
                    control={<Checkbox value={day} checked={days.includes(day)} onChange={handleDayChange} />}
                    label={day}
                />
            ))}

            <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
                Select Time Slot:
            </Typography>
            <RadioGroup value={timeSlot} onChange={handleTimeSlotChange}>
                <FormControlLabel value="Morning" control={<Radio />} label="Morning" />
                <FormControlLabel value="Afternoon" control={<Radio />} label="Afternoon" />
                <FormControlLabel value="Evening" control={<Radio />} label="Evening" />
            </RadioGroup>
            <Stack spacing={3} sx={{ width: 500 }}>

                <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={options}
                    getOptionLabel={(option) => option.label}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Sites"
                            placeholder="Sites"
                            onChange={handleSites}
                        />
                    )}
                />


            </Stack>
            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 4 }}>
                Save Preferences
            </Button>
        </Box>

    )
}

export default ScheduleSelector
