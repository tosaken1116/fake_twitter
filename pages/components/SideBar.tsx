import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LockIcon from "@mui/icons-material/Lock";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

import { Box, Button, Divider, Drawer, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { SideBarProps } from "../Type/Type";
import FollowRequestIcon from "./FollowRequestIcon";
import TwitterCircleIcon from "./TwitterCircleIcon";
export default function SideBar({ isSidebarOpen, closeSidebar }: SideBarProps) {
    const testData = {
        userName: "testuser",
        userId: "testId",
        userFollor: 300,
        userFollwer: 300,
        isLocked: true,
    };
    const icons = ["/rabbit.png", "/rabbit.png"];
    return (
        <Drawer
            anchor="left"
            open={isSidebarOpen}
            onClose={() => closeSidebar()}
        >
            <Box sx={{ width: "80vw" }} p={3}>
                <Stack spacing={1}>
                    <Stack direction="row">
                        <Box flexGrow={1}>
                            <Image
                                src="/rabbit.png"
                                width={40}
                                height={40}
                                alt="icon"
                                className="rounded-full"
                            ></Image>
                        </Box>
                        <Stack
                            direction="row"
                            sx={{ height: "24px" }}
                            spacing={3}
                        >
                            {icons.map((icon) => (
                                <Image
                                    width={28}
                                    height={28}
                                    alt="icon"
                                    src={icon}
                                    className="rounded-full"
                                ></Image>
                            ))}
                            <Box
                                sx={{
                                    width: "28px",
                                    height: "28px",
                                    borderRadius: "9999px",
                                    border: "solid 1px #dddddd",
                                    textAlign: "center",
                                }}
                            >
                                <MoreHorizOutlinedIcon
                                    sx={{ color: "#aaaaaa" }}
                                />
                            </Box>
                        </Stack>
                    </Stack>
                    <Typography variant="h6">
                        {testData.userName}
                        {testData.isLocked && (
                            <LockIcon sx={{ width: "20px" }}></LockIcon>
                        )}
                    </Typography>
                    <Typography variant="caption">
                        @{testData.userId}
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Typography variant="caption">
                            {testData.userFollor}????????????
                        </Typography>
                        <Typography variant="caption">
                            {testData.userFollwer}???????????????
                        </Typography>
                    </Stack>
                    <Stack spacing={2} pb={3}>
                        <Button
                            startIcon={<PermIdentityIcon />}
                            sx={{ justifyContent: "left", color: "black" }}
                        >
                            <Typography variant="h6" pl={2}>
                                ??????????????????
                            </Typography>
                        </Button>
                        <Button
                            startIcon={<PermIdentityIcon />}
                            sx={{ justifyContent: "left", color: "black" }}
                        >
                            <Typography variant="h6" pl={2}>
                                ????????????
                            </Typography>
                        </Button>
                        <Button
                            startIcon={<BookmarkBorderIcon />}
                            sx={{ justifyContent: "left", color: "black" }}
                        >
                            <Typography variant="h6" pl={2}>
                                ??????????????????
                            </Typography>{" "}
                        </Button>
                        <Button
                            startIcon={<ArticleOutlinedIcon />}
                            sx={{ justifyContent: "left", color: "black" }}
                        >
                            <Typography variant="h6" pl={2}>
                                ?????????
                            </Typography>{" "}
                        </Button>
                        <Button
                            startIcon={<TwitterCircleIcon />}
                            sx={{ justifyContent: "left", color: "black" }}
                        >
                            <Typography variant="h6" pl={2}>
                                Twitter????????????
                            </Typography>{" "}
                        </Button>
                        {testData.isLocked && (
                            <Button
                                startIcon={<FollowRequestIcon />}
                                sx={{ justifyContent: "left", color: "black" }}
                            >
                                <Typography variant="h6" pl={2}>
                                    ???????????????????????????
                                </Typography>{" "}
                            </Button>
                        )}
                    </Stack>
                    <Divider></Divider>
                    <Stack spacing={2} pt={3}>
                        <Stack direction="row">
                            <Box flexGrow={1}>
                                <Button sx={{ color: "black" }}>
                                    Creator Studio
                                </Button>
                            </Box>
                            <KeyboardArrowDownIcon />
                        </Stack>
                        <Stack direction="row">
                            <Box flexGrow={1}>
                                <Button sx={{ color: "black" }}>
                                    ????????????????????????????????????
                                </Button>
                            </Box>
                            <KeyboardArrowDownIcon />
                        </Stack>
                        <Stack direction="row">
                            <Box flexGrow={1}>
                                <Button sx={{ color: "black" }}>
                                    ?????????????????????
                                </Button>
                            </Box>
                            <KeyboardArrowDownIcon />
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Drawer>
    );
}
