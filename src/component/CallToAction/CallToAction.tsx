import { Box, Typography, Button, Stack } from '@mui/material';
import { containerStyle, descriptionStyle } from '../../styles/CallToAction/CallToAction.styles';

const CallToAction = () => {
  return (
    <Box sx={(theme) => containerStyle(theme)}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4" fontWeight="bold">
          Start your order
        </Typography>
        <Typography variant="body1" sx={(theme) => descriptionStyle(theme)}>
          Get your favorites fast—hot or iced, made just how you like. Order ahead for pickup or delivery, right from your phone.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mt={2}>
          <Button variant="contained" color="primary" size="large">
            Order Now
          </Button>
          <Button variant="outlined" color="primary" size="large">
            Sign In
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CallToAction;
