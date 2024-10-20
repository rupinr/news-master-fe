import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export const Congratulations = () => {


    return (
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
                <Typography component="h1" sx={{ mb: 2 }}>
                    Congratulations on subscribing to our newsletter! 🎉

                    Your personalized news journey starts here. Keep an eye on your inbox for future updates and enjoy staying informed with content tailored just for you. Welcome aboard! 🚀
                </Typography>
            </Box>
        </Container>
    )
}
