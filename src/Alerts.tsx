import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Typography from '@mui/material/Typography';

export function SuccessfullEmailSubmitAlert() {
    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            <Typography component="h1" sx={{ mb: 2 }}>
                Thank you for subscribing! Check your email and click the confirmation link to complete your subscription. Your personalized news updates await!
            </Typography>
        </Alert>
    );
}

export function SuccessfullSaveAlert() {
    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            <Typography component="h1" sx={{ mb: 2 }}>
                Thank you for subscribing!
                You'll soon start receiving personalized updates based on your selected schedule. Your journey to staying informed starts here!            </Typography>
        </Alert>
    );
}


export function TooManyEmailSubmitAlert() {
    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
            <Typography component="h1" sx={{ mb: 2 }}>
                Oops! It looks like you've tried to create a subscription too many times without confirming it. Please check your email and click on the confirmation link to complete the process. Thanks for understanding!
            </Typography>
        </Alert>
    );
}

export function UnknownErrorAlert() {
    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
            <Typography component="h1" sx={{ mb: 2 }}>
                Uh-oh! An unknown error occurred. Please try again. We apologize for any inconvenience caused.
            </Typography>
        </Alert>
    );
}


export function SuccessfullEmailConfirmation() {
    return (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
            <Typography component="h1" sx={{ mb: 2 }}>
                Congrats! Your personalized news journey starts here. Watch your inbox for updates. Welcome aboard!
            </Typography>
        </Alert>
    );
}