import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton,
  Link,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from '@mui/icons-material/X';

export const ContactSection: React.FC = () => {
  return (
    <Box
      py={8}
      px={2}
      maxWidth="600px"
      mx="auto"
      textAlign="center"
      sx={{ color: "#19C5C1" }}
    >
      <Typography variant="h3" fontWeight={700} mb={3} sx={{ color: "#A4FF3F" }}>
        Get in Touch
      </Typography>
      <Typography variant="subtitle1" mb={5}>
        We'd love to hear from you! Whether you have a question or want to
        collaborate, send us a message.
      </Typography>

      <Box component="form" noValidate autoComplete="off" mb={6}>
        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              required
              label="Name"
              variant="outlined"
              InputLabelProps={{ style: { color: "#19C5C1" } }}
              InputProps={{
                style: { color: "white", backgroundColor: "#121212" },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              required
              label="Email"
              type="email"
              variant="outlined"
              InputLabelProps={{ style: { color: "#19C5C1" } }}
              InputProps={{
                style: { color: "white", backgroundColor: "#121212" },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              required
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              InputLabelProps={{ style: { color: "#19C5C1" } }}
              InputProps={{
                style: { color: "white", backgroundColor: "#121212" },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#A4FF3F",
                color: "#000",
                fontWeight: 700,
                "&:hover": {
                  backgroundColor: "#8bcf24",
                },
              }}
              type="submit"
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Typography variant="h6" mb={2} sx={{ color: "#A4FF3F" }}>
          Follow Us
        </Typography>
        <Box display="flex" justifyContent="center" gap={3}>
          <Link
            href="https://www.instagram.com/_luciano._g"
            target="_blank"
            rel="noopener"
            aria-label="Instagram"
          >
            <IconButton
              sx={{
                color: "#A4FF3F",
                "&:hover": { color: "#1e1e1e" },
              }}
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Link>

          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener"
            aria-label="Facebook"
          >
            <IconButton
              sx={{
                color: "#A4FF3F",
                "&:hover": { color: "#1e1e1e" },
              }}
            >
              <FacebookIcon fontSize="large" />
            </IconButton>
          </Link>

          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener"
            aria-label="XIcon"
          >
            <IconButton
              sx={{
                color: "#A4FF3F",
                "&:hover": { color: "#1e1e1e" },
              }}
            >
              <XIcon fontSize="large" />
            </IconButton>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};
