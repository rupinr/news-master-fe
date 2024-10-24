import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import { useSearchParams } from 'react-router-dom';
import { getSites, updatePreference, getSubscription, SubscriptionData, DailyFrequency, Site } from './service/service';
import DaySelector from './DaySelector';
import TimeSlotSelector from './TimeSlotSelector';
import SiteSelector, { Option } from './SiteSelector';
import { useNavigate } from 'react-router-dom'
import SaveIcon from '@mui/icons-material/Save';
import { UnknownErrorAlert, SuccessfullSaveAlert } from './Alerts'

export const ScheduleSelector = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('authToken');
    const [timeSlot, setTimeSlot] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [options, setOptions] = useState<Option[]>([]);
    const [defaultOptions, setDefaultOptions] = useState<Option[]>([]);
    const [selectedSites, setSelectedSites] = useState<Option[]>([]);
    const [daySelection, setDaySelection] = useState<DailyFrequency>({
        monday: true,
        tuesday: true,
        wednesday: true,
        thursday: true,
        friday: true,
        saturday: true,
        sunday: true
    });

    const handleDayChangeFor = (updatedDays: DailyFrequency) => {
        setDaySelection(updatedDays);
    };

    const navigate = useNavigate()


    const handleTimeSlotChangeFor = (updateTimeSlot: string) => {
        setTimeSlot(updateTimeSlot);
    };

    const handleSiteChange = (updatedSites: Option[]) => {
        setSelectedSites(updatedSites);
    };

    const fetchData = async () => {
        if (!token) return;
        sessionStorage.setItem('authToken', token);


        let allSites: Option[]
        getSites().then(response => {
            allSites = response.data.map((item: Site) => ({
                label: item.name,
                value: item.url
            }));
        }).then(() => {
            let existingSitePreference: Option[]
            getSubscription(token).then(response => {
                existingSitePreference = response.data.sites.map(item => ({
                    label: allSites.find((site: Option) => site.value === item)?.label!!,
                    value: item
                }));
                const filteredItems = allSites.filter(item =>
                    !existingSitePreference.some(toRemove =>
                        toRemove.label === item.label && toRemove.value === item.value
                    )
                );
                setOptions(filteredItems);
                setDefaultOptions(existingSitePreference);
                setSelectedSites(existingSitePreference);
                setDaySelection(response.data.subscriptionSchedule.dailyFrequency);
                setTimeSlot(response.data.subscriptionSchedule.timeSlot);
            })
        })
    };


    const handleCancelSubscription = async () => {
        console.log("Cancel susbtripiton")
    }

    useEffect(() => {
        if (token) {
            fetchData();
            searchParams.delete('authToken');
            navigate({
                search: searchParams.toString(),
            }, { replace: true });
        }
    }, [token, searchParams, navigate]);

    const handleSubmit = () => {

        const subscriptionData: SubscriptionData = {
            confirmed: true,
            sites: selectedSites!!.map((item) => item.value),
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
            }
        };


        updatePreference(subscriptionData, sessionStorage.getItem('authToken')!)
            .then(response => {
                if (response.success) {
                    setError(false)
                    setSuccess(true)
                } else {
                    setError(true)
                    setSuccess(false)
                }
            })
            .catch(error => console.error('Unexpected error:', error));
    };

    return (
        <div>
            {success ?
                <Box sx={{ my: 4 }}>
                    <SuccessfullSaveAlert />
                </Box>
                : <Container maxWidth="md">
                    <Box sx={{ my: 4 }}>
                        <Typography component="p" sx={{ mb: 2 }}>
                            To tailor your news experience, please select the days of the week and the preferred time slot for your email delivery. Whether you prefer a morning espresso to start your day, a noon latte to energize your afternoon, or an evening cappuccino to wind down, we've got you covered.
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
                        <Grid container spacing={2} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Button
                                endIcon={<SaveIcon />}
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                sx={{ mt: 2, width: { xs: '100%', sm: 'auto' } }}>
                                Save Preferences
                            </Button>
                        </Grid>
                    </Box>
                </Container>}
            {error && (
                <Box sx={{ my: 4 }}>
                    <UnknownErrorAlert />
                </Box>
            )}

        </div>
    );
};

export default ScheduleSelector;
