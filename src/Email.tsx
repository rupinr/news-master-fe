import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { updateData } from './service/service'
import { useNavigate } from 'react-router-dom'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';

const Email = () => {
    const [text, setText] = useState('')
    const navigate = useNavigate()


    const handleChange = (event: any) => {
        setText(event.target.value)
    }

    const handleClick = () => {
        updateData({
            "email": text
        })
        navigate('/confirmation')
    }

    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography component="p" sx={{ mb: 2 }}>
                    Welcome to your ultimate news hub! Dive into a world of information with our personalized newsletter service, crafted just for you. Subscribe to receive daily updates from your favorite news websites, all curated to match your interests and schedule. Whether it's breaking news, in-depth analysis, or light-hearted features, customize your delivery to stay informed in the way that suits you best. Your news, your way, every day.
                </Typography>
                <Grid container spacing={2} alignItems="center">
                    <Grid size={{ xs: 12, sm: 6 }}>
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
                            value={text}
                            onChange={handleChange}

                        />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick} fullWidth>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
}

export default Email
