import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
} from "@mui/material";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberme, setRememberme] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/register");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        setError("");
        const loginurl = rememberme
            ? "/login?useCookies=true"
            : "/login?useSessionCookies=true";

        try {
            const response = await fetch(loginurl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                window.location.href = "/dashboard";
            } else {
                setError("Error Logging In.");
            }
        } catch {
            setError("Error Logging In.");
        }
    };

    return (
        <Box
            maxWidth="400px"
            mx="auto"
            mt={8}
            p={4}
            sx={{ bgcolor: "#121212", borderRadius: 3, color: "white" }}
        >
            <Typography variant="h4" fontWeight={700} mb={3} sx={{ color: "#A4FF3F" }}>
                Login
            </Typography>

            <form onSubmit={handleSubmit} noValidate>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputLabelProps={{ sx: { color: "#19C5C1" } }}
                    InputProps={{ sx: { color: "white" } }}
                    variant="outlined"
                    required
                />

                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputLabelProps={{ sx: { color: "#19C5C1" } }}
                    InputProps={{ sx: { color: "white" } }}
                    variant="outlined"
                    required
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={rememberme}
                            onChange={(e) => setRememberme(e.target.checked)}
                            sx={{ color: "#19C5C1" }}
                        />
                    }
                    label="Remember Me"
                    sx={{ color: "#19C5C1", mt: 1 }}
                />

                {error && (
                    <FormHelperText sx={{ color: "red", mt: 1, mb: 2 }}>{error}</FormHelperText>
                )}

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        mt: 2,
                        bgcolor: "#A4FF3F",
                        color: "#000",
                        fontWeight: "bold",
                        "&:hover": { bgcolor: "#8bcf24" },
                    }}
                >
                    Login
                </Button>

                <Button
                    fullWidth
                    sx={{
                        mt: 2,
                        color: "#19C5C1",
                        textTransform: "none",
                    }}
                    onClick={handleRegisterClick}
                >
                    Don't have an account? Register
                </Button>
            </form>
        </Box>
    );
}

export default Login;
