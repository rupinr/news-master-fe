import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { createUser } from './service/service'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


import { SuccessfullEmailSubmitAlert, TooManyEmailSubmitAlert, UnknownErrorAlert } from './Alerts';

const Email = () => {
    const [email, setEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const [maxAttemptError, setMaxAttemptError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [generalError, setGeneralError] = useState(false)
    const [consent, setConsent] = useState(false)


    const handleChange = (event: any) => {
        setEmail(event.target.value)
        setIsEmailValid(emailRegex.test(event.target.value));
    }



    const handleClick = () => {
        if (isEmailValid) {
            createUser({ "email": email })
                .then(response => {
                    if (response.success) {
                        setSuccess(true)
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
            {(!success) ? <Box sx={{ my: 4 }}>
                <Typography component="div" variant="body1" sx={{ mb: 2 }}>
                    Welcome to your ultimate news hub! Dive into a world of information with our personalized newsletter service, crafted just for you.
                </Typography>
                <Typography component="div" variant="body1" sx={{ mb: 2 }}>
                    Enter your email address to start a subscription or update your subscription preferences. Receive daily updates from your favorite news websites, all curated to match your schedule.
                </Typography>
                <Typography component="div" variant="body1" sx={{ mb: 2 }}>
                    Your news, your way, every day.
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, sm: 8 }}>
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
                            variant="standard"
                            value={email}
                            onChange={handleChange}
                            onPaste={handleChange}
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
                                    I agree that this is my own email address and I consent to receive emails from QuickBrewNews.
                                </Typography>
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Button variant="contained" disabled={!consent || !isEmailValid} endIcon={<MailOutlineIcon />} onClick={handleClick} fullWidth>
                            Subscribe
                        </Button>
                    </Grid>

                </Grid>
            </Box> : null}

            <Box sx={{ my: 4 }}>
                {success ? <SuccessfullEmailSubmitAlert /> : null}
                {(maxAttemptError && !success) ? <TooManyEmailSubmitAlert /> : null}
                {(generalError && !success) ? <UnknownErrorAlert /> : null}
            </Box>
        </Container >
    )
}

export default Email
