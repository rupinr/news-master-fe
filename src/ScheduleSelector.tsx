import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import { useEffect } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { getSites, updatePreference, getSubscription } from './service/service'
import { useLocation, useSearchParams } from 'react-router-dom'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import DaySelector from './DaySelector';
import TimeSlotSelector from './TimeSlotSelector'

const ScheduleSelector = () => {

    const [searchParams] = useSearchParams()
    const token = searchParams.get('authToken')
    const [timeSlot, setTimeSlot] = useState('Monday')
    const [options, setOptions] = useState<{ label: string, value: string }[]>([])
    const [defaultOptions, setDefaultOptions] = useState<{ label: string, value: string }[]>([])
    const [daySelection, setDaySelection] = useState<{ [key: string]: boolean }>({
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
    })

    const [text, setText] = useState('');
    const [filteredOptions, setFilteredOptions] = useState<{ label: string, value: string }[]>([]);


    const handleDayChangeFor = (updatedDays: any) => {
        setDaySelection(updatedDays);
    };

    const handleTimeSlotChangeFor = (updateTimeSlot: any) => {
        console.log(updateTimeSlot)
        setTimeSlot(updateTimeSlot);
    };

    const fetchOptions = async () => {
        const data = await getSites()
        const destinations: any[] = data.map((source: any) => ({
            label: source.url,
            value: source.url,
        }));
        setOptions(destinations)
    }
    const fetchExistingData = async () => {
        const subscription = await getSubscription(token!!)
        let existingSites = []
        if (subscription.sites != null) {
            existingSites = subscription.sites.map((source: any) => ({
                label: source,
                value: source,
            }));
        }
        console.log(subscription)
        setDefaultOptions(existingSites)
        setDaySelection(subscription.subscriptionSchedule.dailyFrequency)
        setTimeSlot(subscription.subscriptionSchedule.timeSlot)
    }


    useEffect(() => {
        fetchExistingData()
        fetchOptions()
    }, [])


    const handleSites = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setText(value);
        setFilteredOptions(options.filter(option =>
            option.label.toLowerCase().includes(value.toLowerCase())
        ));
    };

    const handleSubmit = () => {
        const data = {
            subscriptionSchedule: {
                dailyFrequency: {
                    monday: daySelection['monday'],
                    tuesday: daySelection['tuesday'],
                    wednesday: daySelection['wednesday'],
                    thursday: daySelection['thursday'],
                    friday: daySelection['friday'],
                    saturday: daySelection['saturday'],
                    sunday: daySelection['sunday'],
                },
                timeSlot: timeSlot,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
            sites: options.map((item) => item.value)
        }
        updatePreference(data, token!!)
    }

    return (
        (
            <Container maxWidth="md">
                <Box sx={{ my: 4 }}>

                    <Typography component="p" sx={{ mb: 2 }}>
                        Thank you for subscribing! To tailor your news experience, please select the days of the week and the preferred time slot for your email delivery. Whether you prefer a morning digest to start your day, an afternoon update, or an evening recap, we’ve got you covered.
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Select Days of the Week:
                    </Typography>
                    <Grid container spacing={2}>
                        <DaySelector initialDays={daySelection} onDayChange={handleDayChangeFor} />
                    </Grid>
                    <Grid container spacing={2}>
                        <TimeSlotSelector initialTimeSlot={timeSlot} onTimeSlotChange={handleTimeSlotChangeFor} />
                    </Grid>
                    <Stack spacing={3} sx={{ width: '100%', mt: 3 }}>
                        <Autocomplete
                            multiple
                            id="tags-outlined"
                            options={options}
                            value={defaultOptions}
                            onChange={(event, newValue) => setDefaultOptions(newValue)}
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
            </Container>

        )
    )
};

export default ScheduleSelector
