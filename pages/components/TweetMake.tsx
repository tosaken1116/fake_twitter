import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Box,
    Button,
    Drawer,
    List,
    Stack,
    TextareaAutosize,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { TweetMakeProps } from "../Type/Type";
import TweetFooter from "./TweetFooter";
import TweetHeader from "./TweetHeader";
export default function TweetMake({
    isTweetMakeOpen,
    closeTweetMake,
}: TweetMakeProps) {
    const [tweetText, setTweetText] = useState("");
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTweetText(event.target.value);
        console.log(tweetText.length / 140);
    };
    const handleTweet = () => {
        setTweetText("");
        closeTweetMake();
    };
    return (
        <Drawer
            open={isTweetMakeOpen}
            anchor="bottom"
            sx={{ width: "100vw", height: "100%" }}
        >
            <Stack p={2}>
                <TweetHeader
                    handleTweet={handleTweet}
                    isTweetDisable={tweetText == ""}
                />
                <List sx={{ height: "84vh" }}>
                    <Stack direction="row">
                        <Box sx={{ width: "15vw" }}>
                            <Image
                                alt="icon"
                                src="/rabbit.png"
                                width={40}
                                height={40}
                                className="rounded-full"
                            ></Image>
                        </Box>
                        <Stack sx={{ width: "85vw" }}>
                            <Box>
                                <Button
                                    variant="outlined"
                                    className="rounded-full border-2"
                                    endIcon={<ExpandMoreIcon />}
                                    sx={{ px: 2, fontSize: "14px", py: 0.1 }}
                                >
                                    すべてのフォロワー
                                </Button>
                            </Box>
                            <TextareaAutosize
                                placeholder="いまどうしてる？"
                                value={tweetText}
                                onChange={(e) => handleChange(e)}
                            ></TextareaAutosize>
                        </Stack>
                    </Stack>
                </List>
                <TweetFooter tweetTextLength={tweetText.length} />
            </Stack>
        </Drawer>
    );
}
