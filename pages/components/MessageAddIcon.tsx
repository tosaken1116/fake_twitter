import AddIcon from "@mui/icons-material/Add";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Box } from "@mui/material";
export default function MeddageAddIcon() {
    return (
        <Box sx={{ position: "relative", width: "34px", height: "34px   " }}>
            <AddIcon
                sx={{
                    position: "absolute",
                    right: -2,
                    bottom: -2,
                    zIndex: 15,
                    fontSize: "16px",
                }}
            />
            <Box
                sx={{
                    position: "absolute",
                    width: "16px",
                    height: "16px",
                    backgroundColor: "#1DA1F2",
                    right: -1,
                    bottom: -1,
                    borderRadius: "9999px",
                    zIndex: 10,
                }}
            ></Box>
            <MailOutlineIcon
                sx={{
                    fontSize: "28px",
                    position: "absolute",
                    right: 2,
                    bottom: 2,
                    zIndex: 5,
                }}
            />
        </Box>
    );
}
