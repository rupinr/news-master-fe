import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
const Confirmation = () => {


    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    Thank you for subscribing! 🎉 Please check your email and click on the confirmation link to complete your subscription. This way, you'll start receiving personalized updates from your favorite news sources. Your journey to staying informed starts here! 📧✨
                </Typography>
            </Box>
        </Container>
    )
}

export default Confirmation
