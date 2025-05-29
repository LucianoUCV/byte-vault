import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, IconButton, Tooltip } from "@mui/material";
import AuthorizeView from "../../components/authorize-view";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadIcon from "@mui/icons-material/Upload";

const photos = [
    { id: 1, title: "Mountain View", src: "https://source.unsplash.com/random/400x300?nature,mountain" },
    { id: 2, title: "City Lights", src: "https://source.unsplash.com/random/400x300?city,night" },
    { id: 3, title: "Beach Sunset", src: "https://source.unsplash.com/random/400x300?beach,sunset" },
    { id: 4, title: "Forest Trail", src: "https://source.unsplash.com/random/400x300?forest,path" },
    { id: 5, title: "Snow Peak", src: "https://source.unsplash.com/random/400x300?snow,mountain" },
];

export const DashboardSection: React.FC = () => {
    return (
        <AuthorizeView>
            <Box px={4} py={6} sx={{ backgroundColor: "#121212", minHeight: "100vh" }}>
                <Typography variant="h3" fontWeight={700} sx={{ color: "#A4FF3F", mb: 4 }}>
                    Your Photo Cloud Storage
                </Typography>

                <Box mb={4} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ color: "#19C5C1" }}>
                        Browse and manage your photos effortlessly.
                    </Typography>
                    <Tooltip title="Upload Photos">
                        <IconButton
                            sx={{
                                color: "#A4FF3F",
                                border: "1.5px solid #A4FF3F",
                                "&:hover": { backgroundColor: "#A4FF3F22" },
                            }}
                            aria-label="upload"
                        >
                            <UploadIcon />
                        </IconButton>
                    </Tooltip>
                </Box>

                <Grid container spacing={3}>
                    {photos.map((photo) => (
                        <Grid size ={{ xs: 12, sm: 6, md: 4 }} key={photo.id}>
                            <Card
                                sx={{
                                    backgroundColor: "#1e1e1e",
                                    color: "white",
                                    borderRadius: 3,
                                    boxShadow: 3,
                                    transition: "transform 0.2s",
                                    "&:hover": { transform: "scale(1.05)" },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={photo.src}
                                    alt={photo.title}
                                    sx={{ borderRadius: "12px 12px 0 0" }}
                                />
                                <CardContent sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography variant="subtitle1" fontWeight={600}>
                                        {photo.title}
                                    </Typography>
                                    <Tooltip title="Delete Photo">
                                        <IconButton
                                            sx={{
                                                color: "#FF4C4C",
                                                "&:hover": { backgroundColor: "#FF4C4C33" },
                                            }}
                                            aria-label="delete"
                                        // onClick={() => handleDelete(photo.id)} // placeholder for delete handler
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </AuthorizeView>
    );
};
