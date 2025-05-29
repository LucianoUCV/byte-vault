import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import { _logo } from "../../assets";
import { Navigation } from "./navigation/navigation";

export type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Box height="100vh">
      <AppBar position="fixed" sx={{ backgroundColor: "#0a2e36" }}>
        <Toolbar>
          <Box flexGrow={1}>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Box display="flex" alignItems="center" gap={1}>
                <img width="54px" height="54px" src={_logo} alt="logo" />
                <Typography
                  variant="h5"
                  sx={{ width: "fit-content", color: "#A4FF3F" }}
                >
                  ByteVault
                </Typography>
              </Box>
            </Link>
          </Box>
          <Navigation />
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Box>{children}</Box>
    </Box>
  );
};
