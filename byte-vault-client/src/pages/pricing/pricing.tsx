import {
  Box,
  Typography,
  Card,
  Button,
  Grid,
  Link,
} from "@mui/material";
import StorageIcon from "@mui/icons-material/Storage";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export const PricingSection: React.FC = () => {
  const plans = [
    {
      title: "Free",
      price: "0 €",
      storage: "10 GB",
      features: [
        "Basic cloud storage",
        "Access from any device",
        "Limited support",
      ],
      icon: <StorageIcon sx={{ fontSize: 40, color: "#19C5C1", mb: 1 }} />,
      buttonText: "Get Started",
      buttonVariant: "outlined" as const,
      buttonColor: "#19C5C1",
    },
    {
      title: "Standard",
      price: "10 € / month",
      storage: "50 GB",
      features: [
        "Increased storage",
        "Priority support",
        "Faster upload speeds",
      ],
      icon: <StarBorderIcon sx={{ fontSize: 40, color: "#A4FF3F", mb: 1 }} />,
      buttonText: "Choose Standard",
      buttonVariant: "contained" as const,
      buttonColor: "#A4FF3F",
    },
    {
      title: "Premium",
      price: "50 € / month",
      storage: "1 TB",
      features: [
        "Maximum storage",
        "Premium support",
        "Lightning-fast access",
        "Advanced security features",
      ],
      icon: (
        <VerifiedUserIcon sx={{ fontSize: 40, color: "#FFD700", mb: 1 }} />
      ),
      buttonText: "Go Premium",
      buttonVariant: "contained" as const,
      buttonColor: "#FFD700",
    },
  ];

  return (
    <Box
      py={8}
      px={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography
        variant="h2"
        fontWeight={700}
        sx={{ color: "#A4FF3F", mb: 3 }}
      >
        Pricing Plans
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ color: "#19C5C1", maxWidth: 600, mb: 6 }}
      >
        Choose the plan that fits your needs. Upgrade anytime for more storage and features.
      </Typography>

      <Grid container spacing={4} maxWidth="md" justifyContent="center">
        {plans.map((plan) => (
          <Grid size={{ xs: 12, md: 4 }} key={plan.title}>
            <Card
              sx={{
                borderRadius: 4,
                backgroundColor: "#121212",
                color: "white",
                boxShadow: 4,
                textAlign: "center",
                p: 3,
                minHeight: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:hover": {
                  backgroundColor: "#1e1e1e",
                },
              }}
            >
              <Box mb={2}>{plan.icon}</Box>
              <Typography variant="h5" fontWeight={600} gutterBottom>
                {plan.title}
              </Typography>
              <Typography variant="h4" fontWeight={700} mb={1} sx={{ color: plan.buttonColor }}>
                {plan.price}
              </Typography>
              <Typography variant="subtitle1" mb={2}>
                {plan.storage} Storage
              </Typography>
              <Box mb={3} sx={{ textAlign: "left" }}>
                {plan.features.map((feature, index) => (
                  <Typography
                    variant="body2"
                    key={index}
                    sx={{ mb: 0.7, color: "#ccc" }}
                  >
                    • {feature}
                  </Typography>
                ))}
              </Box>
              <Link href="/register" style={{ textDecoration: "none" }}>
              <Button
                variant={plan.buttonVariant}
                sx={{
                  borderColor: plan.buttonColor,
                  color:
                    plan.buttonVariant === "outlined"
                      ? plan.buttonColor
                      : "#000",
                  backgroundColor:
                    plan.buttonVariant === "contained"
                      ? plan.buttonColor
                      : "transparent",
                  fontWeight: 600,
                  py: 1.2,
                  "&:hover": {
                    backgroundColor:
                      plan.buttonVariant === "contained"
                        ? plan.buttonColor + "cc"
                        : plan.buttonColor + "22",
                    borderColor: plan.buttonColor,
                  },
                }}
              >
                {plan.buttonText}
              </Button>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
