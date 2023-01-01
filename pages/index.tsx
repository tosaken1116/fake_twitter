import { Box, Divider, List, Stack } from "@mui/material";
import type { NextPage } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Tweet from "./components/Tweet";
import TweetButton from "./components/TweetButton";

const Home: NextPage = () => {
    const demoData = [
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
        },
        {
            userName: "testUser",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
        },
    ];
    return (
        <Stack sx={{ width: "100vw", maxHeight: "800px" }}>
            <Header notified={true} />
            <Box
                sx={{
                    zIndex: 0,
                    position: "relative",
                    overflow: "auto",
                    maxHeight: 800,
                }}
            >
                <List>
                    {demoData.map(
                        ({
                            userName,
                            userId,
                            context,
                            likeCount,
                            retweetCount,
                            replyCount,
                            viewCount,
                            tweeted,
                            isLocked,
                        }) => (
                            <Stack>
                                <Tweet
                                    userName={userName}
                                    userId={userId}
                                    context={context}
                                    likeCount={likeCount}
                                    retweetCount={retweetCount}
                                    replyCount={replyCount}
                                    viewCount={viewCount}
                                    tweeted={tweeted}
                                    isLocked={isLocked}
                                ></Tweet>
                                <Divider></Divider>
                            </Stack>
                        )
                    )}
                </List>
            </Box>
            <TweetButton />
            <Footer />
        </Stack>
    );
};

export default Home;
