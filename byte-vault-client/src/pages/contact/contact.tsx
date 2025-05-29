import { Box, TextField, Typography } from "@mui/material";

export const ContactSection: React.FC = () => {
  return (
    <Box py={4}>
      <Typography variant="h4">Contact us</Typography>
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
  );
};
