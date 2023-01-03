import { Divider, List, Stack } from "@mui/material";
import Tweet from "./Tweet";

export default function TweetHome() {
    const demoData = [
        {
            userName: "testUser",
            iconPath: "/rabbit.png",
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
            iconPath: "/cat1.png",
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
            iconPath: "/cat1.png",
            userId: "testId",
            context: "testContext",
            likeCount: 1,
            retweetCount: 1,
            replyCount: 1,
            viewCount: 1,
            tweeted: "2時間前",
            isLocked: true,
            isOfficial: true,
        },
        {
            userName: "testUser",
            iconPath: "/cat1.png",
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
            iconPath: "/cat1.png",
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
            iconPath: "/cat1.png",
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
            iconPath: "/cat1.png",
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
            iconPath: "/cat1.png",
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
            iconPath: "/cat1.png",
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
            iconPath: "/cat1.png",
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
                    iconPath,
                    userId,
                    context,
                    likeCount,
                    retweetCount,
                    replyCount,
                    viewCount,
                    tweeted,
                    isLocked,
                    isOfficial,
                }) => (
                    <Stack>
                        <Tweet
                            userName={userName}
                            iconPath={iconPath}
                            userId={userId}
                            context={context}
                            likeCount={likeCount}
                            retweetCount={retweetCount}
                            replyCount={replyCount}
                            viewCount={viewCount}
                            tweeted={tweeted}
                            isLocked={isLocked}
                            isOfficial={isOfficial}
                        ></Tweet>
                        <Divider></Divider>
                    </Stack>
                )
            )}
        </List>
    );
}
