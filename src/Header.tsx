import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar sx={{ minHeight: 50 }}  >
                <Link href="/#" underline="none">
                    <Typography variant="h6">
                        QuickBrewNews
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
