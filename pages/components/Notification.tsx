import { Divider, List, Stack } from "@mui/material";
import { NotificationRowProps } from "../Type/Type";
import NonReplyNotification from "./NonReplyNotification";
import Tweet from "./Tweet";

export default function Notification() {
    const demoData: NotificationRowProps[] = [
        {
            contents: {
                notificationType: "favorite",
                usersIcons: ["/cat1.png"],
                tweetContent: "",
                reactUsersName: ["user1", "user2"],
            },
        },

        {
            contents: {
                notificationType: "reply",
                userName: "testUser",
                userId: "testId",
                context: "testContext",
                likeCount: 1,
                retweetCount: 1,
                replyCount: 1,
                viewCount: 1,
                tweeted: "2時間前",
                isLocked: true,
                replyTo: "test",
                tweetType: "reply",
            },
        },
        {
            contents: {
                notificationType: "retweet",
                usersIcons: ["/cat1.png"],
                tweetContent: "test",
                reactUsersName: ["user1", "user2"],
            },
        },
        {
            contents: {
                notificationType: "favorite",
                usersIcons: ["/cat1.png"],
                tweetContent: "test",
                reactUsersName: ["user1", "user2"],
            },
        },
        {
            contents: {
                notificationType: "favorite",
                usersIcons: ["/cat1.png"],
                tweetContent: "test",
                reactUsersName: ["user1", "user2"],
            },
        },
        {
            contents: {
                notificationType: "favorite",
                usersIcons: ["/cat1.png"],
                tweetContent: "test",
                reactUsersName: ["user1", "user2"],
            },
        },
        {
            contents: {
                notificationType: "favorite",
                usersIcons: ["/cat1.png"],
                tweetContent: "test",
                reactUsersName: ["user1", "user2"],
            },
        },
        {
            contents: {
                notificationType: "favorite",
                usersIcons: ["/cat1.png"],
                tweetContent: "test",
                reactUsersName: ["user1", "user2"],
            },
        },
        {
            contents: {
                notificationType: "favorite",
                usersIcons: ["/cat1.png"],
                tweetContent: "test",
                reactUsersName: ["user1", "user2"],
            },
        },
        {
            contents: {
                notificationType: "favorite",
                usersIcons: ["/cat1.png"],
                tweetContent: "test",
                reactUsersName: ["user1", "user2"],
            },
        },
        {
            contents: {
                notificationType: "retweet",
                usersIcons: ["/cat1.png"],
                tweetContent: "test",
                reactUsersName: ["user1", "user2"],
            },
        },
    ];
    return (
        <List>
            {demoData.map(({ contents }: NotificationRowProps) => {
                if (contents.notificationType == "reply") {
                    return (
                        <Stack>
                            <Tweet
                                userName={contents.userName}
                                userId={contents.userId}
                                context={contents.context}
                                likeCount={contents.likeCount}
                                retweetCount={contents.retweetCount}
                                replyCount={contents.replyCount}
                                viewCount={contents.viewCount}
                                tweeted={contents.tweeted}
                                isLocked={contents.isLocked}
                                tweetType={contents.tweetType}
                                replyTo={contents.replyTo}
                            ></Tweet>
                            <Divider />
                        </Stack>
                    );
                } else if (
                    contents.notificationType == "favorite" ||
                    contents.notificationType == "retweet"
                ) {
                    return (
                        <Stack>
                            <NonReplyNotification
                                reactUsersName={contents.reactUsersName}
                                usersIcons={contents.usersIcons}
                                notificationType={contents.notificationType}
                                tweetContent={contents.tweetContent}
                            />
                            <Divider />
                        </Stack>
                    );
                }
            })}
        </List>
    );
}
