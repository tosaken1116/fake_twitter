import { Box, Stack } from "@mui/material";
import type { NextPage } from "next";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import TweetButton from "./components/TweetButton";

const Home: NextPage = () => {
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
                {/* <TweetHome></TweetHome> */}
                <Search />
            </Box>
            <TweetButton />
            <Footer />
        </Stack>
    );
};

export default Home;
