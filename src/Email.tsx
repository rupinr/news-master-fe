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
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Welcome to Your Personal News Brew!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Stay informed with our curated newsletter service, bringing you the latest from both international and local news sources.
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Here are some of the sites we support:
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mb: 4 }}>
                    {sites.map((site, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                            <CheckCircleIcon sx={{ color: 'primary.main', mr: 1 }} />
                            <Typography>{site.name}</Typography>
                        </Box>
                    ))}
                </Box>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    And more are getting added every day!
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Provide your email to customize your news sources and delivery schedule.
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Your News, Your Schedule, Your Way.
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12 }}>
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
                            sx={{ width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
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
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Button variant="contained" disabled={!consent || !isEmailValid} startIcon={<SendIcon />} onClick={handleClick} fullWidth>
                            Send Email
                        </Button>
                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ my: 4 }}>
                {(maxAttemptError) ? <TooManyEmailSubmitAlert /> : null}
                {(generalError) ? <UnknownErrorAlert /> : null}
            </Box>
        </Container >
    )
}

export default Email
