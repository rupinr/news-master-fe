import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { createUser, Site } from './service/service'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import SendIcon from '@mui/icons-material/Send';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useEffect } from 'react';
import { getTopSites } from './service/service';
import Chip from '@mui/material/Chip';


import { TooManyEmailSubmitAlert, UnknownErrorAlert } from './Alerts';

const Email = () => {
    const [email, setEmail] = useState('')
    const [sites, setSites] = useState<Site[]>([])
    const [isEmailValid, setIsEmailValid] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [maxAttemptError, setMaxAttemptError] = useState(false)
    const [generalError, setGeneralError] = useState(false)
    const [consent, setConsent] = useState(false)

    const navigate = useNavigate()


    const handleChange = (event: any) => {
        setEmail(event.target.value)
        setIsEmailValid(emailRegex.test(event.target.value));
    }


    useEffect(() => {
        getTopSites().then(response => {
            setSites(response.data)
        })
    }, []);


    const handleClick = () => {
        if (isEmailValid) {
            createUser({ "email": email })
                .then(response => {
                    if (response.success) {
                        navigate('check-your-email')
                    } else if (response.status == 429) {
                        setMaxAttemptError(true)
                    } else {
                        console.log(response.status)
                        setGeneralError(true)
                    }
                })
                .catch(error => console.error('Unexpected error:', error));
        }
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: 'bold', textAlign: 'center' }}
                >
                    Your Personal News Brew!
                </Typography>

                <Typography variant="body1" sx={{ mb: 3 }}>
                    Receive the latest news directly in your inbox, customized to your interests and schedule.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    <ul>
                        <li>
                            <strong>Register with Us:</strong> Sign up in seconds to start building your personalized news feed.
                        </li>
                        <li>
                            <strong>Confirm Your Email:</strong> Verify your email to start receiving the updates you care about.
                        </li>
                        <li>
                            <strong>Pick Your Sources & Schedule:</strong> Choose from trusted sources and decide when you’d like your updates to arrive.
                            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2, mb: 2 }}>
                                {sites.map((site, index) => (
                                    <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Typography>{site.name}</Typography>
                                    </Box>
                                ))}
                            </Box>
                            <Typography variant="body1" sx={{ mb: 3 }}>
                                <span style={{ fontWeight: 'bold', color: 'primary.main' }}>And more are being added every day!</span>
                            </Typography>
                        </li>
                        <li>
                            <strong>Voila!</strong> Stay informed without the noise—your custom news digest, delivered right when you need it.
                        </li>
                    </ul>
                </Typography>

                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12 }} >
                        <TextField
                            autoComplete="email"
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="email"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={email}
                            onChange={handleChange}
                            onPaste={handleChange}
                            sx={{
                                borderRadius: '4px'
                            }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }} >
                        <FormControlLabel sx={{ width: '100%' }}
                            control={
                                <Checkbox
                                    checked={consent}
                                    onChange={() => setConsent(!consent)}
                                    name="consent"
                                />
                            }
                            label={
                                <Typography variant="body2" sx={{ width: '100%' }}>
                                    I confirm this is my email and consent to receive emails from QuickBrewNews.
                                </Typography>
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 4.8, sm: 3 }} sx={{ marginLeft: 'auto', display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' }, alignItems: 'flex-end' }}>
                        <Button variant="contained" disabled={!consent || !isEmailValid} startIcon={<SendIcon />} onClick={handleClick} fullWidth>
                            Send Email
                        </Button>
                    </Grid>
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Your News, Your Schedule, Your Way.
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ my: 4 }}>
                {maxAttemptError && <TooManyEmailSubmitAlert />}
                {generalError && <UnknownErrorAlert />}
            </Box>
        </Container>
    )
}

export default Email
