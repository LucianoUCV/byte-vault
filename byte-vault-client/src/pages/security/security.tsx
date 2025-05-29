import {
  Box,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export const SecuritySection: React.FC = () => {

  const sections = [
    {
      title: "End-to-End Encryption",
      description:
        "Your files are encrypted before they leave your device and remain protected during transit and storage. Only you hold the keys.",
      icon: <LockIcon sx={{ fontSize: 60, color: "#A4FF3F" }} />,
    },
    {
      title: "Zero-Knowledge Privacy",
      description:
        "Not even ByteVault can access your data. With zero-knowledge architecture, your information remains private, always.",
      icon: <SecurityIcon sx={{ fontSize: 60, color: "#19C5C1" }} />,
    },
    {
      title: "Two-Factor Authentication",
      description:
        "Add an extra layer of protection with two-factor authentication and keep your account secure even if your password is compromised.",
      icon: <VerifiedUserIcon sx={{ fontSize: 60, color: "#FFD700" }} />,
    },
  ];

  return (
    <Box py={8} px={2} textAlign="center">
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ color: "#A4FF3F", mb: 4 }}
      >
        Your Security, Our Priority
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: "#19C5C1", maxWidth: 700, margin: "0 auto", mb: 6 }}
      >
        At ByteVault, we go beyond just storing your data - we protect it with world-class security architecture.
      </Typography>

      <Grid container spacing={5} justifyContent="center" maxWidth="lg" mx="auto">
        {sections.map((section, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={index}>
            <Box
              sx={{
                backgroundColor: "#121212",
                borderRadius: 4,
                boxShadow: 4,
                p: 4,
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "#1e1e1e",
                },
              }}
            >
              <Box mb={2}>{section.icon}</Box>
              <Typography
                variant="h6"
                fontWeight={600}
                sx={{ color: "#19C5C1", mb: 1 }}
              >
                {section.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "#ccc", mb: 2 }}>
                {section.description}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#19C5C1",
                  color: "#19C5C1",
                  "&:hover": {
                    backgroundColor: "#19C5C122",
                    borderColor: "#19C5C1",
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
