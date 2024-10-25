import { Container, Typography, Box } from '@mui/material';

const About = () => {
    return (
        <Container maxWidth="md">
            <Box sx={{ my: 4 }}>
                <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                    About Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Welcome to QuickBrewNews! We’re passionate about delivering fresh and personalized news updates directly to your inbox. Our goal is to keep you informed and engaged with the latest happenings around the world, tailored to your interests and preferences.
                </Typography>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Our Mission
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    At QuickBrewNews, our mission is to provide a daily dose of insightful, relevant, and captivating news. We believe in the power of information and its ability to connect and empower individuals. Our dedicated team works tirelessly to curate content that matters to you.
                </Typography>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Our Team
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Our team is composed of experienced journalists, editors, and technology enthusiasts who share a common passion for news and innovation. Together, we strive to deliver a seamless and enriching news experience.
                </Typography>
                <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                    Join Us
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                    Stay updated with QuickBrewNews and join our community of informed readers. Subscribe to our newsletter and follow us on social media to never miss out on the latest news and updates.
                </Typography>
            </Box>
        </Container>
    );
};

export default About;
