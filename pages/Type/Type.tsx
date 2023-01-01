export type TweetPropsType = {
    userName: string;
    userId: string;
    context: string;
    likeCount: number;
    retweetCount: number;
    replyCount: number;
    viewCount: number;
    tweeted: string;
    isLocked: boolean;
    tweetType?: string;
    replyTo?: string;
    notificationType?: "reply";
};
export type HeaderProps = {
    notified: boolean;
};
export type NonReplyNotificationProps = {
    usersIcons: string[];
    reactUsersName: string[];
    tweetContent: string;
    notificationType: "favorite" | "retweet";
};
export type NotificationRowProps = {
    contents: NonReplyNotificationProps | TweetPropsType;
};

export type MessageRowProps = {
    icon: string;
    userName: string;
    userId: string;
    context: string;
    lastContact: string;
    isLocked: boolean;
};
export type MessageRequestProps = {
    requestNumber: number;
};
