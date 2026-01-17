import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Box className="infoBox">
      <Typography variant="h1" fontSize={100} fontWeight="bold">
        404
      </Typography>
      <Typography variant="h4" mb={2}>
        Page Not Found
      </Typography>
      <Typography variant="body1" mb={4}>
        Sorry, the page you are looking for does not exist.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Box>
  );
}
