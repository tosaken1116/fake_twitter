import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Stack } from "@mui/material";
import { FooterProps } from "../Type/Type";
export default function Footer({ setNowPageName, nowPage }: FooterProps) {
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
                borderTop: "solid 1px #dddddd   ",
            }}
        >
            <IconButton onClick={() => setNowPageName("home")}>
                {nowPage == "home" ? (
                    <HomeIcon sx={{ fontSize: "30px" }} />
                ) : (
                    <HomeOutlinedIcon sx={{ fontSize: "30px" }} />
                )}
            </IconButton>
            <IconButton onClick={() => setNowPageName("search")}>
                <SearchIcon sx={{ fontSize: "30px" }} />
            </IconButton>
            <IconButton onClick={() => setNowPageName("notification")}>
                {nowPage == "notification" ? (
                    <NotificationsIcon sx={{ fontSize: "30px" }} />
                ) : (
                    <NotificationsNoneIcon sx={{ fontSize: "30px" }} />
                )}
            </IconButton>
            <IconButton onClick={() => setNowPageName("message")}>
                {nowPage == "message" ? (
                    <LocalPostOfficeIcon sx={{ fontSize: "30px" }} />
                ) : (
                    <MailOutlineIcon sx={{ fontSize: "30px" }} />
                )}
            </IconButton>
        </Stack>
    );
}
