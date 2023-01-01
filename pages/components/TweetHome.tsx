import { Divider, List, Stack } from "@mui/material";
import Tweet from "./Tweet";

export default function TweetHome() {
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
    );
}
