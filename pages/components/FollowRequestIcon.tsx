import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Box } from "@mui/material";
export default function FollowRequestIcon() {
    return (
        <Box sx={{ position: "relative", width: "16px", height: "16px" }}>
            <PermIdentityIcon
                sx={{ position: "absolute", left: "-3px", bottom: "0px" }}
            ></PermIdentityIcon>
            <ArrowBackIcon
                sx={{
                    position: "absolute",
                    fontSize: "18px",
                    bottom: "5px",
                    left: "10px",
                }}
            />
        </Box>
    );
}
