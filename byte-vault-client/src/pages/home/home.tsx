import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import UpgradeIcon from "@mui/icons-material/Upgrade";

export const HomeSection: React.FC = () => {
  return (
    <Box
      py={6}
      px={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Typography
        variant="h1"
        fontWeight={700}
        sx={{
          color: "#A4FF3F",
          fontSize: { xs: "3rem", md: "4rem" },
          mb: 1,
        }}
      >
        ByteVault
      </Typography>

      <Typography variant="h6" sx={{ color: "#19C5C1", mb: 3 }}>
        Your secure cloud storage solution
      </Typography>

      <Box mb={4}>
        <Button
          variant="outlined"
          size="large"
          sx={{
            borderColor: "#19C5C1",
            color: "#19C5C1",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#19C5C122",
            },
          }}
          href="/register"
        >
          Get started
        </Button>
      </Box>

      <Grid container spacing={4} maxWidth="md" justifyContent="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 4,
              backgroundColor: "#121212",
              color: "white",
              boxShadow: 4,
              textAlign: "left",
              p: 2,
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": {
                backgroundColor: "#1e1e1e",
              },
            }}
          >
            <CardContent>
              <CloudOutlinedIcon
                sx={{ fontSize: 40, color: "#19C5C1", mb: 1 }}
              />
              <Typography variant="h6" gutterBottom>
                Access your media files easily
              </Typography>
              <Typography variant="body2">
                All your photos, videos, and documents stored safely in one
                place - accessible from any device.
              </Typography>
            </CardContent>
            <Box mt={2}>
              <Button
                variant="outlined"
                sx={{ borderColor: "#19C5C1", color: "#19C5C1" }}
                href="/about"
              >
                Learn More
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Card
            sx={{
              borderRadius: 4,
              backgroundColor: "#121212",
              color: "white",
              boxShadow: 4,
              textAlign: "left",
              p: 2,
              minHeight: 200,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              "&:hover": {
                backgroundColor: "#1e1e1e",
              },
            }}
          >
            <CardContent>
              <UpgradeIcon sx={{ fontSize: 40, color: "#A4FF3F", mb: 1 }} />
              <Typography variant="h6" gutterBottom>
                Upgrade to Premium
              </Typography>
              <Typography variant="body2">
                Get up to 1TB of secure storage, lightning-fast access, and
                premium support with our affordable plans.
              </Typography>
            </CardContent>
            <Box mt={2}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#A4FF3F", color: "#000" }}
                href="/pricing"
              >
                Upgrade Now
              </Button>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
