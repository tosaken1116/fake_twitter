import AutorenewIcon from "@mui/icons-material/Autorenew";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { NonReplyNotificationProps } from "../Type/Type";

export default function NonReplyNotification({
    usersIcons,
    notificationType,
    tweetContent,
    reactUsersName,
}: NonReplyNotificationProps) {
    return (
        <Stack direction="row" spacing={0.5} sx={{ width: "100vw" }} p={1}>
            <Box p={0.5} sx={{ width: "64px", textAlign: "end" }}>
                {notificationType == "favorite" ? (
                    <FavoriteIcon sx={{ color: "#e0245e" }} />
                ) : notificationType == "retweet" ? (
                    <AutorenewIcon sx={{ color: "#17bf63" }} />
                ) : (
                    <></>
                )}
            </Box>
            <Stack>
                <Stack direction="row">
                    {usersIcons.map((userIcon) => (
                        <Image
                            width={32}
                            height={32}
                            src={userIcon}
                            alt="usericon"
                            className="rounded-full"
                        ></Image>
                    ))}
                </Stack>
                <Typography>
                    {reactUsersName
                        .map((reactUser) => {
                            return reactUser + "さん";
                        })
                        .join("と")}
                    があなたのツイートを
                    {notificationType == "favorite" ? (
                        <>いいね</>
                    ) : notificationType == "retweet" ? (
                        <>リツイート</>
                    ) : (
                        <></>
                    )}
                    しました
                </Typography>
                <Typography>{tweetContent}</Typography>
            </Stack>
        </Stack>
    );
}
