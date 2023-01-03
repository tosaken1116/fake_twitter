import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@mui/material";
import { TweetButtonProps } from "../Type/Type";
import MessageAddIcon from "./MessageAddIcon";
export default function TweetButton({ nowPage }: TweetButtonProps) {
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
                {nowPage == "home" ||
                nowPage == "search" ||
                nowPage == "notification" ? (
                    <AddIcon sx={{ fontSize: "34px" }}></AddIcon>
                ) : nowPage == "message" ? (
                    <MessageAddIcon />
                ) : (
                    <></>
                )}
            </IconButton>
        </Box>
    );
}
