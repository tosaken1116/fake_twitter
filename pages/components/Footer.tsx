import HomeIcon from "@mui/icons-material/Home";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Stack } from "@mui/material";
export default function Footer() {
    return (
        <Stack
            direction="row"
            spacing={6}
            sx={{
                placeContent: "center",
                position: "absolute",
                bottom: "0",
                width: "100vw",
                height: "50px",
                backgroundColor: "white",
                zIndex: 10,
            }}
        >
            <IconButton>
                <HomeIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton>
                <SearchIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton>
                <NotificationsNoneIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton>
                <MailOutlineIcon sx={{ fontSize: "30px" }} />
            </IconButton>
        </Stack>
    );
}
