import { Typography, Box } from "@mui/material";
export default function Loan() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
                maxWidth: "1300px",
                margin: "0 auto",
            }}
        >
            <Typography variant="h2" sx={{ mt: 5, mb: 5 }}>
                Loan Default Classification
            </Typography>
        </Box>
    );
}
