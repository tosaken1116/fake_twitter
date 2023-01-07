import FavoriteIcon from "@mui/icons-material/Favorite";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Box } from "@mui/material";
export default function TwitterCircle() {
    return (
        <Box sx={{ position: "relative" }}>
            <PermIdentityIcon sx={{ position: "absolute" }} />
            <FavoriteIcon sx={{ position: "absolute" }} />
        </Box>
    );
}
