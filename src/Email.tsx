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
import { useEffect } from 'react';
import { getTopSites } from './service/service';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PublicIcon from '@mui/icons-material/Public';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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


    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        handleEmail(event.target.value)
        event.preventDefault();
    }

    const handlePaste: React.ClipboardEventHandler<HTMLDivElement> = (event) => {
        handleEmail(event.clipboardData.getData("text/plain"))
        event.preventDefault();
    }

    const handleEmail = (email: string) => {
        setEmail(email)
        setIsEmailValid(emailRegex.test(email));
    }

    useEffect(() => {
        getTopSites().then(response => {
            setSites(response.data!)
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
                    sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                    Your Personal News Brew!
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    QuickBrew.News is your personalized news subscription service. We deliver the latest news directly to your inbox, tailored to your interests and schedule. Stay informed without the noise and make sure you never miss out on what's important to you.
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                    Here's how it works:
                </Typography>
                <List sx={{ textAlign: 'left', mx: 'auto', maxWidth: 'sm' }}>
                    <ListItem>
                        <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                            <ArrowForwardIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={<span><strong>Enter</strong> your email to sign up</span>} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                            <ArrowForwardIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={<span><strong>Activate</strong> your subscription by clicking the link in the email</span>} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                            <ArrowForwardIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={<span><strong>Customize</strong> your delivery preferences and news sources</span>} />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                            <ArrowForwardIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={<span><strong>Choose</strong> from a variety of sources including:</span>} />
                    </ListItem>
                    <ListItem>
                        <List sx={{ p: 0, pl: 4 }}> {sites.map((site, index) => (<ListItem key={index} sx={{ display: 'flex', alignItems: 'center', pl: 0 }}>
                            <ListItemIcon sx={{ minWidth: 'auto', mr: 1 }}>
                                <PublicIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={site.name} />
                        </ListItem>))}
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                                And more are being added frequently!
                            </Typography>
                        </List>
                    </ListItem>

                </List>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'primary.main', mt: 3 }}>
                    Get Started!
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12 }} >
                        <TextField
                            autoComplete="email"
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
                            onPaste={handlePaste}
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
            </Box>
            <Box sx={{ my: 4 }}>
                {maxAttemptError && <TooManyEmailSubmitAlert />}
                {generalError && <UnknownErrorAlert />}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Your News, Your Schedule, Your Way.
                </Typography>
            </Box>
        </Container>
    )
}

export default Email
