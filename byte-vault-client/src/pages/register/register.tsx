import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    Box,
    Typography,
    TextField,
    Button,
    FormHelperText,
} from "@mui/material";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields.");
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");
        try {
            const response = await fetch("/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            if (response.ok) {
                navigate("/dashboard");
            } else {
                setError("Error registering.");
            }
        } catch {
            setError("Error registering.");
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
                Register
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

                <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputLabelProps={{ sx: { color: "#19C5C1" } }}
                    InputProps={{ sx: { color: "white" } }}
                    variant="outlined"
                    required
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
                    Register
                </Button>

                <Button
                    fullWidth
                    sx={{
                        mt: 2,
                        color: "#19C5C1",
                        textTransform: "none",
                    }}
                    onClick={handleLoginClick}
                >
                    Already have an account? Login
                </Button>
            </form>
        </Box>
    );
}

export default Register;
