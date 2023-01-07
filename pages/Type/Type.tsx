export type TweetPropsType = {
    iconPath: string;
    userName: string;
    userId: string;
    context: string;
    likeCount: number;
    retweetCount: number;
    replyCount: number;
    viewCount: number;
    tweeted: string;
    isLocked: boolean;
    isOfficial?: boolean;
    tweetType?: string;
    replyTo?: string;
    notificationType?: "reply";
};
export type HeaderProps = {
    notified: boolean;
    nowPage: string;
    openSideBar: () => void;
    isSidebarOpen: boolean;
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
export type FooterProps = {
    setNowPageName: (nowPage: string) => void;
    nowPage: string;
};

export type TweetButtonProps = Pick<HeaderProps, "nowPage">;
export type SideBarProps = {
    isSidebarOpen: boolean;
    closeSidebar: () => void;
};
