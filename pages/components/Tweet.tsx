import AutorenewIcon from "@mui/icons-material/Autorenew";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IosShareIcon from "@mui/icons-material/IosShare";
import LockIcon from "@mui/icons-material/Lock";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { TweetPropsType } from "../Type/Type";
export default function Tweet({
    userName,
    userId,
    iconPath,
    context,
    likeCount,
    retweetCount,
    replyCount,
    viewCount,
    tweeted,
    isLocked,
    tweetType,
    replyTo,
    isOfficial,
}: TweetPropsType) {
    return (
        <Stack direction="row" spacing={0.5} sx={{ width: "100vw" }} p={1}>
            <Box p={0.5}>
                <Image
                    src={iconPath}
                    alt="icon"
                    width={48}
                    height={48}
                    className={isOfficial ? "rounded-md" : "rounded-full "}
                />
            </Box>
            <Stack flexGrow={1}>
                <Stack direction="row" spacing={0.5}>
                    <Typography variant="body1">{userName}</Typography>
                    {isOfficial ? (
                        <VerifiedIcon sx={{ fontSize: "20px" }} />
                    ) : (
                        <></>
                    )}
                    {isLocked && (
                        <LockIcon
                            sx={{ fontSize: "16px", alignSelf: "center" }}
                        />
                    )}
                    <Typography variant="body1">@{userId}</Typography>
                    <Typography flexGrow={1} variant="body1">
                        {!isOfficial && "・" + tweeted}
                    </Typography>
                    <MoreHorizIcon sx={{ fontSize: "24px" }} />
                </Stack>
                {tweetType == "reply" ? (
                    <Stack direction="row">
                        <Typography>返信先:</Typography>
                        <Typography sx={{ color: "#1DA1F2" }}>
                            @{replyTo}さん
                        </Typography>
                    </Stack>
                ) : (
                    <></>
                )}
                <Typography>{context}</Typography>
                <Grid container direction="row" flexGrow={1} spacing={3.6}>
                    <Grid item>
                        <Stack direction="row">
                            <IconButton>
                                <SignalCellularAltIcon
                                    sx={{ fontSize: "16px" }}
                                />
                            </IconButton>
                            <Typography sx={{ placeSelf: "center" }}>
                                {viewCount}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction="row">
                            <IconButton>
                                <ChatBubbleOutlineIcon
                                    sx={{ fontSize: "16px" }}
                                />
                            </IconButton>
                            <Typography sx={{ placeSelf: "center" }}>
                                {replyCount}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction="row">
                            <IconButton disabled={isLocked}>
                                <AutorenewIcon sx={{ fontSize: "16px" }} />
                            </IconButton>
                            <Typography sx={{ placeSelf: "center" }}>
                                {retweetCount}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction="row">
                            <IconButton>
                                <FavoriteBorderIcon sx={{ fontSize: "16px" }} />
                            </IconButton>
                            <Typography sx={{ placeSelf: "center" }}>
                                {likeCount}
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item>
                        <Stack direction="row">
                            <IconButton>
                                <IosShareIcon sx={{ fontSize: "16px" }} />
                            </IconButton>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    );
}
