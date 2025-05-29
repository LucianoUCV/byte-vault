import {
  Box,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import DevicesIcon from "@mui/icons-material/Devices";
import ShareIcon from "@mui/icons-material/Share";

export const AboutSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const sections = [
    {
      title: "Reimagine Storage",
      text: `Mount your ByteVault cloud as a virtual hard drive and experience lightning-fast access, without using a single byte of your local storage.`,
      icon: <DriveFolderUploadIcon sx={{ fontSize: 60, color: "#A4FF3F" }} />,
      reverse: false,
    },
    {
      title: "Always With You",
      text: `Use ByteVault seamlessly across all your devices - desktop, mobile, and web. Wherever you go, your data follows securely and instantly.`,
      icon: <DevicesIcon sx={{ fontSize: 60, color: "#19C5C1" }} />,
      reverse: false,
    },
    {
      title: "Collaborate & Share",
      text: `Whether you're building a portfolio or sharing project files, ByteVault gives you the tools to invite feedback and work together effortlessly.`,
      icon: <ShareIcon sx={{ fontSize: 60, color: "#A4FF3F" }} />,
      reverse: false,
    },
  ];

  return (
    <Box py={8} px={2} textAlign="center">
      <Typography
        variant="h3"
        fontWeight={700}
        sx={{ color: "#A4FF3F", mb: 4 }}
      >
        Why ByteVault?
      </Typography>

      {sections.map((section, index) => (
        <Grid
          key={index}
          container
          spacing={4}
          direction={isMobile || !section.reverse ? "column" : "row-reverse"}
          alignItems="center"
          justifyContent="center"
          mb={6}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              {section.icon}
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} textAlign="left">
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{ color: "#19C5C1", mb: 1 }}
            >
              {section.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "#ccc", mb: 2 }}>
              {section.text}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
