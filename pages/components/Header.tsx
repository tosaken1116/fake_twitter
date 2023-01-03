import FlareIcon from "@mui/icons-material/Flare";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Button, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import { HeaderProps } from "../Type/Type";
export default function Header({ notified, nowPage }: HeaderProps) {
    return (
        <Grid container direction="row" pt={1}>
            <Grid item xs={1.5}>
                <IconButton>
                    <Box sx={{ position: "relative" }}>
                        <Image
                            src="/cat1.png"
                            alt="icon"
                            width={36}
                            height={36}
                            className="rounded-full "
                        />
                        {notified && (
                            <Box
                                sx={{
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: "#1DA1F2",
                                    position: "absolute",
                                    border: "solid 2px white",
                                    borderRadius: "9999px",
                                    right: 0,
                                    top: 0,
                                }}
                            ></Box>
                        )}
                    </Box>
                </IconButton>
            </Grid>
            {nowPage == "home" ? (
                <Grid item xs={9} sx={{ textAlign: "center" }} pt={1}>
                    <TwitterIcon sx={{ fontSize: "36px", color: "#1DA1F2" }} />
                </Grid>
            ) : nowPage == "search" ? (
                <Grid item xs={9} sx={{ textAlign: "center" }} pt={1}>
                    <Button
                        startIcon={<SearchIcon />}
                        sx={{
                            color: "#aaaaaa",
                            backgroundColor: "#aa0000",
                            width: "250px",
                            borderRadius: "9999px",
                            borderWidth: "1px",
                            borderColor: "#aa0000",
                        }}
                    >
                        キーワード検索
                    </Button>
                </Grid>
            ) : nowPage == "notification" ? (
                <Grid item xs={9} sx={{ textAlign: "center" }} pt={1}>
                    通知
                </Grid>
            ) : nowPage == "message" ? (
                <Grid item xs={9} sx={{ textAlign: "center" }} pt={1}>
                    メッセージ
                </Grid>
            ) : (
                <></>
            )}
            <Grid item xs={1.5} p={1}>
                {nowPage == "home" ? (
                    <FlareIcon sx={{ fontSize: "24px" }} />
                ) : nowPage == "search" ||
                  nowPage == "notification" ||
                  nowPage == "message" ? (
                    <SettingsIcon />
                ) : (
                    <></>
                )}
            </Grid>
        </Grid>
    );
}
