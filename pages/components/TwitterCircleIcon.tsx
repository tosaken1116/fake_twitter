import FavoriteIcon from "@mui/icons-material/Favorite";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Box } from "@mui/material";
export default function TwitterCircleIcon() {
    return (
        <Box sx={{ position: "relative", width: "16px", height: "16px" }}>
            <PermIdentityIcon
                sx={{ position: "absolute", left: "-3px", bottom: "0px" }}
            ></PermIdentityIcon>
            <FavoriteIcon
                sx={{
                    position: "absolute",
                    fontSize: "12px",
                    bottom: "8px",
                    left: "13px",
                }}
            />
        </Box>
    );
}
