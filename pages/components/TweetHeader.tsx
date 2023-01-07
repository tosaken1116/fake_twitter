import { Button, Stack } from "@mui/material";
import { TweetMakeHeaderProps } from "../Type/Type";

export default function TweetHeader({
    handleTweet,
    isTweetDisable,
}: TweetMakeHeaderProps) {
    return (
        <Stack direction="row" spacing={20} sx={{ height: "5vh" }}>
            <Button sx={{ color: "black" }} onClick={() => handleTweet()}>
                キャンセル
            </Button>
            <Button
                disabled={isTweetDisable}
                className="rounded-full py-0  bg-[#1DA1F2]"
                sx={{ color: "white" }}
                onClick={() => handleTweet()}
            >
                ツイートする
            </Button>
        </Stack>
    );
}
