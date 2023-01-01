import { Box, Grid, IconButton } from "@mui/material";
import Image from "next/image";

import FlareIcon from "@mui/icons-material/Flare";
import TwitterIcon from "@mui/icons-material/Twitter";
import { HeaderProps } from "../Type/Type";
export default function Header({ notified }: HeaderProps) {
    return (
        <Grid container direction="row" pt={1}>
            <Grid item xs={2} pl={1}>
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
            <Grid item xs={8} sx={{ textAlign: "center" }} pt={1}>
                <TwitterIcon sx={{ fontSize: "36px", color: "#1DA1F2" }} />
            </Grid>
            <Grid item xs={2} sx={{ textAlign: "end" }} p={1}>
                <FlareIcon sx={{ fontSize: "24px" }} />
            </Grid>
        </Grid>
    );
}
