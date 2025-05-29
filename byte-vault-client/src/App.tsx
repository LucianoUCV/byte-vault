import "./App.css";
import { MainLayout } from "./components";
import { HomeSection, PricingSection, AboutSection, SecuritySection, ContactSection } from "./pages";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/security" element={<SecuritySection />} />
          <Route path="/contact" element={<ContactSection />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}
export default App;
