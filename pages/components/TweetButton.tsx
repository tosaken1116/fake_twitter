import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@mui/material";
export default function TweetButton() {
    const openTweet = () => {
        console.log("open tweet");
    };
    return (
        <Box
            sx={{
                backgroundColor: "#1DA1F2",
                padding: "4px",
                borderRadius: "9999px",
                position: "absolute",
                bottom: "50px",
                right: "10px",
            }}
        >
            <IconButton sx={{ color: "white" }} onClick={() => openTweet()}>
                <AddIcon sx={{ fontSize: "34px" }}></AddIcon>
            </IconButton>
        </Box>
    );
}
