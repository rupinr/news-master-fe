import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { updateData } from './service/service'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

const Email = () => {
    const [email, setEmail] = useState('')
    const [isEmailValid, setIsEmailValid] = useState(false);
    const navigate = useNavigate()


    const handleChange = (event: any) => {
        setEmail(event.target.value)

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(email));
    }

    const handleClick = () => {
        if (isEmailValid) {
            updateData({
                "email": email
            })
            navigate('/thank-you')
        }
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography component="h1" sx={{ mb: 2 }}>
                    Welcome to your ultimate news hub! Dive into a world of information with our personalized newsletter service, crafted just for you. Subscribe to receive daily updates from your favorite news websites, all curated to match your interests and schedule. Whether it's breaking news, in-depth analysis, or light-hearted features, customize your delivery to stay informed in the way that suits you best. Your news, your way, every day.
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, sm: 8 }}>
                        <TextField
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

                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 4 }}>
                        <Button variant="contained" disabled={!isEmailValid} endIcon={<SubscriptionsIcon />} onClick={handleClick} fullWidth>
                            Subscribe
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
}

export default Email
