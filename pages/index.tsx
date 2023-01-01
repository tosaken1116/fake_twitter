import { Box, Stack } from "@mui/material";
import type { NextPage } from "next";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Message from "./components/Message";
import Notification from "./components/Notification";
import Search from "./components/Search";
import TweetButton from "./components/TweetButton";
import TweetHome from "./components/TweetHome";

const Home: NextPage = () => {
    const [nowPage, setNowPage] = useState("home");
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
                {nowPage == "home" ? (
                    <TweetHome />
                ) : nowPage == "search" ? (
                    <Search />
                ) : nowPage == "notification" ? (
                    <Notification />
                ) : nowPage == "message" ? (
                    <Message />
                ) : (
                    <></>
                )}
            </Box>
            <TweetButton />
            <Footer setNowPageName={setNowPage} nowPage={nowPage} />
        </Stack>
    );
};

export default Home;
