import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <Box className="infoBox">
      <Typography variant="h4" mb={2}>
        Unexpected Error
      </Typography>
      <Typography variant="body1" mb={4}>
        Sorry, something went wrong.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Box>
  );
}
