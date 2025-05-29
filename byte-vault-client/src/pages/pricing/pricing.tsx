import { Box, Typography } from "@mui/material";

export const PricingSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h6">
        Choose from the available subscriptions
      </Typography>
      <Typography variant="h2" mb={1} fontWeight={500}>
        Standard subcriptions ( 10$ / month)
      </Typography>
      <Typography variant="h5" mb={3}>
        You have up to 20gb of memory secured with the safest encryption method.
      </Typography>
    </Box>
  );
};
