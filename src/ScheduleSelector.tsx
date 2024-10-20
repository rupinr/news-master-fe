import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { useSearchParams } from 'react-router-dom';
import { getSites, updatePreference, getSubscription } from './service/service';
import DaySelector from './DaySelector';
import TimeSlotSelector from './TimeSlotSelector';
import SiteSelector, { Option } from './SiteSelector';

const ScheduleSelector = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('authToken');
    const [timeSlot, setTimeSlot] = useState('');
    const [options, setOptions] = useState<Option[]>([]);
    const [defaultOptions, setDefaultOptions] = useState<Option[]>([]);
    const [selectedSites, setSelectedSites] = useState<Option[]>([]);
    const [daySelection, setDaySelection] = useState<{ [key: string]: boolean }>({
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
    });

    const handleDayChangeFor = (updatedDays: { [key: string]: boolean }) => {
        setDaySelection(updatedDays);
    };

    const handleTimeSlotChangeFor = (updateTimeSlot: string) => {
        setTimeSlot(updateTimeSlot);
    };

    const handleSiteChange = (updatedSites: Option[]) => {
        setSelectedSites(updatedSites);
    };

    const fetchData = async () => {
        if (!token) return;
        const subscription = await getSubscription(token);
        const existingSites: Option[] = subscription.sites.map((source: string) => ({
            label: source,
            value: source,
        }));
        const sites = await getSites();
        const options: Option[] = sites.map((item: { url: string }) => ({
            label: item.url,
            value: item.url
        }));
        setOptions(options);
        setDefaultOptions(existingSites);
        setSelectedSites(existingSites);
        setDaySelection(subscription.subscriptionSchedule.dailyFrequency);
        setTimeSlot(subscription.subscriptionSchedule.timeSlot);
    };

    useEffect(() => {
        fetchData();
    }, [token]);

    const handleSubmit = () => {
        const data = {
            confirmed: true,
            subscriptionSchedule: {
                dailyFrequency: { ...daySelection },
                timeSlot: timeSlot,
                timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            },
            sites: selectedSites.map((item) => item.value)
        };
        updatePreference(data, token!);
    };

    return (
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
                <Grid container spacing={2}>
                    <Stack spacing={3} sx={{ width: '100%', mt: 3 }}>
                        <SiteSelector options={options} defaultOptions={defaultOptions} onSiteChange={handleSiteChange} />
                    </Stack>
                </Grid>
                <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 4 }}>
                    Save Preferences
                </Button>
            </Box>
        </Container>
    );
};

export default ScheduleSelector;
